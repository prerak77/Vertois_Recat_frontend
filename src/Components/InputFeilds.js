import { Grid } from "@mui/material";

import { InputTitle, InputNumber, Inputs } from "../Styles/SectionA";

export const InputFeilds = (Details) => {
  return (
    <Grid item xs={6}>
      <InputTitle>
        <InputNumber>{Details.num}</InputNumber> {Details.details}
      </InputTitle>
      <Inputs
        label={Details.label}
        variant="outlined"
        defaultValue={Details.value}
        onChange = {Details.onChange}
        name = {Details.name}
      />
    </Grid>
  );
};
