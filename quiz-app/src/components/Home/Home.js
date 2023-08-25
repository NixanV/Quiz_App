import style from "./styles/home.module.css"
import * as service from "../../services/quizService"
import { useEffect, useState } from 'react'

export const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        service.getAll()
            .then(res => setData(res.results)); 
            
    }, [])

    return(
        <div>
        <h1>Trivia Questions</h1>
        <ul>
          {data.map((data, index) => (
            <li key={index}>
              <h2>{data.question}</h2>
              <p>Category: {data.category}</p>
            </li>
          ))}
        </ul>
      </div>
    );
    
}