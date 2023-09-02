import {Route, Routes} from "react-router-dom"
import {Home} from "./components/Home/Home.js"
import { QuizPage } from "./components/Questions/Questions.js";
import { Header } from "./components/common/Header/Header.js"
import {Footer} from "./components/common/Footer/Footer.js"
import { GeneralKnowledge } from "./components/GeneralKnowledge/GeneralKnowledge.js";


function App() {
    return (
        <div className="App">
            <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/quiz" element={<QuizPage />}/>
                        <Route path="/gk" element={<GeneralKnowledge />}/>
                    </Routes>
                </main>
            <Footer />
        </div>
    );
}

export default App;
