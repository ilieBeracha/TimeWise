import { Route, Routes } from "react-router-dom";
import Header from "../../Components/Header/Header";
import "./Home.css";
import Prefrences from "../Prefrences/Prefrences";

function Home(): JSX.Element {
    
    return (
        <div className="Home">
            <Header />
            <Routes>
                <Route path="/" element={<Prefrences />}></Route>
            </Routes>
        </div>
    );
}

export default Home;
