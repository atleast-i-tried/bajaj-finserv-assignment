import express from "express";
import { parseData } from "../utils/parser.js";
import { buildConcatString } from "../utils/concat.js";

const router = express.Router();

const FULL_NAME = "abhinav_gupta";
const DOB = "24062003";
const EMAIL =  "abhiguptahmr@gmail.com";
const ROLL_NUMBER =  "22BSA10135";

router.post("/bfhl", (req, res) => {
  try {
    const { data } = req.body;
    if (!Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        message: "Invalid request. 'data' must be an array.",
      });
    }

    const { odd_numbers, even_numbers, alphabets, special_characters, sum } =
      parseData(data);

    const concat_string = buildConcatString(alphabets);

    return res.status(200).json({
      is_success: true,
      user_id: `${FULL_NAME}_${DOB}`,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      odd_numbers,
      even_numbers,
      alphabets,
      special_characters,
      sum: sum.toString(),
      concat_string,
    });
  } catch (err) {
    return res.status(500).json({
      is_success: false,
      message: "Something went wrong",
      error: err.message,
    });
  }
});

export default router;
