import React from "react";
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  Stack,
  Checkbox,
  TextField,
} from "@mui/material";
import Link from "next/link";

import CustomTextField from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField";

interface loginType {
  title?: string;
  subtitle?: JSX.Element | JSX.Element[];
  subtext?: JSX.Element | JSX.Element[];
}

const AuthLogin = ({ title, subtitle, subtext }: loginType) => (
  <>
    {title ? (
      <Typography fontWeight="700" variant="h2" mb={1}>
        {title}
      </Typography>
    ) : null}

    {subtext}

    <Stack>
      <TextField
        fullWidth
        id="outlined-basic"
        label="Account"
        variant="outlined"
      />
      <Box mt={2} />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Password"
        variant="outlined"
      />

      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="아이디 저장"
        />
      </FormGroup>
    </Stack>
    <Box>
      <Button
        color="primary"
        variant="contained"
        size="large"
        fullWidth
        component={Link}
        href="/"
        type="submit"
      >
        Sign In
      </Button>
    </Box>
    {subtitle}
  </>
);

export default AuthLogin;
