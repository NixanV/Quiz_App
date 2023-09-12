import style from "./styles/gk.module.css"
import * as service from "../../services/quizService"
import { useEffect, useState } from "react"



export const GeneralKnowledge = () =>{
    const [data, setData] = useState([]);

    useEffect(() => {
            service.getAllGK()
                .then((res) => setData(res.results)); 
                
        }, [])
    console.log(data);
    // const dataInfo = data.map(item => item);
    // console.log(dataInfo.question)

    return(
        <div>
        <h1>Trivia Questions</h1>
        <ul>
          {data.map((question, index) => (
            <li key={index}>
              <p>Question: {question.question}</p>
              <p>Correct Answer: {question.correct_answer}</p>
              <p>Incorrect Answers: {question.incorrect_answers.join(', ')}</p>
            </li>
          ))}
        </ul>
      </div>
    );

}