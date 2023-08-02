const router = require("express").Router();
const { getTodos, createTodo, updateTodo, deleteTodo } = require("./controllers/Todo");
const { onBoardingFormData, getOnBoardingFormData, updateOnBoardingFormData, deleteOnBoardingFormData, uploadImage, single, uploadPanImage , singlePan, uploadAadharImage, singleAadhar} = require("./controllers/Onboardingform");

router.get("/", (req, res) => {
  res.send("Let's build a CRUD API!");
});

//CRUD API

router.get("/getTodos", getTodos);
router.post("/createTodo", createTodo);
router.put("/todos/:todoID", updateTodo);
router.delete("/todos/:todoID", deleteTodo);

// onBoarding task 

router.get("/getOnBoardingFormData", getOnBoardingFormData);
router.post("/onBoardingForm", onBoardingFormData);
router.put("/onBoardingForm/:onBoardingFormID", updateOnBoardingFormData);
router.delete("/onBoardingForm/:onBoardingFormID", deleteOnBoardingFormData);

// save image with multer
router.post('/panCardUploadImage',singlePan,uploadPanImage);

router.post('/aadharCardUploadImage',singleAadhar,uploadAadharImage);

module.exports = router;