import { useState, useEffect, useCallback, Fragment } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CircularProgress } from "@mui/material";
import { Formik, Form } from "formik";
import formKeys from "../components/FormModel/formInitialValues";
import { formDetails } from "../components/FormModel/formDetails";
import formValidationSchema from "../components/FormModel/validationSchema";
import PersonalDetails from "../components/Forms/PersonalDetails";
import EducationDetails from "../components/Forms/EducationDetails";
import CareerDetails from "../components/Forms/CareerDetails";
import ReviewAndSubmit from "../components/Forms/ReviewAndSubmit";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { submitResume } from "../store/actions/postForm";
const steps = [
  "Personal Information",
  "Education Details",
  "Career Details",
  "Review And Submit",
];

const { formId, formField } = formDetails;
function _renderStepContent(step, formValues) {
  switch (step) {
    case 0:
      return <PersonalDetails formField={formField} />;
    case 1:
      return <EducationDetails formField={formField} />;
    case 2:
      return <CareerDetails formField={formField} />;
    default:
      return <ReviewAndSubmit formField={formValues} />;
  }
}

export default function StepForm() {
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState(0);
  const [formValues, setFormValues] = useState([]);
  const currentValidationSchema = formValidationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  const submitResume = useCallback(async (values) => {
    const response = await axios.post("http://localhost:3002/post", {
      headers: {
        "Content-Type": "application/json",
      },
      values: values,
    });

    const data = await response;
    console.log(data);
    // .then((res) => {
    //   console.log(res);
    // });
  }, []);
  useEffect(() => {
    submitResume();
  }, [submitResume]);
  function _sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function _submitForm(values, actions) {
    await _sleep(1000);
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);

    setActiveStep(activeStep + 1);
  }

  function _handleSubmit(values, actions) {
    setFormValues(values);
    console.log(JSON.stringify(values));
    submitResume(values);
    // dispatch(submitResume(dispatch));
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }
  console.log(formValues);
  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

  return (
    <Fragment>
      <Typography component="h1" variant="h4" align="center" gutterBottom>
        Submit Your CV
      </Typography>
      <Stepper
        activeStep={activeStep}
        // className={classes.stepper}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Fragment>
        {activeStep === steps.length ? (
          <p>Success</p>
        ) : (
          <Formik
            initialValues={formKeys}
            validationSchema={currentValidationSchema}
            onSubmit={_handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form id={formId}>
                {_renderStepContent(activeStep, formValues)}

                <div
                // className={classes.buttons}
                >
                  {activeStep !== 0 && (
                    <Button
                      onClick={_handleBack}
                      // className={classes.button}
                    >
                      Back
                    </Button>
                  )}
                  <div
                  // className={classes.wrapper}
                  >
                    <Button
                      disabled={isSubmitting}
                      type="submit"
                      variant="contained"
                      color="primary"
                      // className={classes.button}
                    >
                      {isLastStep ? "Submit Your CV" : "Next"}
                    </Button>
                    {isSubmitting && (
                      <CircularProgress
                        size={24}
                        // className={classes.buttonProgress}
                      />
                    )}
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </Fragment>
    </Fragment>
  );
}
