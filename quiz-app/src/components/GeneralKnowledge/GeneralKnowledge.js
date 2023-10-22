import style from "./styles/gk.module.css"
import * as service from "../../services/quizService"
import { useEffect, useState } from "react"

const reorderAnswers = (question) => {
    const answers = [question.correct_answet, ...question.incorrect_answers];

    for(let i = 0; i < answers.length; i++){
        const j = Math.floor(Math.random() * i);
        let temp = answers[i];
        answers[i] = answers[j];
        answers[j] = temp;
    }
    
    return answers;
}

export const GeneralKnowledge = ({questions}) =>{
    const [currentQuestion, setCurrentQuestion] = useState(questions)
    const [data, setData] = useState([]);
    const [number, setNumber] = useState(0);
    const [buttonOptions, setButtonOptions] = useState([])
    const max = 3;
    const min = 0;
    const [clicked, setClicked] = useState(false);
    
    
    console.log(questions)
    useEffect(() => {
            service.getAllGK()
                .then((res) => setData(res.results)); 
                
    }, [])
    

    const shuffleArray = () => {
        let allanswersArray = [];
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

    const clickedButtonHandler = (currAnswer, correctAnswer) => {
        if(currAnswer == correctAnswer){
            setButtonClass("correct-answer-button")
        }
    }
    console.log(buttonClass);

    // v button handler func sravnqvame dali tova e verniq otgovor ili ne e

   

    return(
        
        <div>
        <h1>Trivia Questions</h1>
        <ul>
            {data.map((question, index) => (

                <li key={index}>
                    <p>Question: {question.question}</p>
                    {
                        shuffleArray().map((answer, i) => (
                            <button
                                className={style[buttonClass]}
                                onClick={clickedButtonHandler(answer, question.correct_answer)}                               
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