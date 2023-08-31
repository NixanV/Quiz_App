import {Route, Routes} from "react-router-dom"
import {Home} from "./components/Home/Home.js"
import { QuizPage } from "./components/Questions/Questions.js";
import { Header } from "./components/common/Header/Header.js"
import {Footer} from "./components/common/Footer/Footer.js"


function App() {
    return (
        <div className="App">
            <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/quiz" element={<QuizPage />}/>
                    </Routes>
                </main>
            <Footer />
        </div>
    );
}

export default App;
