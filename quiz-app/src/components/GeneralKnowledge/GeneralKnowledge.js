import style from "./styles/gk.module.css"
import * as service from "../../services/quizService"
import { useEffect, useState } from "react"



export const GeneralKnowledge = () =>{
    const [data, setData] = useState([]);
    const [number, setNumber] = useState(0);
    const [buttonOptions, setButtonOptions] = useState([])
    const max = 3;
    const min = 0;
    let randomInt = 0;
    const [clicked, setClicked] = useState(false);
    const [changedIndex, setChangedIndex] = useState(0);
    

    useEffect(() => {
            service.getAllGK()
                .then((res) => setData(res.results)); 
                
    }, [])
    

    const addingElementInArray = () => {
        data.map((question, index) => (
            question.incorrect_answers.push(question.correct_answer)
        ))
    }
    
    //console.log(data);
    const shuffleArray = () => {
        let allanswersArray = [];
        let randomInt, temporaryValue;
        let currentIndex = 4;
        let randomCorrect;
        let step = 0;


        randomCorrect = Math.floor(Math.random() * (max - min + 1)) + min;


        while( currentIndex !== 0){
            if(randomCorrect == currentIndex){
                allanswersArray.push(data.map((questions, index) => (
                    questions.correct_answer
                )))
            }
            else{
                allanswersArray.push(data.map((questions, index) => (
                    questions.incorrect_answers[step]
                )))
                step += 1;
            }
            
            currentIndex--;
            console.log(allanswersArray);
        }

        // dobavqme i verniq otgovor v maisva i posle samo proverqvame dali e susthoto kato correct_answer
        return allanswersArray;
    }
    //console.log(shuffleArray());
    shuffleArray();

    const clickedAnswer = (index) => {
        setClicked(!clicked);
        setChangedIndex(index++);
    }
   

    return(
        
        <div>
        <h1>Trivia Questions</h1>
        <ul>
            {data.map((question, index) => (
                
                // console.log(randomInt = Math.floor(Math.random() * (max - min + 1)) + min),
                <li key={index}>
                    <p>Question: {question.question}</p>
                    {
                        shuffleArray().map((answer, i) => (
                            <button
                                className={clicked && answer === question.correct_answer ? style["correct-answer-button"] : style["correct-answer-button-not-clicked"]}
                            >
                                {answer}
                                
                            </button>
                        ))
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