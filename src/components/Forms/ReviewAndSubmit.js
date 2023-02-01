import Box from "@mui/material/Box";
import { Grid, Typography } from "@mui/material";
import { Fragment } from "react";

const ReviewAndSubmit = ({ formField }) => {
  return (
    <Fragment>
      <Typography variant="h6" gutterBottom>
        Review And Submit
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <div style={{ fontWeight: "bold" }}>Full Name : </div>
          {formField.firstName} {formField.lastName}
        </Grid>

        <Grid item xs={12} sm={12}>
          <div style={{ fontWeight: "bold" }}>Gender :</div> {formField.gender}
        </Grid>
        <Grid item xs={12} sm={12}>
          <div style={{ fontWeight: "bold" }}>Date OF Birth :</div>{" "}
          {formField.dateOfBirth}
        </Grid>
        <Grid item xs={12} sm={12}>
          <div style={{ fontWeight: "bold" }}>Address : </div>
          {formField.address1} {formField.address2}
          {formField.city} {formField.state} {formField.country}
          {formField.zipCode}
        </Grid>
        <Grid item xs={12} sm={12}>
          Contact Details : Mobile No. {formField.mobileNo}
          {formField.emailAdd}
        </Grid>
        <Grid item xs={12} sm={12}>
          <div style={{ fontWeight: "bold" }}>Education:</div>
          <div>
            Higher Education : {formField.higherEducation} with
            {formField.higherEducationMarksInPerc} from
            {formField.schoolOfHigherEducation}
          </div>
          <div>
            {" "}
            Graduation :{formField.graduation} with{" "}
            {formField.graduationMarksInPerc} from
            {formField.collegeGraduation}
          </div>
          <div>
            {" "}
            Post Graduation :{formField.postGraduation} with{" "}
            {formField.postGraduationMarksInPerc} from{" "}
            {formField.collegePostGraduation}
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div style={{ fontWeight: "bold" }}>Employement Details: </div>
          <div>Total Work Experience :{formField.totalWorkExpInMonths}</div>
          <div> Comapny Name : {formField.employer}</div>
          <div>Job Title : {formField.jobTitle}</div>
          <div>
            Currently Working:
            {formField.currentlyWorking}
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default ReviewAndSubmit;
