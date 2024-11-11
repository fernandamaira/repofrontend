import Home from "./Pages/Home"
import Cadastro from "./Pages/Cadastro"
import Login from "./Pages/Login"
import Routes from "./routes"
import GlobalStyles from "./Styles/GlobalStyles"
import { HeaderComponent } from "./Components/Header/Header"

function App() {

  return (
    
    <div>
      <Routes/>
      <GlobalStyles/>
      <HeaderComponent />

    </div>

    
  )
}

export default App
