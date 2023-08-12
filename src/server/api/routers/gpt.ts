import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const gptRouter = createTRPCRouter({
  msgbot: publicProcedure
    .input(z.object({ 
      newmsg: z.string(), 
      msg_history: z.array(z.object({
        role: z.enum(["user", "assistant", "system"]),
        content: z.string(),
      })),
    }))
    .mutation(async ({ input, ctx }) => {
      try {
        const chatCompletion = await ctx.OPEN_AI_API.createChatCompletion({
          model: "gpt-3.5-turbo",
          messages: [
            {role: "system", content: "Hello, I am a chatbot"},
            ...input.msg_history,
            {role: "user", content: input.newmsg},
          ],
        });

        return {
          botmsg: chatCompletion.data.choices[0]?.message
        }
      } catch (e) {
        console.log(e);
        return {
          botmsg: "Sorry, I am unable to respond to that message",
        }
      }
    }),
});
