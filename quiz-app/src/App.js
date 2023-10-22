import {Route, Routes} from "react-router-dom"
import {Home} from "./components/Home/Home.js"
import { QuizPage } from "./components/Questions/Questions.js";
import { Header } from "./components/common/Header/Header.js"
import {Footer} from "./components/common/Footer/Footer.js"
import { GeneralKnowledge } from "./components/GeneralKnowledge/GeneralKnowledge.js";
import {History} from "./components/History/History.js"
import GeneralKnowledgeQuestions from "./data/generalKnowledge.json"


function App() {
    return (
        <div className="App">
            <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/quiz" element={<QuizPage />}/>
                        <Route path="/gk" element={<GeneralKnowledge questions = {[GeneralKnowledgeQuestions]}/>}/>
                        <Route path="/history" element={<History />} />
                    </Routes>
                </main>
            <Footer />
        </div>
    );
}

export default App;
