import { Input, LinkText, Container, Form } from './Styles.js';
import InputSenha from "../../Components/InputSenha/InputSenha";
import { useForm } from "react-hook-form";
import { useCreateUser, useGetUsers } from "../../hooks/user.js";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { StyleBotaoPadrao } from "../Login/Styles.js";


function Cadastro(){
    const queryClient = useQueryClient();
    //Hooks
    const { handleSubmit, register, formState: {errors}, } = useForm({});
    const { mutate: postUser, inPending } = useCreateUser({
        onSuccess: () => { 
            toast.success("Usuário cadastrado com sucesso");
            queryClient.invalidateQueries({
                queryKey: ["users"],
            });
        },
        onError: (err) => {
            toast.error(err);
        },
    });
   const { data: users, isLoading } = useGetUsers({});
    console.log(users);
    
    //onSubmit
    function response(data){
        console.log("cheguei na função");
        postUser(data);
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit(response)}>
                <h1>CADASTRO</h1>
                <Input {...register("nome")} type="text" placeholder="Nome" />
                <Input {...register("email")} type="email" placeholder="Email" />
                <Input {...register("cargo")} type="text" placeholder="Cargo" />
                <InputSenha register={register} />
                <Input {...register("status")} type="password" placeholder="Repita sua senha" />
                <LinkText>
                    Já tem uma conta? Faça o login <a href="/login">aqui.</a>
                </LinkText>
                <StyleBotaoPadrao>CRIAR CONTA</StyleBotaoPadrao>
            </Form>

           {isLoading ? (
                <p>Carregando...</p>
            ) : (
                Array.isArray(users) && users.map((user) => {
                    return <div key={user.id}>{user?.name}</div>;
                })
            )}
        </Container>
    );
}

export default Cadastro;
