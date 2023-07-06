import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, privateProcedure } from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  getAllPosts: privateProcedure.query(({ ctx }) => {
    return ctx.prisma.post.findMany();
  }),
  createPost: privateProcedure
    .input(z.object({ content: z.string(), title: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const authorId = ctx.userId;

      if (!authorId) throw new TRPCError({ code: "UNAUTHORIZED" });

      const post = await ctx.prisma.post.create({
        data: {
          authorId,
          content: input.content,
          title: input.title,
        },
      });

      return post;
    }),
});
