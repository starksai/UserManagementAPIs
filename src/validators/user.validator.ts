import z from 'zod';


export const createUserSchema = z.object({
    body: z.object({
        name: z.string().min(2, "name is required and more that 2 chars"),
        email: z.string().email("email required"),
        password: z.string().min(6, "more than 5 chars required")
    })

})

export const paramsUserScheam = z.object({
    params: z.object({
        id: z.string()
    })

})