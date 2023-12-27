import { z } from "zod";

export const createChatSchema = z.object({
  name: z.string().optional(),
});

export type CreateChatInput = z.infer<typeof createChatSchema>;
