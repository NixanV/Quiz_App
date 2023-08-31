import style from "./styles/home.module.css"
import * as service from "../../services/quizService"
import { useEffect, useState } from 'react'

export const Home = () => {
return(
    <section className={style["first_section"]}>
        <h2>Hello to my quiz utopia!</h2>
    </section>
);
    
}