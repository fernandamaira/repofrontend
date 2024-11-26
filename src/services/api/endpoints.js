import api from "./api";

//USUARIOS
export async function GetUsers(){
    const {data} = api.get(`/usuarios`);
    return data;
}
export async function CreateUser(body){
    const {data} = api.create(`/usuarios`, body);
    return data;
}
export async function UpdateUser(id, body){
    const {data} = api.put(`/usuarios${id}`, body);
    return data;
}
export async function DeleteUser(id){
    const {data} = api.delete(`/usuarios${id}`);
    return data;
}

//SESSOES
export async function GetUsers(){
    const {data} = api.get("/sessoes");
    return data;
}
export async function CreateUser(){
    const {data} = api.create("/sessoes");
    return data;
}
export async function DeleteUser(){
    const {data} = api.delete("/sessoes/:id_usuario");
    return data;
}