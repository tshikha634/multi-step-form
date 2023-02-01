import { Fragment } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { InputField, SelectField } from "../FormFields/index";
import {
  collegeList,
  educationList,
  schoolList,
} from "../FormModel/constantDetails";

const EducationDetails = (props) => {
  const {
    formField: {
      higherEducation,
      graduation,
      postGraduation,
      higherEducationMarksInPerc,
      graduationMarksInPerc,
      postGraduationMarksInPerc,
      schoolOfHigherEducation,
      collegeGraduation,
      collegePostGraduation,
    },
  } = props;
  return (
    <Fragment>
      <Typography variant="h6" gutterBottom>
        Education Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={higherEducation.name}
            label={higherEducation.label}
            data={educationList}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={schoolOfHigherEducation.name}
            label={schoolOfHigherEducation.label}
            data={schoolList}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            name={higherEducationMarksInPerc.name}
            label={higherEducationMarksInPerc.label}
            fullWidth
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={graduation.name}
            label={graduation.label}
            data={educationList}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={collegeGraduation.name}
            label={collegeGraduation.label}
            data={collegeList}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <InputField
            name={graduationMarksInPerc.name}
            label={graduationMarksInPerc.label}
            fullWidth
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={postGraduation.name}
            label={postGraduation.label}
            data={educationList}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={collegePostGraduation.name}
            label={collegePostGraduation.label}
            data={collegeList}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <InputField
            name={postGraduationMarksInPerc.name}
            label={postGraduationMarksInPerc.label}
            fullWidth
          />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default EducationDetails;
