import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "../schemas/formSchema";   // <-- Importe o schema
import type { FormSchema } from "../schemas/formSchema"; // <-- Importe o tipo

// 1. Renomeie o componente
const RegistrationForm = () => {
    // 2. Configure o useForm corretamente com o tipo e o resolver
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm<FormSchema>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = (data: FormSchema) => {
        console.log("Dados válidos:", data);
        alert("Formulário enviado com sucesso! Verifique o console.");
    };

    return (
        <form 
            onSubmit={handleSubmit(onSubmit)}
            className="w-96 bg-white p-4 rounded-md border border-slate-300"
        >
            <div className="flex flex-col gap-2 mb-2">
                <label htmlFor="name">Nome:</label>
                <input 
                    type="text" 
                    id="name" 
                    placeholder="Digite o seu nome." 
                    {...register("name")}
                    className="h-10 pl-2 rounded-md border border-slate-300"
                />
                {errors.name && (
                    <small className="text-red-500 italic" style={{ color: 'red' }}>{errors.name.message}</small>
                )}
            </div>
            <button type="submit" className="w-full h-11 bg-cyan-400 rounded-md my-2 hover:bg-cyan-500 transition-all">Cadastrar</button>
        </form>
    );
};

export default RegistrationForm;
