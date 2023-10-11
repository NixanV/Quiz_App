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
    

    useEffect(() => {
            service.getAllGK()
                .then((res) => setData(res.results)); 
                
    }, [])
    

    const addingElementInArray = () => {
        data.map((question, index) => (
            question.incorrect_answers.push(question.correct_answer)
        ))
    }
    
    console.log(data);
    const shuffleArray = () => {
        let array = [];
        let randomInt, temporaryValue;
        let currentIndex = 4;
        let randomCorrect;
        let step = 0;


        randomCorrect = Math.floor(Math.random() * (max - min + 1)) + min;



        while( currentIndex !== 0){
            if(randomCorrect == currentIndex){
                array.push(data.map((questions, index) => (
                    [questions.correct_answer]
                )))
            }
            else{
                array.push(data.map((questions, index) => (
                    [questions.incorrect_answers[step]]
                )))
                step += 1;
            }
            //console.log(step);
            //console.log(currentIndex);
            
            currentIndex--;
        }
        //console.log(array);
        // dobavqme i verniq otgovor v maisva i posle samo proverqvame dali e susthoto kato correct_answer

        return array;
    }

    useEffect(() => {  
        setButtonOptions([...shuffleArray()]);
    }, []);

    const clickedAnswer = () => {
        setClicked(true);
    }
    console.log(clicked);

    //console.log(buttonOptions);
    return(
        
        <div>
        <h1>Trivia Questions</h1>
        <ul>
            {data.map((question, index) => (
                // console.log(randomInt = Math.floor(Math.random() * (max - min + 1)) + min),
                <li key={index}>
                    <p>Question: {question.question}</p>
                    {/* <p>Correct Answer: {question.correct_answer}</p>
                    <p>Incorrect Answers: {question.incorrect_answers.join(', ')}</p> */}
                    <button 
                        className={clicked ? style["correct-answer-button"] : style["correct-answer-button-not-clicked"]}
                        onClick={() => clickedAnswer()}>
                        {question.correct_answer}
                    </button>
                    {
                        question.incorrect_answers.map((answer, index) => (
                            <button className={style["wrong-answer-button"]}>{answer}</button>
                        ))
                    }

                </li>
          ))}
        </ul>
      </div>
    );

}