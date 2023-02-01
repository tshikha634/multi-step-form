import { Details } from "@mui/icons-material";
import { ListItem, ListItemText, Typography } from "@mui/material";
import { Fragment } from "react";
const ReviewDetails = (props) => {
  return (
    <Fragment>
      {props.label} - {props.name}
    </Fragment>
  );
};

export default ReviewDetails;
