import { api } from "@/utils/api";
import { useEffect } from "react";

export default function Home() {
  const owo = api.location.location.useQuery({ text: "FUCK U"}, {refetchOnWindowFocus: false});
  useEffect(() => {
    console.log(owo.data)
  }, [owo]);

  return (
    <>
      {/* hero */}
      <section className="w-full relative">
        <img className="w-full" src="/wolfy.png" alt="" />
        <h1 className="font-inter text-white xl:text-[8rem] lg:text-[5rem] md:text-[3rem] text-[2rem] xl:leading-[9rem] lg:leading-[6rem] absolute xl:top-[5%] lg:top-[8%] top-[10%] text-center w-full font-bold">BE A VOICE <br /> FOR WILDLIFE</h1>
        <h3 className="font-inter text-white xl:text-[4rem] lg:text-[2.5rem] md:text-[2rem] text-[1.0rem] lg:leading-[5rem] absolute top-[55%] text-center w-full px-[8rem]">Uniting for the Healing and Conservation of Our Wild Companions</h3>
      </section>

      {/* location and thingies near me */}
      <section className="w-full">
        <div className="flex lg:flex-row flex-col lg:justify-between py-10 px-20">
          {/* left location */}
          <div className="lg:w-[55%] bg-wild-300 flex flex-col rounded-3xl">
            {/* percise location */}
            <div className="text-center text-7xl">
              <div className="py-3"></div>
              <label className="text-white font-inter">Location</label>
              <div className="py-2" />
              <label className="text-[#E29E44] text-5xl font-inter">{owo.data ? owo.data.city + ", " + owo.data.region : "Loading"} </label>
              <div className="py-4" />
            </div>
            <div className="h-2 w-full bg-white" />
            {/* learn more */}
            <div className="flex justify-between items-center py-16 px-8">
              <p className="text-white text-2xl w-[65%]">Encountered an <span className="text-[#E29E44]">Injured or Lost Animal?</span> <strong>Talk to our Chatbot</strong> to Determine if Calling a Rehabilitation Center is Needed!</p>
              <button className="font-inter font-extrabold p-4 bg-[#354F52] text-2xl text-[#CAD2C5] border-2 border-[#84A98C] rounded-full">Learn More</button>
            </div>
          </div>
          {/* right map */}
          <div className="lg:w-[40%] lg:mt-0 mt-6 block">
            <iframe className="w-full" src={owo.data && owo.data.rehab ? owo.data.rehab.src : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12172.065935309933!2d-74.76881695000002!3d40.29759295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3fd2cf2d88343%3A0x47f2b1997c276cc2!2sJazzercise!5e0!3m2!1sen!2sus!4v1691886766069!5m2!1sen!2sus"} width="600" height="450" loading="lazy" allowFullScreen={false} referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
