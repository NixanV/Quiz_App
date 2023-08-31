import {Route, Routes} from "react-router-dom"
import {Home} from "./components/Home/Home.js"
import { QuizPage } from "./components/Questions/Questions.js";


function App() {
    return (
        <div className="App">
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/quiz" element={<QuizPage />}/>
                </Routes>
            </main>
        </div>
    );
}

export default App;
