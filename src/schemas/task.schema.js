import { z } from "zod";

export const createTaskSchema = z.object({
    title: z.string({
        required_error: "Title is a required field."
    }).min(1, {
        message: "Title must be at least 1 character long."
    }),
    description: z.string({
        required_error: "Description is a required field."
    }).min(1, {
        message: "Description must be at least 1 character long."
    }),
    date: z.string().datetime().optional()
});