import style from "./styles/home.module.css"
import * as service from "../../services/quizService"
import { useEffect, useState } from 'react'

export const Home = () => {
return(
    <main>
        <section className={style["first_section"]}>
            <div className={style["paragraph"]}>
                <h3 className={style["welcome_msg"]}>Welcome to QuizoTopia &#129504;</h3>
                <p>
                    Get ready to dive into a world of knowledge, challenge your intellect, and have a blast while doing it! Whether 
                    you're a trivia enthusiast, a curious learner, or just someone looking for some brain-teasing fun, you've come 
                    to the right place.
                </p>
                <p>
                    Explore our diverse range of quizzes spanning a multitude of topics, from history to science, pop culture to geography,
                    and everything in between. Test your wits, learn fascinating facts, and compete with friends to see who reigns as the 
                    quiz champion.
                </p>
                <p>
                    Are you up for the challenge? Sharpen your pencils, 
                    charge up your brain cells, and let the quizzing adventure begin!&#128640;&#128218;
                </p>
                
            </div>
        </section>
    </main>
);
    
}