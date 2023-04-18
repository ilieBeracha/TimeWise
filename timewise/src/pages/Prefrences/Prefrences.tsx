import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import "./Prefrences.css";
import { useForm } from "react-hook-form";
import { PrefrencesInterface } from "../../models/PrefrencesInterface";

export default function Prefrences() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const { register, handleSubmit } = useForm<PrefrencesInterface>();

  async function sendPrefrences(pref: any) {
    console.log(pref);
  }

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="Prefrences">
      <Box sx={{ width: "100%", height: "80%" }}>
        <Stepper activeStep={activeStep}>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
        </Stepper>
        <form onSubmit={handleSubmit(sendPrefrences)}>
          {activeStep === 0 && (
            <div className="QuestionDiv">
              <h1>What type of vacation are you looking for?</h1>
              <textarea {...register("type")}></textarea>
            </div>
          )}
          {activeStep === 1 && (
            <div className="QuestionDiv">
              <h1>What is your budget for this vacation?</h1>
              <textarea {...register("budget")}></textarea>
            </div>
          )}
          {activeStep === 2 && (
            <div className="QuestionDiv">
              <h1>When are you planning on taking this vacation?</h1>
              <textarea {...register("time")}></textarea>
            </div>
          )}
          {activeStep === 3 && (
            <div className="QuestionDiv">
              <h1>Who will be traveling with you?</h1>
              <textarea {...register("with")}></textarea>
            </div>
          )}
          {activeStep === 4 && (
            <div className="QuestionDiv">
              <h1>
                What kind of climate or weather do you prefer for a vacation?
              </h1>
              <textarea {...register("weather")}></textarea>
            </div>
          )}
          {activeStep === 5 ? (
            <div className="QuestionDiv">
              Done!
              <button type="submit">Finish and start exploring!</button>
              <Button type="button" onClick={handleReset}>
                Double check
              </Button>
            </div>
          ) : (
            <React.Fragment>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button
                  id="PrevButton"
                  type="button"
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button id="NextButton" type="button" onClick={handleNext}>
                  {activeStep === 4 ? "Finish" : "Next"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </form>
      </Box>
    </div>
  );
}
