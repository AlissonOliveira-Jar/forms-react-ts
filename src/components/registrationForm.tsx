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
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input 
                    type="text" 
                    id="name" 
                    placeholder="Digite o seu nome." 
                    {...register("name")} 
                />
                {errors.name && (<small style={{ color: 'red' }}>{errors.name.message}</small>)}
            </div>
            <button type="submit">Cadastrar</button>
        </form>
    );
};

export default RegistrationForm;
