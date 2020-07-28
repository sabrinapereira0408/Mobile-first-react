import React, {Component} from "react";
import {connect} from "react-redux";
import {withStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import './login.css';
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";

const ColorButton = withStyles(theme => ({
  root: {
    color: "#fff",
    borderRadius: "8px",
    backgroundColor: "#E57728",
    "&:hover": {
      backgroundColor: "#c76118"
    }
  }
}))(Button);

export class Login extends Component {
  render() {
    return (
      <div className="c-main">
        <Container>
          <div className="pt-4 pt-md-5 c-login__content">
            <div className="c-login__header">
              <div className="text-center mb-5">
                <img
                  className="mt-4"
                  src="g3721.png"
                  position="absolute"
                  width="280.01px"
                  height="155.01px"
                  transform=" matrix(1, 0, 0, -1, 0, 0)"
                  alt="mt-4"/>
              </div>
              <Typography
                className="mt-3 font-family-montserrat c-field__label"
              >
                EMAIL
              </Typography>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                name="username"
                type="email"
                InputProps={{
                  className: 'input-field',
                }}
              />
              <Typography
                className="mt-3 font-family-montserrat c-field__label"
              >
                SENHA
              </Typography>
              <div className="c-field__label-password">
                <img src="eye.svg" alt="eye" className="c-field__label-password-eye"/>
                <TextField
                  variant="outlined"
                  className="mb-5"
                  required
                  fullWidth
                  id="password" name="password"
                  type="password"
                  InputProps={{
                    className: 'input-field',
                  }}
                />
              </div>
              <div className="mt-4 c-login__submit">

                <ColorButton
                  type="button"
                  variant="contained"
                  className="mt-4 c-login__login"
                  href="/intro"
                >
                  Login
                </ColorButton>
              </div>
            </div>

            <Link href="/register" className="mb-4 c-login__register">
              {/* <ColorButton
                  type="button"
                  fullWidth
                  size="large"
                  variant="contained"
                  className="mt-4"
                >
                  Cadastrar
                </ColorButton> */}
              Ainda não possui uma conta ? <u>Cadastre-se</u>
            </Link>
          </div>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
