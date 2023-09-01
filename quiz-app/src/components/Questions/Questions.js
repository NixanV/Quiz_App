import * as service from "../../services/quizService"
import { useEffect, useState } from 'react'
import styles from "./styles/questions.module.css"
import { useNavigate } from "react-router-dom"

export const QuizPage = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const NavigateToQuizes = () => {
        //Todo: navigate to different pages of quizes through buttons
    }

    useEffect(() => {
        service.getAll()
            .then(res => setData(res.results)); 
            
    }, [])

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
                        <button className={styles["general_knowlege_btn"]}>General knowledge</button>
                    </div>
                    <div>
                        <button className={styles["history_btn"]}>History</button>
                    </div>
                
                    <div>
                        <button className={styles["sports_btn"]}>Sports</button>
                    </div>
                </div>
                <div className={styles["second_wrapper"]}>
                    <div>
                        <button className={styles["geography_btn"]}>Geography</button>
                    </div>
                    <div>
                        <button className={styles["animals_btn"]}>Animals</button>
                    </div>
                    <div>
                        <button className={styles["vehicles_btn"]}>Vehicles</button>
                    </div>
                </div>
                <div className={styles["third_wrapper"]}>
                    <div>
                        <button className={styles["art_btn"]}>Art</button>
                    </div>
                    <div>
                        <button>Movies</button>
                    </div>
                    <div>
                        <button>Music</button>
                    </div>
                </div>

                <div>
                    <button>Video Games</button>
                </div>
                <div>
                    <button>Sciense and Nature</button>
                </div>
                <div>
                    <button>Celebrities</button>
                </div>
            </section>
        </main>
    );
    
}