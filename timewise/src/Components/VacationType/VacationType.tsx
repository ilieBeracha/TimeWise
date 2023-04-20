import { useState } from "react";
import "./VacationType.css";

function VacationType({
  vaca,
  setSelectedVacationType,
}: {
  vaca: any;
  setSelectedVacationType: any;
}) {
  const [chosenType, setChosenType] = useState(false);
  const selectType = (target: any) => {
    console.log(target.id);
    
    setChosenType(!chosenType)
    setSelectedVacationType(target.id)
  };

  return (
    <div
      id={vaca.type}
      className={chosenType? 'VacationType vacationChosen' : 'VacationType'}
      onClick={(e: any) => selectType(e.target)}
    >
      <img src={vaca.img ? vaca.img : <></>} alt="" />
      <span>{vaca.type}</span>
    </div>
  );
}

export default VacationType;
