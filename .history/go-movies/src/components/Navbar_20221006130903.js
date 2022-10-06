import { BrowserRouter as Link } from "react-router-dom";
import 'Navbar.css';

function Navbar() {
<header>
<Link to="/" class="logo">
    
</Link>
<nav>
    <Link to="/">Home</Link>
    <Link to="/movies">About</Link>
    <Link to="/admin">Menu</Link>
</nav>
</header>
}

export default Na