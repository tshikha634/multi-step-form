import * as Yup from "yup";
import { formDetails } from "./formDetails";

const {
  formField: {
    firstName,
    lastName,
    gender,
    dateOfBirth,
    address1,
    city,
    state,
    zipCode,
    country,
    mobileNo,
    emailAdd,
    higherEducation,
    graduation,
    postGraduation,
    higherEducationMarksInPerc,
    graduationMarksInPerc,
    postGraduationMarksInPerc,
    schoolOfHigherEducation,
    collegeGraduation,
    collegePostGraduation,
    totalWorkExpInMonths,
    jobTitle,
    employer,
    startDate,
    currentlyWorking,
    achievements,
  },
} = formDetails;

const formValidationSchema = [
  Yup.object().shape({
    [firstName.name]: Yup.string()
      .min(2, "Too Short")
      .max(50, "TOO Long!")
      .required(`${firstName.requiredErrorMessage}`),
    [lastName.name]: Yup.string().required(`${lastName.requiredErrorMessage}`),
    [gender.name]: Yup.string().required(`${gender.requiredErrorMessage}`),
    [dateOfBirth.name]: Yup.string().required(
      `${dateOfBirth.requiredErrorMessage}`
    ),
    [address1.name]: Yup.string().required(`${address1.requiredErrorMessage}`),
    [city.name]: Yup.string()
      .nullable()
      .required(`${city.requiredErrorMessage}`),
    [state.name]: Yup.string()
      .nullable()
      .required(`${state.requiredErrorMessage}`),
    [zipCode.name]: Yup.string()
      .required(`${zipCode.requiredErrorMessage}`)
      .test(
        "len",
        `${zipCode.invalidErrorMsg}`,
        (val) => val && val.length === 6
      ),
    [country.name]: Yup.string()
      .nullable()
      .required(`${country.requiredErrorMessage}`),
    [mobileNo.name]: Yup.string()
      .nullable()
      .required(`${mobileNo.requiredErrorMessage}`),
    [emailAdd.name]: Yup.string()
      .nullable()
      .required(`${emailAdd.requiredErrorMessage}`),
  }),
  Yup.object().shape({
    [higherEducation.name]: Yup.string()
      .nullable()
      .required(`${higherEducation.requiredErrorMessage}`),
    [graduation.name]: Yup.string()
      .nullable()
      .required(`${graduation.requiredErrorMessage}`),
    [postGraduation.name]: Yup.string()
      .nullable()
      .required(`${postGraduation.requiredErrorMessage}`),
    [higherEducationMarksInPerc.name]: Yup.string()
      .nullable()
      .required(`${higherEducationMarksInPerc.requiredErrorMessage}`),
    [graduationMarksInPerc.name]: Yup.string()
      .nullable()
      .required(`${graduationMarksInPerc.requiredErrorMessage}`),
    [postGraduationMarksInPerc.name]: Yup.string()
      .nullable()
      .required(`${postGraduationMarksInPerc.requiredErrorMessage}`),
    [schoolOfHigherEducation.name]: Yup.string()
      .nullable()
      .required(`${schoolOfHigherEducation.requiredErrorMessage}`),
    [collegeGraduation.name]: Yup.string()
      .nullable()
      .required(`${collegeGraduation.requiredErrorMessage}`),
    [collegePostGraduation.name]: Yup.string()
      .nullable()
      .required(`${collegePostGraduation.requiredErrorMessage}`),
  }),
  Yup.object().shape({
    [totalWorkExpInMonths.name]: Yup.string()
      .nullable()
      .required(`${totalWorkExpInMonths.requiredErrorMessage}`),
    [jobTitle.name]: Yup.string()
      .nullable()
      .required(`${jobTitle.requiredErrorMessage}`),
    [employer.name]: Yup.string()
      .nullable()
      .required(`${employer.requiredErrorMessage}`),
    [startDate.name]: Yup.string()
      .nullable()
      .required(`${startDate.requiredErrorMessage}`),
    [currentlyWorking.name]: Yup.string()
      .nullable()
      .required(`${currentlyWorking.requiredErrorMessage}`),
    [achievements.name]: Yup.string()
      .nullable()
      .required(`${achievements.requiredErrorMessage}`),
  }),
];

export default formValidationSchema;
