import { z } from "zod";

export const userIdSchema = z.number();
export const roomIdSchema = z.number();

export const MatchRequestSchema = z.object({
  userId: userIdSchema,
});

export const MatchResponseSchema = z.object({
  usersId: z.array(userIdSchema),
  roomId: roomIdSchema
})

export type MatchRequest = z.infer<typeof MatchRequestSchema>;
export type MatchResponse = z.infer<typeof MatchResponseSchema>;

export const StartGameRequestSchema = z.object({
  roomId: roomIdSchema,
  userId: userIdSchema
})

export type StartGameRequest = z.infer<typeof StartGameRequestSchema>;

