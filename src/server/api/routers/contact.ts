import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { contact } from "@/server/db/schema";


export const contactRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        name: z.string().min(1),
        email: z.string().email(), // Validate as email
        phoneNumber: z.string().min(10).max(15), // Changed from number to string
        question: z.string().min(1),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const newQuestion = await ctx.db.insert(contact).values({
        name: input.name,
        email: input.email,
        phoneNumber: input.phoneNumber, // Now a string
        question: input.question,
      }).returning();

      return newQuestion;
    }),



    //   getAllTask: publicProcedure.query(async ({ ctx }) => {
    //     return await ctx.db.select().from(taskmanager)
    //   }),

    //   update: publicProcedure
    //   .input(
    //     z.object({
    //       id: z.string(),
    //       title: z.string(),
    //       description: z.string(),
    //       status: z.enum(["Pending", "Approved"]).default("Pending"),
    //     })
    //   )
    //   .mutation(async ({ input }) => {
    //     return db
    //       .update(taskmanager)
    //       .set({
    //         title: input.title,
    //         description: input.description,
    //         status: input.status,
    //       })
    //       .where(eq(taskmanager.id, input.id)); // Use eq() for filtering by ID
    //   }),

    //   delete: publicProcedure
    //   .input(z.object({ id: z.string() }))
    //   .mutation(async ({ input }) => {
    //     return db.delete(taskmanager).where(eq(taskmanager.id, input.id)); // Use eq() for filtering
    //   }),


    });

   

