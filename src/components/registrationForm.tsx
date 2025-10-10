import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "../schemas/formSchema";
import type { FormSchema } from "../schemas/formSchema";

const RegistrationForm = () => {
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
                    placeholder="Digite o seu nome" 
                    {...register("name")}
                    className="h-10 pl-2 rounded-md border border-slate-300"
                />
                {errors.name && (
                    <small className="text-red-500 italic" style={{ color: 'red' }}>{errors.name.message}</small>
                )}
            </div>
            <div className="flex flex-col gap-2 mb-2">
                <label htmlFor="lastname">Sobrenome:</label>
                <input 
                    type="text" 
                    id="lastname" 
                    placeholder="Digite o seu sobrenome" 
                    {...register("lastname")}
                    className="h-10 pl-2 rounded-md border border-slate-300"
                />
                {errors.lastname && (
                    <small className="text-red-500 italic" style={{ color: 'red' }}>{errors.lastname.message}</small>
                )}
            </div>
            <div className="flex flex-col gap-2 mb-2">
                <label htmlFor="gender">Gênero:</label>
                <select id="gender" {...register("gender")} className="h-10 pl-1 rounded-md border border-slate-300">
                    <option value="select">Selecione</option>
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                    <option value="outro">Outro</option>
                </select>
                {errors.gender && (
                    <small className="text-red-500 italic" style={{ color: 'red' }}>{errors.gender.message}</small>
                )}
            </div>
            <div className="flex flex-col gap-2 mb-2">
                <label htmlFor="email">E-mail:</label>
                <input 
                    type="email" 
                    id="email" 
                    placeholder="Digite o seu e-mail" 
                    {...register("email")}
                    className="h-10 pl-2 rounded-md border border-slate-300"
                />
                {errors.email && (
                    <small className="text-red-500 italic" style={{ color: 'red' }}>{errors.email.message}</small>
                )}
            </div>
            <div className="flex flex-col gap-2 mb-2">
                <label htmlFor="password">Senha:</label>
                <input 
                    type="password" 
                    id="password" 
                    placeholder="Digite a sua senha" 
                    {...register("password")}
                    className="h-10 pl-2 rounded-md border border-slate-300"
                />
                {errors.password && (
                    <small className="text-red-500 italic" style={{ color: 'red' }}>{errors.password.message}</small>
                )}
            </div>
            <div className="flex flex-col gap-2 mb-2">
                <label htmlFor="confirmpassword">Confirmação de Senha:</label>
                <input 
                    type="confirmpassword" 
                    id="confirmpassword" 
                    placeholder="Confirme a sua senha" 
                    {...register("confirmpassword")}
                    className="h-10 pl-2 rounded-md border border-slate-300"
                />
                {errors.confirmpassword && (
                    <small className="text-red-500 italic" style={{ color: 'red' }}>{errors.confirmpassword.message}</small>
                )}
            </div>
            <div className="flex gap-2 mb-2">
                <div className="flex not-[]:gap-2">
                    <input 
                    type="checkbox" 
                    id="agree" 
                    {...register("agree")}
                />
                </div>
                <label htmlFor="agree">Você aceita os termos de uso?</label>
                {errors.agree && (
                    <small className="text-red-500 italic" style={{ color: 'red' }}>{errors.agree.message}</small>
                )}
            </div>
            <button 
            type="submit" 
            className="w-full h-11 rounded-md my-2 text-white font-bold
                    bg-gradient-to-r from-blue-600 to-violet-600 
                    hover:scale-105 hover:shadow-lg hover:shadow-violet-500/50 
                    transition-all duration-500">
            Cadastrar
            </button>
        </form>
    );
};

export default RegistrationForm;
