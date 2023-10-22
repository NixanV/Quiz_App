import style from "./styles/gk.module.css"
import * as service from "../../services/quizService"
import { useEffect, useState } from "react"

const reorderAnswers = (question) => {
    const answers = [question.correct_answer, ...question.incorrect_answers];

    for(let i = 0; i < answers.length; i++){
        const j = Math.floor(Math.random() * i);
        let temp = answers[i];
        answers[i] = answers[j];
        answers[j] = temp;
    }

    return answers;
}

export const GeneralKnowledge = ({ questions }) => {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
    const [answers, setAnswers] = useState([]);
    const [data, setData] = useState([]);
    const max = 3;
    const min = 0;
    
    

    useEffect(() => {
        const question = questions[questionIndex];
        setCurrentQuestion(question);
        setAnswers(reorderAnswers(question));
    }, [questionIndex]);


    useEffect(() => {
            service.getAllGK()
                .then((res) => setData(res.results)); 
                
    }, [])
    



    // v button handler func sravnqvame dali tova e verniq otgovor ili ne e

   
    console.log(questions[questionIndex].correct_answer);
    return(
        
        <div>
        <h1>Trivia Questions</h1>
        <ul>
            {questions.map((question, index) => (

                <li key={index}>
                    <p>Question: {question.question}</p>
                    {
                        answers.map((a, i) => {
                            <button className={style["correct-answer-button"]}>
                                {a}
                            </button>
                        })
                    }
                    

                    {/* <button 
                        className={clicked && changedIndex === index ? style["correct-answer-button"] : style["correct-answer-button-not-clicked"]}
                        onClick={clickedAnswer}>
                        {question.correct_answer}
                    </button>
                    {
                        question.incorrect_answers.map((answer, index) => (
                            <button className={style["wrong-answer-button"]}>{answer}</button>
                        ))
                    } */}

                </li>

          ))}
        </ul>
      </div>
    );

}