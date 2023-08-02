const mongoose = require("mongoose");

const OnboardingformSchema = new mongoose.Schema({
    accountType: {
        type: String,
    },
    PortfolioStrategyName: {
        type: String,
    },
    fundFeesCategory: {
        type: String,
    },
    investmentCategory: {
        type: String,
    },
    communicationAddress: {
        type: String,
    },
    countryOfTaxResidency: {
        type: String,
    },
    numberOfAccountHolders: {
        type: String,
    },
    quantumOfInvestment: {
        type: String,
    },
    investmentMode: {
        type: String,
    },
    applicationName: {
        type: String,
    },
    contactNumber: {
        type: String,
    },
    email: {
        type: String,
    },
    panNumber: {
        type: String,
    },
    dateOfBirth: {
        type: String,
    },
    bankName: {
        type: String,
    },
    accountNumber: {
        type: String,
    },
    accountTitle: {
        type: String,
    },
    bankIfscCode: {
        type: String,
    },
    nomineeDetails: {
        type: String,
    },
    nomineeName1: {
        type: String,
    },
    nomineePan1: {
        type: String,
    },
    nomineeEmailId1: {
        type: String,
    },
    nomineeContactNumber1: {
        type: String,
    },
    nomineeDateOfBirth1: {
        type: String,
    },
    nomineeRelationshipWithApplicant1: {
        type: String,
    },
    nomineeOfPercent1: {
        type: String,
    },
    nomineeName2: {
        type: String,
    },
    nomineePan2: {
        type: String,
    },
    nomineeEmailId2: {
        type: String,
    },
    nomineeContactNumber2: {
        type: String,
    },
    nomineeDateOfBirth2: {
        type: String,
    },
    nomineeRelationshipWithApplicant2: {
        type: String,
    },
    nomineeOfPercent2: {
        type: String,
    },
    nomineeName3: {
        type: String,
    },
    nomineePan3: {
        type: String,
    },
    nomineeEmailId3: {
        type: String,
    },
    nomineeContactNumber3: {
        type: String,
    },
    nomineeDateOfBirth3: {
        type: String,
    },
    nomineeRelationshipWithApplicant3: {
        type: String,
    },
    nomineeOfPercent3: {
        type: String,
    },
    investmentObjective: {
        type: String,
    },
    riskTolerance: {
        type: String,
    },
    investmentExperience: {
        type: String,
    },
    investmentStyle: {
        type: String,
    },
    rateOfDiversifiedPortfolio: {
        type: String,
    },
    panCardPic: {
        type: String,
    },
    aadharCardPic: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Onboardingform", OnboardingformSchema);
