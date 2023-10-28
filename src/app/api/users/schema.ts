import {z} from 'zod';

export const UserSchema = z.object({
    name: z.string().min(3),
    email: z.string().email({message: 'Invalid email address'}),
    followers: z.number().int().nonnegative().default(0),
    isActive: z.boolean().default(true),
})