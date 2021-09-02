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
import MuiAlert from "@material-ui/lab/Alert";

import { Visibility, VisibilityOff } from "@material-ui/icons";

import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../GraphQL/Mutations/Login";
import { isLoggedInVar } from "../../Apollo/ReactVariables";

const LoginInputs = () => {
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });
  const [email, setEmail] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [loginUser, { loading, error }] = useMutation(LOGIN_USER, {
    onCompleted({ login }) {
      if (login) {
        localStorage.setItem("token", JSON.stringify(login));
        isLoggedInVar(true);
      }
    },
    onError(error) {
      console.log(error.message);
    },
  });

  const submitLogin = (event) => {
    event.preventDefault();

    loginUser({
      variables: { email: email, password: values.password },
    });
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
            onSubmit={submitLogin}
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
                required
              >
                Login
              </Typography>
              <Box py={2}>
                {error ? (
                  <MuiAlert severity="error">{error.message}</MuiAlert>
                ) : (
                  <MuiAlert severity="info">
                    To Login you need a valid user account! If you do not have
                    an account please contact the Administator
                  </MuiAlert>
                )}
              </Box>

              <TextField
                label="Email"
                type="email"
                margin="dense"
                fullWidth
                variant="outlined"
                value={email}
                onChange={handleEmail}
                required
              />
              <FormControl variant="outlined" fullWidth margin="dense" required>
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
                type="submit"
              >
                {loading ? "loading..." : "LOGIN"}
              </Button>
            </Paper>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default React.memo(LoginInputs);
