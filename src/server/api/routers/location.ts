import { findClosest, rehabs } from "@/rehabs/rehab";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import type { IPinfo } from "node-ipinfo";
import { z } from "zod";

export const locationRouter = createTRPCRouter({
  location: publicProcedure
    .input(z.object({}))
    .query(async ({ ctx }) => {
      const retVal = {
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
