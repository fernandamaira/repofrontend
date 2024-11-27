import BotaoPadrao from "../../Components/BotaoPadrao";
import { Input, LinkText, Container, Form } from './Styles.js';
import InputSenha from "../../Components/InputSenha/InputSenha";
import { useForm } from "react-hook-form";
import { useCreateUser, useGetUsers } from "../../hooks/user.js";



function Cadastro(){
    //Hooks
    const { handleSubmit, register, formState: {errors}, } = useForm ({});
    const { mutate: postUser, inPending } = useCreateUser({});
    const { data: users, isLoading } = useGetUsers({});
    console.log(users);
    //onSubmit
    function response (data){
        console.log("cheguei na função");
        postUser(data);
    }

    return (
        <Container>
            <Form onSubmit= {handleSubmit(response)}>
                <h1> CADASTRO </h1>
                <Input {...register("nome")} type="text" placeholder="Nome" />
                <Input {...register("email")} type="email" placeholder="Email" />
                <Input {...register("cargo")} type="text" placeholder="Cargo" />
                <InputSenha register={register} />
                <Input {...register("status")} type="password" placeholder="Repita sua senha" />
                <LinkText>
                Já tem uma conta? Faça o login <a href="/login">aqui.</a>
                </LinkText>
                <BotaoPadrao>CRIAR CONTA</BotaoPadrao>
                </Form>

        </Container>
    )

}

export default Cadastro;