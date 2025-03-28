import {z} from 'zod';

export const createRegistroSchema = z.object({
    name: z.string({
        required_error: 'Name is required'
    }),
    date: z.string({
        required_error: 'Date is required' 
    }).datetime().optional(),
    cultivation: z.string({
        required_error: 'Cultivation is required'
    }),
    files: z.string({
        required_error: 'Files is required'
    }),
})