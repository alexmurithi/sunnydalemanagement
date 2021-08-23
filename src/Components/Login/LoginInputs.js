import React, { useState } from "react";

import {
  Box,
  Container,
  TextField,
  Paper,
  Button,
  Typography,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import { Visibility, VisibilityOff } from "@material-ui/icons";

const LoginInputs = () => {
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Box py={2}>
        <Container maxwidth="lg">
          <form
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Paper style={{ padding: 12, width: 600, borderRadius: 0 }}>
              <Typography
                variant="h3"
                gutterBottom
                color="primary"
                align="center"
                style={{
                  fontWeight: 800,
                }}
              >
                Login
              </Typography>
              <Box py={2}>
                <Alert>
                  To Login you need a valid user account! If you do not have an
                  account please contact the Administator
                </Alert>
              </Box>

              <TextField
                label="Email"
                type="email"
                margin="dense"
                fullWidth
                variant="outlined"
              />
              <FormControl variant="outlined" fullWidth margin="dense">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={70}
                />
              </FormControl>
              <Button
                variant="outlined"
                color="primary"
                style={{ marginTop: 21, borderRadius: 0, width: 200 }}
              >
                Login
              </Button>
            </Paper>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default React.memo(LoginInputs);
