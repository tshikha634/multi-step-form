import { Fragment } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { InputField, DatePickerField, SelectField } from "../FormFields/index";
import {
  genders,
  countries,
  states,
  cities,
} from "../FormModel/constantDetails";

const PersonalDetails = (props) => {
  const {
    formField: {
      firstName,
      lastName,
      gender,
      dateOfBirth,
      address1,
      address2,
      city,
      state,
      zipCode,
      country,
      mobileNo,
      emailAdd,
    },
  } = props;
  return (
    <Fragment>
      <Typography variant="h6" gutterBottom>
        Personal Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField name={firstName.name} label={firstName.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={lastName.name} label={lastName.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={gender.name}
            label={gender.label}
            data={genders}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <DatePickerField
            name={dateOfBirth.name}
            label={dateOfBirth.label}
            format="MM/yy"
            views={["year", "month"]}
            minDate={new Date()}
            maxDate={new Date("2050/12/31")}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={mobileNo.name} label={mobileNo.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={emailAdd.name} label={emailAdd.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={address1.name} label={address1.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={address2.name} label={address2.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={country.name}
            label={country.label}
            data={countries}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={state.name}
            label={state.label}
            data={states}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={city.name}
            label={city.label}
            data={cities}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <InputField name={zipCode.name} label={zipCode.label} fullWidth />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default PersonalDetails;
