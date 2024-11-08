import {
    RouterProvider,
    createBrowserRouter,
    Route,
    createRoutesFromElements
} from "react-router-dom";

import  Home  from "./Pages/Home";
import Login from "./Pages/Login";
import  Cadastro from "./Pages/Cadastro";
import { AppLayout } from "./Layouts";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path = "/" element={<AppLayout />}>
            <Route index element={<Home/>}/>
            <Route path = "login" element={<Login/>}/>
            <Route path = "cadastro" element={<Cadastro/>}/>

        </Route>

        </Route>
    )
)

export default function Routes (){
    return <RouterProvider router = {router}/>
}