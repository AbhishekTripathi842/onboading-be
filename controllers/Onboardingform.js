const Onboardingform = require("../Model/Onboardingform");

const multer = require('multer')

// post api

const onBoardingFormData = (req, res) => {
    const onboardingform = new Onboardingform({
        accountType: req.body.accountType,
        PortfolioStrategyName: req.body.PortfolioStrategyName,
        fundFeesCategory: req.body.fundFeesCategory,
        investmentCategory: req.body.investmentCategory,
        communicationAddress: req.body.communicationAddress,
        countryOfTaxResidency: req.body.countryOfTaxResidency,
        numberOfAccountHolders: req.body.numberOfAccountHolders,
        quantumOfInvestment: req.body.quantumOfInvestment,
        investmentMode: req.body.investmentMode,
        applicationName: req.body.applicationName,
        contactNumber: req.body.contactNumber,
        email: req.body.email,
        panNumber: req.body.panNumber,
        dateOfBirth: req.body.dateOfBirth,
        bankName: req.body.bankName,
        accountNumber: req.body.accountNumber,
        accountTitle: req.body.accountTitle,
        bankIfscCode: req.body.bankIfscCode,
        nomineeDetails: req.body.nomineeDetails,
        nomineeName1: req.body.nomineeName1,
        nomineePan1: req.body.nomineePan1,
        nomineeEmailId1: req.body.nomineeEmailId1,
        nomineeContactNumber1: req.body.nomineeContactNumber1,
        nomineeDateOfBirth1: req.body.nomineeDateOfBirth1,
        nomineeRelationshipWithApplicant1: req.body.nomineeRelationshipWithApplicant1,
        nomineeOfPercent1: req.body.nomineeOfPercent1,
        nomineeName2: req.body.nomineeName2,
        nomineePan2: req.body.nomineePan2,
        nomineeEmailId2: req.body.nomineeEmailId2,
        nomineeContactNumber2: req.body.nomineeContactNumber2,
        nomineeDateOfBirth2: req.body.nomineeDateOfBirth2,
        nomineeRelationshipWithApplicant2: req.body.nomineeRelationshipWithApplicant2,
        nomineeOfPercent2: req.body.nomineeOfPercent2,
        nomineeName3: req.body.nomineeName3,
        nomineePan3: req.body.nomineePan3,
        nomineeEmailId3: req.body.nomineeEmailId3,
        nomineeContactNumber3: req.body.nomineeContactNumber3,
        nomineeDateOfBirth3: req.body.nomineeDateOfBirth3,
        nomineeRelationshipWithApplicant3: req.body.nomineeRelationshipWithApplicant3,
        nomineeOfPercent3: req.body.nomineeOfPercent3,
        investmentObjective: req.body.investmentObjective,
        riskTolerance: req.body.riskTolerance,
        investmentExperience: req.body.investmentExperience,
        investmentStyle: req.body.investmentStyle,
        rateOfDiversifiedPortfolio: req.body.rateOfDiversifiedPortfolio,
        panCardPic: req.body.panCardPic,
        aadharCardPic: req.body.aadharCardPic
    });

    onboardingform.save().then(() => {
        res.send(onboardingform);
    }).catch((err) => {
        console.log(err);
    })
};

// get api

const getOnBoardingFormData = (req, res) => {
    Onboardingform.find().then((todo) => {
        res.send(todo);
    }).catch((err) => {
        res.send(err);
        console.log("error is here now :-", err)
    })

};

// update API

const updateOnBoardingFormData = (req, res) => {
    Onboardingform.findOneAndUpdate(
        { _id: req.params.onBoardingFormID },
        {
            $set: {
                accountType: req.body.accountType,
                PortfolioStrategyName: req.body.PortfolioStrategyName,
                fundFeesCategory: req.body.fundFeesCategory,
                investmentCategory: req.body.investmentCategory,
                communicationAddress: req.body.communicationAddress,
                countryOfTaxResidency: req.body.countryOfTaxResidency,
                numberOfAccountHolders: req.body.numberOfAccountHolders,
                quantumOfInvestment: req.body.quantumOfInvestment,
                investmentMode: req.body.investmentMode,
                applicationName: req.body.applicationName,
                contactNumber: req.body.contactNumber,
                email: req.body.email,
                panNumber: req.body.panNumber,
                dateOfBirth: req.body.dateOfBirth,
                bankName: req.body.bankName,
                accountNumber: req.body.accountNumber,
                accountTitle: req.body.accountTitle,
                bankIfscCode: req.body.bankIfscCode,
                nomineeDetails: req.body.nomineeDetails,
                nomineeName1: req.body.nomineeName1,
                nomineePan1: req.body.nomineePan1,
                nomineeEmailId1: req.body.nomineeEmailId1,
                nomineeContactNumber1: req.body.nomineeContactNumber1,
                nomineeDateOfBirth1: req.body.nomineeDateOfBirth1,
                nomineeRelationshipWithApplicant1: req.body.nomineeRelationshipWithApplicant1,
                nomineeOfPercent1: req.body.nomineeOfPercent1,
                nomineeName2: req.body.nomineeName2,
                nomineePan2: req.body.nomineePan2,
                nomineeEmailId2: req.body.nomineeEmailId2,
                nomineeContactNumber2: req.body.nomineeContactNumber2,
                nomineeDateOfBirth2: req.body.nomineeDateOfBirth2,
                nomineeRelationshipWithApplicant2: req.body.nomineeRelationshipWithApplicant2,
                nomineeOfPercent2: req.body.nomineeOfPercent2,
                nomineeName3: req.body.nomineeName3,
                nomineePan3: req.body.nomineePan3,
                nomineeEmailId3: req.body.nomineeEmailId3,
                nomineeContactNumber3: req.body.nomineeContactNumber3,
                nomineeDateOfBirth3: req.body.nomineeDateOfBirth3,
                nomineeRelationshipWithApplicant3: req.body.nomineeRelationshipWithApplicant3,
                nomineeOfPercent3: req.body.nomineeOfPercent3,
                investmentObjective: req.body.investmentObjective,
                riskTolerance: req.body.riskTolerance,
                investmentExperience: req.body.investmentExperience,
                investmentStyle: req.body.investmentStyle,
                rateOfDiversifiedPortfolio: req.body.rateOfDiversifiedPortfolio,
                panCardPic: req.body.panCardPic,
                aadharCardPic: req.body.aadharCardPic
            },
        },
        { new: true }
    ).then((Todo) => {
        res.send(Todo);
    }).catch((err) => {
        res.send(err);
        console.log("error is here now :-", err)
    })

};


// delete api

const deleteOnBoardingFormData = (req, res) => {
    Onboardingform.deleteOne({ _id: req.params.onBoardingFormID })
        .then(() => res.json({ message: "Deleted onBoarding form data" }))
        .catch((err) => res.send(err));
};

// save image with multer start

const storage = multer.diskStorage({
  destination:(req, file, cb) => {
      cb(null, 'public/Images')
  }
  , 
  filename: function (req, file, cb) {
    let ext = ''; // set default extension (if any)
    if (file.originalname.split(".").length>1) // checking if there is an extension or not.
        ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
    cb(null, Date.now() + ext)
}

})

const upload = multer({
    storage:storage
})

const single = upload.single('file')

const uploadImage =  (req,res)=>{
   console.log(req.file)

const onboardingform = new Onboardingform({
    panCardPic: req.file.filename,
    aadharCardPic: req.body.filename
});

onboardingform.save().then(() => {
    res.send(onboardingform);
}).catch((err) => {
    console.log(err);
})


}

// save image with multer end








// save image Pancard with multer start

const storagePan = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/Images/Pancard')
    }
    ,
    filename: function (req, file, cb) {
        let ext = ''; // set default extension (if any)
        if (file.originalname.split(".").length > 1) // checking if there is an extension or not.
            ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
        cb(null, Date.now() + ext)
    }

})

const uploadPan = multer({
    storage: storagePan
})

const singlePan = uploadPan.single('file')

const uploadPanImage = (req, res) => {
    console.log(req.file)

    const onboardingform = new Onboardingform({
        panCardPic: req.file.filename,
    });

    onboardingform.save().then(() => {
        res.send(onboardingform);
    }).catch((err) => {
        console.log(err);
    })


}

// save image Pancard with multer end











// save image aadhardcard with multer start

const storageAadhar = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/Images/Aadharcard')
    }
    ,
    filename: function (req, file, cb) {
        let ext = ''; // set default extension (if any)
        if (file.originalname.split(".").length > 1) // checking if there is an extension or not.
            ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
        cb(null, Date.now() + ext)
    }

})

const uploadAadhar = multer({
    storage: storageAadhar
})

const singleAadhar = uploadAadhar.single('file')

const uploadAadharImage = (req, res) => {
    console.log(req.file)

    const onboardingform = new Onboardingform({
        aadharCardPic: req.file.filename
    });

    onboardingform.save().then(() => {
        res.send(onboardingform);
    }).catch((err) => {
        console.log(err);
    })


}

// save image aadhardcard with multer end




module.exports = {
    onBoardingFormData,
    getOnBoardingFormData,
    updateOnBoardingFormData,
    deleteOnBoardingFormData,

    uploadImage,
    single,

    uploadPanImage,
    singlePan,
    uploadAadharImage,
    singleAadhar,
};
