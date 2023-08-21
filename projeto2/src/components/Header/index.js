import { Link } from "react-router-dom"
import './style.css'; 

function Header(){

return(
             <header>
                 <h1>Teste header</h1>
               <Link className="logo" to="/">Prime Flix</Link>
               <Link className="favoritos" to="/favoritos"> Meus Filmes</Link>
            </header>


   
)

}

export default Header;