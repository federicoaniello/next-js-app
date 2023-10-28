import { z } from 'zod';

export const productSchema = z.object({
    id: z.number().optional(),
    name: z.string(),
    price: z.number().nonnegative(),
});