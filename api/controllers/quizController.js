const {
  getAllQuizCategoriesServiceFunc,
  getAllQuizViaCategoryIdServiceFunc,
  getAQuizCategoryViaIdServiceFunc,
  getAllQuestionsAndOptionsViaQuizIdServiceFunc,
  getAllOptionsViaQuestionIdServiceFunc,
  saveQuizOptionServiceFunc,
  deleteQuizOptionServiceFunc,
  saveQuizCategoryServiceFunc,
  saveQuizQuestionServiceFunc,
  saveQuizServiceFunc,
  updateQuizCategoryServiceFunc,
  deleteQuizCategoryServiceFunc,
} = require("@services/quizService");

//@private
//@usage get all the professions from the database.
exports.getAllQuizViaCategoryId = async (req, res) => {
  try {
    return await getAllQuizViaCategoryIdServiceFunc(req, res);
  } catch (err) {
    return res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};

//@private
//@usage get all the scores of the user from the database.
exports.getScoreViaUserId = async (req, res) => {
  try {
    return await getScoreViaUserIdServiceFunc(req, res);
  } catch (err) {
    return res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};
//@private
//@usage get all the professions from the database.
exports.getAllQuizCategories = async (req, res) => {
  try {
    return await getAllQuizCategoriesServiceFunc(req, res);
  } catch (err) {
    return res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};

//@private
//@usage get all the professions from the database.
exports.getAQuizCategoryViaId = async (req, res) => {
  try {
    return await getAQuizCategoryViaIdServiceFunc(req, res);
  } catch (err) {
    return res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};
//@private
//@usage get all the professions from the database.
exports.getAllQuestionsAndOptionsViaQuizId = async (req, res) => {
  try {
    return await getAllQuestionsAndOptionsViaQuizIdServiceFunc(req, res);
  } catch (err) {
    return res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};

//@private
//@usage update profession in db
exports.getAllOptionsViaQuestionId = async (req, res) => {
  try {
    return await getAllOptionsViaQuestionIdServiceFunc(req, res);
  } catch (err) {
    return res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};

//@private
//@usage update profession in db
exports.saveQuizQuestion = async (req, res) => {
  try {
    return await saveQuizQuestionServiceFunc(req, res);
  } catch (err) {
    return res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};

//@private
//@usage update profession in db
exports.saveQuiz = async (req, res) => {
  try {
    return await saveQuizServiceFunc(req, res);
  } catch (err) {
    return res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};

//@private
//@usage update profession in db
exports.saveQuizOption = async (req, res) => {
  try {
    return await saveQuizOptionServiceFunc(req, res);
  } catch (err) {
    return res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};

//@private
//@usage update profession in db
exports.deleteQuizOption = async (req, res) => {
  try {
    return await deleteQuizOptionServiceFunc(req, res);
  } catch (err) {
    return res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};

//@private
//@usage add profession to db
exports.saveQuizCategory = async (req, res) => {
  try {
    return await saveQuizCategoryServiceFunc(req, res);
  } catch (err) {
    return res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};

//@private
//@usage add profession to db
exports.updateQuizCategory = async (req, res) => {
  try {
    return await updateQuizCategoryServiceFunc(req, res);
  } catch (err) {
    return res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};

//@private
//@usage add profession to db
exports.deleteQuizCategory = async (req, res) => {
  try {
    return await deleteQuizCategoryServiceFunc(req, res);
  } catch (err) {
    return res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};
