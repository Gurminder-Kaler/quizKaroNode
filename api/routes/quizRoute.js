const express = require("express");
const router = express.Router();

const quizController = require("@controllers/quizController");

router.post("/getAllQuizCategories", quizController.getAllQuizCategories);

router.post("/getAllQuizViaCategoryId", quizController.getAllQuizViaCategoryId);

router.post("/getAQuizCategoryViaId", quizController.getAQuizCategoryViaId);

router.post(
  "/getAllQuestionsAndOptionsViaQuizId",
  quizController.getAllQuestionsAndOptionsViaQuizId
);

router.post("/getScoreViaUserId", quizController.getScoreViaUserId);

router.post(
  "/getAllOptionsViaQuestionId",
  quizController.getAllOptionsViaQuestionId
);

router.post("/saveQuiz", quizController.saveQuiz);

router.post("/saveQuizOption", quizController.saveQuizOption);

router.post("/saveQuizQuestion", quizController.saveQuizQuestion);

router.post("/deleteQuizOption", quizController.deleteQuizOption);

router.post("/saveQuizCategory", quizController.saveQuizCategory);

router.post("/updateQuizCategory", quizController.updateQuizCategory);

router.post("/deleteQuizCategory", quizController.deleteQuizCategory);

module.exports = router;
