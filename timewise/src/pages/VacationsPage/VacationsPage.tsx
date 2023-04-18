import { useEffect } from "react";
import "./VacationsPage.css";
import { useSelector } from "react-redux";
import Vacation from "../../Components/Vacation/Vacation";

function VacationsPage() {
  const recommendationSlice = useSelector((state: any) => state.recommendation);

  useEffect(() => {
    console.log(recommendationSlice);
  }, []);

  return (
    <div className="VacationsPage">
      {recommendationSlice.length === 0
        ? "error"
        : recommendationSlice.map((vaca: any) => (
            <Vacation vacation={vaca} />
          ))}
    </div>
  );
}

export default VacationsPage;
