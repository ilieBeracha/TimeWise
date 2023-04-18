import { Route, Routes } from "react-router-dom";
import Header from "../../Components/Header/Header";
import "./Home.css";
import Prefrences from "../Prefrences/Prefrences";
import { useSelector } from "react-redux";
import VacationsPage from "../VacationsPage/VacationsPage";

function Home(): JSX.Element {
  const recommendationSlice = useSelector((state: any) => state.recommendation);
  return (
    <div className="Home">
      <Header />
      <Routes>
        {recommendationSlice.length === 0 ? (
          <Route path="/" element={<Prefrences />}></Route>
        ) : (
          <Route path="/" element={<VacationsPage />}></Route>
        )}
      </Routes>
    </div>
  );
}

export default Home;
