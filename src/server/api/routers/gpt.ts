/* tslint:disable */
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const gptRouter = createTRPCRouter({
  msgbot: publicProcedure
    .input(z.object({ 
      newmsg: z.string(), 
      msg_history: z.array(z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string(),
      })),
    }))
    .mutation(async ({ input, ctx }) => {
      let response: any = "";
      try {
        const chatCompletion = await ctx.OPEN_AI_API.createChatCompletion({
          model: "gpt-3.5-turbo",
          messages: [
            {role: "system", content: `Hello there! I'm AnimalGPT, your guide for wildlife situations. If you've come across an animal and you're not sure whether it needs help or should be left alone, I'm here to help you make the right call. Just describe what you're seeing, and I'll provide guidance based on the information you provide. Let's work together! 
            I will ask the user to describe what animal they are using (mammal or bird). Then ask them for their location. Also try and calm down the user. Finally once you know the animal type (mammal or bird) and their location, use this dataset to find the closet rehab center to the user that can take in the animal.
            `},
            ...input.msg_history,
            {role: "user", content: input.newmsg},
          ],
        });

        response = chatCompletion.data.choices[0]?.message;
        console.log("Success")
        // return {
        //   botmsg: chatCompletion.data.choices[0]?.message
        // }
      } catch (e: any) {
        console.log(`FAILED:  ${e}`);
      }
      return {
        botmsg: response
      }
    }),
});
