import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { IPinfo } from "node-ipinfo";
import { z } from "zod";

type rehabCenter = {
  county: string | null;
  phone_number: string;
  location: string;
  name: string | null;
  animals: string[];
  src: string;
  lat: number;
  long: number;
}

const rehabs: rehabCenter[] = [
	{
		county: "Atlantic County",
		phone_number: "609-927-0538",
		location: "155 Asbury Rd., Egg Harbor Twp., NJ 08234",
		name: "Peggy & Suzanne Fenton, Wildlife Aid",
		animals: ["Mammals"],
		src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3083.874819495471!2d-74.68138412361117!3d39.38171011798209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c0c3f08d44c2ab%3A0x2b2074319e1ef62e!2s155%20Asbury%20Rd%2C%20Egg%20Harbor%20Township%2C%20NJ%2008234!5e0!3m2!1sen!2sus!4v1691854226340!5m2!1sen!2sus",
		lat: 39.381900,
		long: -74.679510,
	},
   {
		county: null,
		phone_number: "856-983-3329",
		location: "6 Sawmill Rd., Medford, NJ 08055",
		name: "Woodford Cedar Run Wildlife Refuge",
		animals: ["Mammals", "Birds"],
	   	src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1115.1785605537432!2d-74.85044728083047!3d39.820287218977356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c131be36eff677%3A0x1236230854bf4ea2!2s6%20Sawmill%20Rd%2C%20Medford%2C%20NJ%2008055!5e0!3m2!1sen!2sus!4v1691854661084!5m2!1sen!2sus",
		lat: 48.389600,
		long: -75.995710,
	},
	{
		county: "Gloucester County",
		phone_number: "856-207-7026",
		location: "Victoria Schmidt, Angelique Gorham, 115 Heritage Rd., Barnsboro, NJ 08080",
		name: "Victoria Schmidt, Angelique Gorham",
		animals: ["Mammals", "Birds"],
		src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d744.8953650138329!2d-75.16628232088894!3d39.76458452571852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6da04b602d635%3A0x2e3806f3af2ea26d!2s115%20Heritage%20Rd%2C%20Sewell%2C%20NJ%2008080!5e0!3m2!1sen!2sus!4v1691854782237!5m2!1sen!2sus",
		lat: 39.764430,
		long: -75.165750,
	},
	{
		county: "Hunterdon County",
		phone_number: "908-200-1040",
		location: "PO Box 5046, Clinton, NJ 08807",
		name: "Woodlands Wildlife Refuge",
		animals: ["Mammals"],
		src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3030.6480385544537!2d-74.99064992356654!3d40.57144904620746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c40a6126074077%3A0x41216fc849f07d60!2sWoodlands%20Wildlife%20Refuge!5e0!3m2!1sen!2sus!4v1691854934698!5m2!1sen!2sus",
		lat: 40.57162426184517,
		long: -74.988075003513610,
	},
  	{
  		county: "Mercer County",
		phone_number: "609-303-0552",
		location: "1748 River Rd. (Rt. 29), Titusville, NJ 08560",
		name: "Mercer County Wildlife Center",
		animals: ["Mammals", "Birds", "Reptiles", "Amphibians"],
		src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.6408624708974!2d-74.9227861903909!3d40.32812741828911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ff3f693c4811%3A0xf11e26d0642c8521!2sWildlife%20Center%20Friends!5e0!3m2!1sen!2sus!4v1691855095940!5m2!1sen!2sus",
		lat: 40.57162426184517,
		long: -74.988075003513610,
	},
	{
		county: null,
		phone_number: "609-466-1871",
		location: "4 View Point Dr., Hopewell, NJ 08525-2112",
		name: "Hannah Suthers, Songbirds at Home, 4 View Point Dr.",
		animals: ["Birds"],
		src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d402.5426102740318!2d-74.78234617208922!3d40.373463199804824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3fb34bd6f7d95%3A0x37d841d3d43d9f0b!2s4%20Vw%20Pt%20Dr%2C%20Hopewell%2C%20NJ%2008525!5e0!3m2!1sen!2sus!4v1691855609806!5m2!1sen!2sus",
		lat: 40.37363209130415,
		long: -74.78192681731207,
	},
	{
    	county: "Monmouth",
    	phone_number: "732-775-5157",
    	location: "71 Lincoln Ave., Neptune City, NJ 07753",
      	name: null,
      	animals: ["Mammals"],
		src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d453.03068577799525!2d-74.02940099118793!3d40.195382684818235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c227d81b1059c3%3A0xb423ac0e481e8e38!2s71%20Lincoln%20Ave%2C%20Neptune%20City%2C%20NJ%2007753!5e0!3m2!1sen!2sus!4v1691855651501!5m2!1sen!2sus",
      	lat: 40.195535651329784,
      	long: -74.029149390043,
	},
	{
		county: null,
		phone_number: "908-647-2353",
		location: "1390 White Bridge Rd., Millington, NJ 07946",
		name: "Christopher Soucy, The Raptor Trust.",
		animals: ["Birds"],
		src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.955938480308!2d-74.50356042356177!3d40.69696803853516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3bca7962cc09d%3A0xd55fce287d8228ae!2s1390%20White%20Bridge%20Rd%2C%20Basking%20Ridge%2C%20NJ%2007920!5e0!3m2!1sen!2sus!4v1691855935242!5m2!1sen!2sus",
		lat: 40.697151059338964, 
		long: -74.50100696147574,
	},
	{
		county: null,
		phone_number: "973-769-6830",
		location: "Deborah DeRosa, 37 Pine Ave., Madison, NJ 07940",
		name: "Deborah DeRosa",
		animals: ["Mammals"],
		src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.5072912635865!2d-74.42926342355881!3d40.77286033388701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3a5e0d3a434a5%3A0xd00b51fc39b39c16!2s37%20Pine%20Ave%2C%20Madison%2C%20NJ%2007940!5e0!3m2!1sen!2sus!4v1691855980000!5m2!1sen!2sus",
		lat: 40.77298622120878, 
		long: -74.42673007681606,
	},
    {
		county: "Ocean county",
    	phone_number: "732-255-9270",
    	location: "1916 Kenilworth Ct., Toms River, NJ 08753",
    	name: "Toms River Avian Care",
    	animals: ["Birds"],
		src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3055.553717049437!2d-74.16917712358749!3d40.018415179785336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c19cd6c29dfda5%3A0xdc6dc204928d536f!2s1916%20Kenilworth%20Ct%2C%20Toms%20River%2C%20NJ%2008753!5e0!3m2!1sen!2sus!4v1691856025289!5m2!1sen!2sus",
    	lat: 40.01854038581312,
    	long: -74.16617296357829,
	},
	{
		county: "Passaic County",
		phone_number: "973-839-4597",
		location: "781 Ringwood Ave., Wanaque, NJ 07465",
		name: "Dolores Garbowski, Lysa DeLaurentis, Sally Halloran Wildlife Freedom Inc.",		
		animals: ["Mammals"],
		src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.223328786491!2d-74.29616892354855!3d41.04224501733198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c31c63f809f8f9%3A0x471c358ab976ea46!2s781%20Ringwood%20Ave%2C%20Wanaque%2C%20NJ%2007465!5e0!3m2!1sen!2sus!4v1691856077753!5m2!1sen!2sus",
		lat: 41.042418994312825, 
		long: -74.29365837680207,
	},
  	{
    	county: "Sussex county",
    	phone_number: "973-702-1957",
    	location: "146 Neilson Rd., Wantage, NJ 07461",
    	name: "Avian Wildlife Center",
    	animals: ["Birds"],
		src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.8508483654573!2d-74.70027222354152!3d41.225020706050095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c34219c25c7fe7%3A0x4f5c7da0ff2d2abe!2s146%20Neilson%20Rd%2C%20Wantage%2C%20NJ%2007461!5e0!3m2!1sen!2sus!4v1691856179318!5m2!1sen!2sus",
    	lat: 40.06294594586479,
    	long: -74.16327494795294,
  	},
	{
		county: "Warren County",
		phone_number: "908-362-9453",
		location: "14 Grouse Mountain Rd., Blairstown NJ 07825",
		name: "Hope Kosch-Davison, Caitlin Aromando, Samantha Delapenha, Kayla Lester, Wild Baby Rescue Center",
		animals: ["Mammals"],
		src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.506267005373!2d-74.98751992355051!3d40.99229102040848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c481e9f6fb41cf%3A0x2e22a35c9ea98dea!2s14%20Grouse%20Mountain%20Rd%2C%20Blairstown%2C%20NJ%2007825!5e0!3m2!1sen!2sus!4v1691856212513!5m2!1sen!2sus",
		lat: 40.99236795233559, 
		long: -74.98483771542776,
	},
	{
		county: null,
		phone_number: "973-800-2420",
		location: "52 County Rd. 661, Newton, NJ 07860",
		name: "Kelly Simonetti, Carol Dragland, Ronnie Lissner, Sara May-Bennett, Alice J. DeBiasse, Susanne Newton-Lopez, Helen Sallitt, Donna Pontrelli, Antler Ridge Wildlife Sanctuary",
		animals: ["Mammals"],
		src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.091435257566!2d-74.87871232355096!3d40.97947862119707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c37eb4e286e29d%3A0xabad80890b57c291!2s52%20County%20Rd%20661%2C%20Newton%2C%20NJ%2007860!5e0!3m2!1sen!2sus!4v1691856241711!5m2!1sen!2sus",
		lat: 40.97970986285442, 
		long: -74.8760847461168,
	},
];

function distance(lat: number, long: number, rehab_center: rehabCenter) {
	return Math.sqrt(Math.pow(lat-rehab_center.lat, 2) + Math.pow(long-rehab_center.long, 2))
}

function findClosest(lat: number, long: number) {
	let closest = 999;
	let center = -1;
	for (const [index, rehab] of rehabs.entries()) {
		const dist = distance(lat, long, rehab);
		if (dist < closest) {
			closest = dist;
			center = index;
		}
	}
	return rehabs[center];
}

export const locationRouter = createTRPCRouter({
  location: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(async ({ ctx }) => {
      let retVal = {
        isInNJ: false,
        city: "Lambertville",
        region: "New Jersey",
        lat: 40,
        long: -74,
        rehab: rehabs[0],
      }
      await ctx.IP_INFO_WRAPPER.lookupIp("").then((response: IPinfo) => {
          
        if (response.region === "New Jersey") {
            retVal.isInNJ = true;
            retVal.city = response.city;
            retVal.region = response.region;
            retVal.lat = Number(response.loc.split(",")[0] ?? "40").valueOf();
            retVal.long = Number(response.loc.split(",")[1] ?? "-74").valueOf();
          }
          console.log(retVal);
      });

      const rehab = findClosest(retVal.lat, retVal.long);
      retVal.rehab = rehab;

      return retVal;
    }),
});
