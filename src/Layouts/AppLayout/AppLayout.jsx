import { Outlet } from "react-router-dom";
import { Container } from "./Styles";
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";



export default function AppLayout(){

        return(
            <Container>
                <Header></Header>

                <Outlet/>

                <Footer></Footer>

            </Container>

        );
}