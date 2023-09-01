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
                <div>
                    <button>General knowledge</button>
                </div>
                <div>
                    <button>History</button>
                </div>
                <div>
                    <button>Sports</button>
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
            </section>
        </main>
    );
    
}