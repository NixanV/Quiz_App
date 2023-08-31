import * as service from "../../services/quizService"
import { useEffect, useState } from 'react'

export const QuizPage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        service.getAll()
            .then(res => setData(res.results)); 
            
    }, [])

    return(
        <div>
        <h1>Trivia Questions</h1>
        <ul>
          {data.map((data) => (
            <li>
              <h2>{data.question}</h2>
              <p>Right answer: {data.correct_answer}</p>
            </li>
          ))}
        </ul>
      </div>
    );
    
}