import { Fragment } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { InputField, DatePickerField, SelectField } from "../FormFields/index";
import { employerDetails } from "../FormModel/constantDetails";

const CareerDetails = (props) => {
  const {
    formField: {
      totalWorkExpInMonths,
      jobTitle,
      employer,
      startDate,
      currentlyWorking,
      achievements,
    },
  } = props;
  return (
    <Fragment>
      <Typography variant="h6" gutterBottom>
        Career Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField
            name={totalWorkExpInMonths.name}
            label={totalWorkExpInMonths.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={jobTitle.name} label={jobTitle.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={employer.name}
            label={employer.label}
            data={employerDetails}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <DatePickerField
            name={startDate.name}
            label={startDate.label}
            format="MM/yy"
            views={["year", "month"]}
            minDate={new Date()}
            maxDate={new Date("2050/12/31")}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            name={currentlyWorking.name}
            label={currentlyWorking.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            name={achievements.name}
            label={achievements.label}
            fullWidth
          />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default CareerDetails;
