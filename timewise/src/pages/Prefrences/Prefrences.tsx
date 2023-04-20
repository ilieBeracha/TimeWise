import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import "./Prefrences.css";
import { useForm } from "react-hook-form";
import { PrefrencesInterface } from "../../models/PrefrencesInterface";
import { openaiService } from "../../services/OpenaiService";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRecommendation } from "../../app/recommendationSlice";
import { vacationsTypesData } from "../../helpers/vacationTypeData";
import VacationType from "../../Components/VacationType/VacationType";

export default function Prefrences() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const { register, handleSubmit } = useForm<PrefrencesInterface>();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  // const [answerFilled, setAnswerFilled] = useState<string>("");
  const [vacationsTypes, setVacationsTypes] = useState<any>(vacationsTypesData);
  const [selectedVacationType, setSelectedVacationType] = useState<any>();

  async function sendPrefrences(pref: any) {
    setLoading(!loading);
    const data = {
      type: selectedVacationType,
      budget: pref.budget + "$",
      arrive: pref.arrive,
      return: pref.return,
      with: pref.with + "people",
      extrainfo: pref.extrainfo,
    };
    const results = await openaiService.sendPrefrencesToOpenai(data);
    const parsedPref = JSON.parse(results);
    dispatch(setRecommendation(parsedPref));
    setLoading(!loading);
  }

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    // setAnswerFilled("");
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
      {loading ? (
        <main>
          <svg
            className="sp"
            viewBox="0 0 128 128"
            width="128px"
            height="128px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="grad1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#000" />
                <stop offset="40%" stop-color="#fff" />
                <stop offset="100%" stop-color="#fff" />
              </linearGradient>
              <linearGradient id="grad2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#000" />
                <stop offset="60%" stop-color="#000" />
                <stop offset="100%" stop-color="#fff" />
              </linearGradient>
              <mask id="mask1">
                <rect x="0" y="0" width="128" height="128" fill="url(#grad1)" />
              </mask>
              <mask id="mask2">
                <rect x="0" y="0" width="128" height="128" fill="url(#grad2)" />
              </mask>
            </defs>
            <g fill="none" stroke-linecap="round" stroke-width="16">
              <circle
                className="sp__ring"
                r="56"
                cx="64"
                cy="64"
                stroke="#ddd"
              />
              <g stroke="hsl(223,90%,50%)">
                <path
                  className="sp__worm1"
                  d="M120,64c0,30.928-25.072,56-56,56S8,94.928,8,64"
                  stroke="hsl(343,90%,50%)"
                  stroke-dasharray="43.98 307.87"
                />
                <g transform="translate(42,42)">
                  <g className="sp__worm2" transform="translate(-42,0)">
                    <path
                      className="sp__worm2-1"
                      d="M8,22c0-7.732,6.268-14,14-14s14,6.268,14,14"
                      stroke-dasharray="43.98 175.92"
                    />
                  </g>
                </g>
              </g>
              <g stroke="hsl(283,90%,50%)" mask="url(#mask1)">
                <path
                  className="sp__worm1"
                  d="M120,64c0,30.928-25.072,56-56,56S8,94.928,8,64"
                  stroke-dasharray="43.98 307.87"
                />
                <g transform="translate(42,42)">
                  <g className="sp__worm2" transform="translate(-42,0)">
                    <path
                      className="sp__worm2-1"
                      d="M8,22c0-7.732,6.268-14,14-14s14,6.268,14,14"
                      stroke-dasharray="43.98 175.92"
                    />
                  </g>
                </g>
              </g>
              <g stroke="hsl(343,90%,50%)" mask="url(#mask2)">
                <path
                  className="sp__worm1"
                  d="M120,64c0,30.928-25.072,56-56,56S8,94.928,8,64"
                  stroke-dasharray="43.98 307.87"
                />
                <g transform="translate(42,42)">
                  <g className="sp__worm2" transform="translate(-42,0)">
                    <path
                      className="sp__worm2-1"
                      d="M8,22c0-7.732,6.268-14,14-14s14,6.268,14,14"
                      stroke-dasharray="43.98 175.92"
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </main>
      ) : (
        <Box sx={{ width: "100%", height: "80%", marginTop: "30px" }}>
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
                <div className="QuestionDivHeader">
                  <h1>What type of vacation are you looking for?</h1>
                  <Button id="NextButton" type="button" onClick={handleNext}>
                    {/* {activeStep === 4 ? "Finish" : "Next"} */}
                    Next
                  </Button>
                </div>
                {/* <textarea
                  placeholder="Beach vacation, City break ,Adventure vacation, Luxury vacation, Wellness retreat, Cultural vacation, Safari vacation, Ski vacation, Road trip vacation, Cruise vacation..."
                  {...register("type")}
                  onChange={(e) => setAnswerFilled(e.target.value)}
                ></textarea> */}
                <div className="vacationsTypesDiv">
                  {vacationsTypes.map((vaca: any) => (
                    <VacationType
                      vaca={vaca}
                      setSelectedVacationType={setSelectedVacationType}
                    />
                  ))}
                </div>
              </div>
            )}
            {activeStep === 1 && (
              <div className="QuestionDiv">
                <div className="QuestionDivHeader">
                  <h1>What is your budget for this vacation?</h1>
                  <div className="QuestionsBtns">
                    <Button
                      id="PrevButton"
                      type="button"
                      color="inherit"
                      onClick={handleBack}
                      sx={{ mr: 1 }}
                    >
                      Back
                    </Button>
                    <Button id="NextButton" type="button" onClick={handleNext}>
                      {/* {activeStep === 4 ? "Finish" : "Next"} */}
                      Next
                    </Button>
                  </div>
                </div>
                {/* <textarea
                  {...register("budget")}
                  // onChange={(e) => setAnswerFilled(e.target.value)}
                ></textarea> */}
                <input
                  id="budgetInput"
                  type="number"
                  placeholder="$"
                  {...register("budget")}
                />
              </div>
            )}
            {activeStep === 2 && (
              <div className="QuestionDiv">
                <div className="QuestionDivHeader">
                  <h1>When are you planning on taking this vacation?</h1>
                  <div className="QuestionsBtns">
                    <Button
                      id="PrevButton"
                      type="button"
                      color="inherit"
                      onClick={handleBack}
                      sx={{ mr: 1 }}
                    >
                      Back
                    </Button>
                    <Button id="NextButton" type="button" onClick={handleNext}>
                      {/* {activeStep === 4 ? "Finish" : "Next"} */}
                      Next
                    </Button>
                  </div>
                </div>
                <div className="DateInputs">
                  <label htmlFor="arrive">Arrival:</label>
                  <input
                    type="date"
                    id="arrive"
                    {...register("arrive")}
                    className="DateInput"
                  />
                  <label htmlFor="return">Departure:</label>
                  <input
                    type="date"
                    id="return"
                    {...register("return")}
                    className="DateInput"
                  />
                </div>
              </div>
            )}
            {activeStep === 3 && (
              <div className="QuestionDiv">
                <div className="QuestionDivHeader">
                  <h1>Who will be traveling with you?</h1>
                  <div className="QuestionsBtns">
                    <Button
                      id="PrevButton"
                      type="button"
                      color="inherit"
                      onClick={handleBack}
                      sx={{ mr: 1 }}
                    >
                      Back
                    </Button>
                    <Button id="NextButton" type="button" onClick={handleNext}>
                      {/* {activeStep === 4 ? "Finish" : "Next"} */}
                      Next
                    </Button>
                  </div>
                </div>
                {/* <textarea
                  {...register("with")}
                  // onChange={(e) => setAnswerFilled(e.target.value)}
                ></textarea> */}
                <input
                  id="withInput"
                  type="number"
                  placeholder=""
                  {...register("with")}
                />
              </div>
            )}
            {activeStep === 4 && (
              <div className="QuestionDiv">
                <div className="QuestionDivHeader">
                  <h1>
                    Any additional information? (feel free to write as you wish)
                  </h1>
                  <div className="QuestionsBtns">
                    <Button
                      id="PrevButton"
                      type="button"
                      color="inherit"
                      onClick={handleBack}
                      sx={{ mr: 1 }}
                    >
                      Back
                    </Button>
                    <Button id="NextButton" type="button" onClick={handleNext}>
                      {/* {activeStep === 4 ? "Finish" : "Next"} */}
                      Finish
                    </Button>
                  </div>
                </div>
                <textarea
                  {...register("extrainfo")}
                  // onChange={(e) => setAnswerFilled(e.target.value)}
                ></textarea>
              </div>
            )}
            {activeStep === 5 ? (
              <div className="QuestionDiv">
                <h1>Done!</h1>
                <button type="submit">Finish and start exploring!</button>
                {/* <Button type="button" onClick={handleReset}>
                  Double check
                </Button> */}
              </div>
            ) : (
              <React.Fragment>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  {/* <Button
                    id="PrevButton"
                    type="button"
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Back
                  </Button> */}
                  <Box sx={{ flex: "1 1 auto" }} />
                  {/* {answerFilled === "" ? (
                    <Button
                      disabled={true}
                      id="NextButton"
                      type="button"
                      onClick={handleNext}
                    >
                      {activeStep === 4 ? "Finish" : "Next"}
                    </Button>
                  ) : ( */}
                </Box>
              </React.Fragment>
            )}
          </form>
        </Box>
      )}
    </div>
  );
}
