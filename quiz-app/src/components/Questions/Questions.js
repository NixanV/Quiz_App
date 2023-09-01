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
                        <button className={styles["History_btn"]}>History</button>
                    </div>
                
                    <div>
                        <button>Sports</button>
                    </div>
                </div>
                <div>
                    <button>Geography</button>
                </div>
                <div>
                    <button>Animals</button>
                </div>
                <div>
                    <button>Vehicles</button>
                </div>
                <div>
                    <button>Art</button>
                </div>
                <div>
                    <button>Movies</button>
                </div>
                <div>
                    <button>Music</button>
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