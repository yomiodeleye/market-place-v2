import * as z from 'zod'

const GenericStringContraint = z.string().min(2).max(40)

export const userAuthSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})
const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
)

export const userRegisterSchema = z
  .object({
    firstName: GenericStringContraint,
    lastName: GenericStringContraint,
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })
