import { z } from 'zod';

export const formSchema = z.object({
    name: z.string().min(3, { message: "O nome precisa ter no mínimo 3 caracteres." }),
    lastname: z.string().min(3, { message: "O sobrenome precisa ter no mínimo 3 caracteres." }),
    gender: z.enum(['masculino', 'feminino', 'outro'], {
        message: "Você precisa escolher um gênero.",
    }),
    email: z.email({ message: "Utilize um e-mail válido." }).nonempty({ message: "O campo é obrigatório." }),
    password: z.string().min(8, { message: "A senha precisa ter no mínimo 8 caracteres." }),
    confirmpassword: z.string().min(8, { message: "A confirmação precisa ter no mínimo 8 caracteres." }),
    agree: z.literal(true, {
        message: "Você precisa concordar com os termos.",
    }),
}).refine((data) => data.password === data.confirmpassword, {
    message: "As senhas precisam ser iguais.",
    path: ["confirmpassword"],
});

export type FormSchema = z.infer<typeof formSchema>;
