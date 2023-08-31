import { Link } from "react-router-dom";
import style from "./styles/header.module.css"

export const Header = () => {
    return(
        <header>
            <nav className={style["nav-bar"]}>
                <h2 >QuizoTopia</h2>
                <ul className={style["ul-nav"]}>
                    <li>
                        <Link to="/quiz">Quizes</Link>
                    </li>
                    <li>
                        <Link to="/">Profile</Link>
                    </li>
                    <li><Link to="/">Login</Link></li>
                    <li><Link to="/">Register</Link></li>
                    <li><Link to="/">Logout</Link></li>
                </ul>
            </nav>
        </header>
    )
}