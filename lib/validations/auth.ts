import * as z from "zod"

export const userAuthSchema = z.object({
  email: z.string().email(),
})


export const userRegisterSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  userName: z.string(),
  email: z.string().email(),
  phone: z.string().transform(data => Number(data)),
  password: z.string().regex( new RegExp("/^(?!\\s+)(?!.*\\s+$)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[$^*.[\\]{}()?\"!@#%&/\\\\,><':;|_~`=+\\- ])[A-Za-z0-9$^*.[\\]{}()?\"!@#%&/\\\\,><':;|_~`=+\\- ]{8,256}$/")),
  confirmPassword: z.string().regex( new RegExp("/^(?!\\s+)(?!.*\\s+$)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[$^*.[\\]{}()?\"!@#%&/\\\\,><':;|_~`=+\\- ])[A-Za-z0-9$^*.[\\]{}()?\"!@#%&/\\\\,><':;|_~`=+\\- ]{8,256}$/")),
}).superRefine(({ confirmPassword, password }, ctx) => {
  if (confirmPassword !== password) {
    ctx.addIssue({
      code: "custom",
      message: "The passwords did not match"
    });
  }
});
