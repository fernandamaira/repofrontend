import api from "./api";

//USUARIOS
export async function GetUsers(){
    const {data} = await api.get(`/usuarios`);
    return data;
}
export async function CreateUser(body){
    console.log("cheguei no end");
    const {data} = await api.create(`/usuarios`, body);
    console.log(data);
    return data;
}
export async function UpdateUser(id, body){
    const {data} = await api.put(`/usuarios${id}`, body);
    return data;
}
export async function DeleteUser(id){
    const {data} = await api.delete(`/usuarios${id}`);
    return data;
}

