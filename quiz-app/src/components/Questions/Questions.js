import * as service from "../../services/quizService"
import { useEffect, useState } from 'react'
import styles from "./styles/questions.module.css"
import { useNavigate } from "react-router-dom"

export const QuizPage = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const NavigateToQuizes = (event) => {
        //Todo: navigate to different pages of quizes through buttons
        console.log(event.currentTarget.className);
        if(event.currentTarget.className == "questions_general_knowledge_btn__dwE7F"){
            navigate("/gk");
        }
        else if(event.currentTarget.className == "questions_history_btn__P9u-m"){
            navigate("/history")
        }
        else if(event.currentTarget.className == "questions_sports_btn__6pWhG"){
            navigate("/sports")
        }
        //TODO: navigate to all other pages
    }

    // useEffect(() => {
    //     service.getAll()
    //         .then(res => setData(res.results)); 
            
    // }, [])

    return(
        <main className={styles["main_section_categories"]}>
            <section className={styles["section_category"]}>
                <div className={styles["wrapper_heading"]}>
                    <h2>Categories</h2>
                </div>     
            </section>
            <section className={styles["types_quizes"]}>
                <div className={styles["first_wrapper"]}>
                    <div>
                        <button className={styles["general_knowledge_btn"]} onClick={NavigateToQuizes}>General knowledge</button>
                    </div>
                    <div>
                        <button className={styles["history_btn"]} onClick={NavigateToQuizes}>History</button>
                    </div>
                
                    <div>
                        <button className={styles["sports_btn"]} onClick={NavigateToQuizes}>Sports</button>
                    </div>
                </div>
                <div className={styles["second_wrapper"]}>
                    <div>
                        <button className={styles["geography_btn"]} onClick={NavigateToQuizes}>Geography</button>
                    </div>
                    <div>
                        <button className={styles["animals_btn"]} onClick={NavigateToQuizes}>Animals</button>
                    </div>
                    <div>
                        <button className={styles["vehicles_btn"]} onClick={NavigateToQuizes}>Vehicles</button>
                    </div>
                </div>
                <div className={styles["third_wrapper"]}>
                    <div>
                        <button className={styles["art_btn"]} onClick={NavigateToQuizes}>Art</button>
                    </div>
                    <div>
                        <button className={styles["movies_btn"]} onClick={NavigateToQuizes}>Movies</button>
                    </div>
                    <div>
                        <button className={styles["music_btn"]} onClick={NavigateToQuizes}>Music</button>
                    </div>
                </div>

                <div className={styles["fourth_wrapper"]}>
                    <div>
                        <button className={styles["video_games_btn"]} onClick={NavigateToQuizes}>Video Games</button>
                    </div>
                    <div>
                        <button className={styles["science_nature_btn"]} onClick={NavigateToQuizes}>Science and Nature</button>
                    </div>
                    <div>
                        <button className={styles["celebrities_btn"]} onClick={NavigateToQuizes}>Celebrities</button>
                    </div>
                </div>
                
            </section>
        </main>
    );
    
}