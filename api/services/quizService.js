const mongoose = require("mongoose");
const QuizCategory = require("@models/quizCategoryModel");
const QuizQuestion = require("@models/quizQuestionModel");
const QuizOption = require("@models/quizOptionModel");
const QuizResponse = require("@models/quizResponseModel");
const Quiz = require("@models/quizModel");
const User = require("@models/userModel");
const messages = require("@constants/messages");
// const addReportTypeValidator = require('@validations/helpAndSupportRequest/addReportTypeValidator')

// get all quiz categories
const getAllQuizCategoriesServiceFunc = async (req, res) => {
  try {
    // const { errors, isValid } = sendMessageToSkyBookValidator(req.body);

    // if (!isValid) {
    //   return res.json({
    //     status: 404,
    //     success: false,
    //     message: errors,
    //   });
    // }

    QuizCategory.find()
      .exec()
      .then((categories) => {
        res.json({
          success: true,
          status: 200,
          message: messages.SUCCESS.QUIZ.CATEGORY.FOUND,
          data: categories,
        });
      });
  } catch (err) {
    res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};
// get all quiz categories
const getAllQuizViaCategoryIdServiceFunc = async (req, res) => {
  try {
    // const { errors, isValid } = sendMessageToSkyBookValidator(req.body);

    // if (!isValid) {
    //   return res.json({
    //     status: 404,
    //     success: false,
    //     message: errors,
    //   });
    // }

    Quiz.find({ category: req.body.categoryId })
      .exec()
      .then((quiz) => {
        res.json({
          success: true,
          status: 200,
          message: messages.SUCCESS.QUIZ.FOUND,
          data: quiz,
        });
      });
  } catch (err) {
    res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};

//get single quiz category via id
const getAQuizCategoryViaIdServiceFunc = async (req, res) => {
  try {
    // const { errors, isValid } = sendMessageToSkyBookValidator(req.body);

    // if (!isValid) {
    //   return res.json({
    //     status: 404,
    //     success: false,
    //     message: errors,
    //   });
    // }

    QuizCategory.find({ _id: req.body.id })
      .exec()
      .then((quiz) => {
        res.json({
          success: true,
          status: 200,
          message: messages.SUCCESS.QUIZ.CATEGORY.FOUND,
          data: quiz,
        });
      });
  } catch (err) {
    res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};

//create quiz category
const saveQuizCategoryServiceFunc = async (req, res) => {
  let obj = {
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
  };
  new QuizCategory(obj)
    .save()
    .then((result) => {
      console.log("result", result);
      res.json({
        success: true,
        message: messages.SUCCESS.QUIZ.CATEGORY.SAVED,
        data: result,
      });
    })
    .catch((err) => {
      res.json({
        status: 500,
        success: false,
        message: err.message ? err.message.message : "",
      });
    });
};

//update quiz category
const updateQuizCategoryServiceFunc = async (req, res) => {
  let obj = {
    name: req.body.name,
  };
  QuizCategory.findOneAndUpdate(
    {
      _id: req.body.id,
    },
    { $set: obj },
    { new: true }
  )
    .then((result) => {
      console.log("result", result);
      res.json({
        success: true,
        status: 200,
        message: messages.SUCCESS.QUIZ.CATEGORY.UPDATED,
        data: result,
      });
    })
    .catch((err) => {
      res.json({
        status: 500,
        success: false,
        message: err.message ? err.message.message : "",
      });
    });
};

//create question withina quiz
const saveQuizQuestionServiceFunc = async (req, res) => {
  let obj = {
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    quiz: req.body.quizId,
  };
  new QuizQuestion(obj)
    .save()
    .then((result) => {
      console.log("result", result);
      res.json({
        success: true,
        status: 200,
        message: messages.SUCCESS.QUIZ.QUESTION.SAVED,
        data: result,
      });
    })
    .catch((err) => {
      res.json({
        status: 500,
        success: false,
        message: err.message ? err.message.message : "",
      });
    });
};

//create question withina quiz
const saveQuizOptionServiceFunc = async (req, res) => {
  let obj = {
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    question: req.body.questionId,
  };
  new QuizOption(obj)
    .save()
    .then((result) => {
      console.log("result", result);
      res.json({
        success: true,
        status: 200,
        message: messages.SUCCESS.QUIZ.OPTION.SAVED,
        data: result,
      });
    })
    .catch((err) => {
      res.json({
        status: 500,
        success: false,
        message: err.message ? err.message : "",
      });
    });
};

//start creating quiz
const saveQuizServiceFunc = async (req, res) => {
  let obj = {
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    category: req.body.categoryId,
  };
  new Quiz(obj)
    .save()
    .then((result) => {
      console.log("result", result);
      res.json({
        success: true,
        status: 200,
        message: messages.SUCCESS.QUIZ.CREATED,
        data: result,
      });
    })
    .catch((err) => {
      res.json({
        status: 500,
        success: false,
        message: err.message ? err.message.message : "",
      });
    });
};

const getScoreViaUserIdServiceFunc = async (req, res) => {
  try {
    let obj = {
      user: req.body.userId,
    };

    Score.find(obj).then((res) => {
      res.json({
        success: true,
        status: 200,
        data: res,
      });
    });
  } catch (err) {
    res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};

const changeReportTypeStatusServiceFunc = async (req, res) => {
  try {
    let fields = {};
    console.log("service jelper", req.body);

    fields.status = !req.body.status;

    console.log("service fields", fields);
    ReportType.findOneAndUpdate(
      { _id: req.body._id },
      { $set: fields },
      { new: true }
    ).then((innerPost) => {
      console.log("innerPost", innerPost);
      res.json({
        success: true,
        status: 200,
        data: innerPost,
      });
    });
  } catch (err) {
    res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};

const deleteQuizOptionServiceFunc = async (req, res) => {
  try {
    QuizOption.findByIdAndDelete(req.body.id).then((request) => {
      res.json({
        success: true,
        message: messages.SUCCESS.QUIZ.OPTION.DELETED,
      });
    });
  } catch (err) {
    res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};

module.exports = {
  getAllQuizCategoriesServiceFunc,
  getAllQuizViaCategoryIdServiceFunc,
  saveQuizCategoryServiceFunc,
  getAQuizCategoryViaIdServiceFunc,
  saveQuizQuestionServiceFunc,
  changeReportTypeStatusServiceFunc,
  saveQuizServiceFunc,
  saveQuizOptionServiceFunc,
  updateQuizCategoryServiceFunc,
  deleteQuizOptionServiceFunc,
  getScoreViaUserIdServiceFunc
};
