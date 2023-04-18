import express from "express";
import { getPrefrencesFromOpenai } from "../3-logic/openaiLogic";

export const OpenaiRoute = express.Router();

OpenaiRoute.post("/getprefrences", async (req, res) => {
  const pref = req.body;

  try {
    const results = await getPrefrencesFromOpenai(pref);
    res.status(200).json(results);
  } catch (e) {
    res.status(401).json(e);
  }
});
