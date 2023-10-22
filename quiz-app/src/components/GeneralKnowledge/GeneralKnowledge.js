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

    console.log(currentQuestion);

    console.log(answers);
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
            //console.log(allanswersArray);
        }

        // dobavqme i verniq otgovor v maisva i posle samo proverqvame dali e susthoto kato correct_answer
        return allanswersArray;
    }
    //console.log(shuffleArray());
    shuffleArray();


    // v button handler func sravnqvame dali tova e verniq otgovor ili ne e

   
    console.log(questions[questionIndex].correct_answer);
    return(
        
        <div>
        <h1>Trivia Questions</h1>
        <ul>
            {questions.map((question, index) => (

                <li key={index}>
                    <p>Question: {question.question}</p>
                    {console.log(question.question)}
                    {
                        shuffleArray().map((answer, i) => (
                            <button
                                                  
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