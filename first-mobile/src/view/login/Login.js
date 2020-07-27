import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { green } from "@material-ui/core/colors";

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
      <div>
        <Container Component="main" maxWidth="xs">
          <div className="mt-4 mt-md-5">
            <div className="text-center">
              <img
                className="mt-4"
                src="g3721.png"
                position="absolute"
                width="280.01px"
                height="155.01px"
                transform=" matrix(1, 0, 0, -1, 0, 0)"
              />
              
            </div>
            <div className="mt-4">
            <Typography
                className="mt-3  font-family-montserrat"
                component="h3"
                variant="h6"
                color="#fff"
              >
                EMAIL
              </Typography>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="username"
                type="email"
              />
              <Typography
                className="mt-3  font-family-montserrat"
                component="h3"
                variant="h6"
                color="#fff"
              >
                SENHA
              </Typography>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="password"
                label="Senha"
                name="password"
                type="password"
                
              />
              {/* <Button
                type="button"
                variant="contained"
                fullWidth
                backgroundColor="#E57728"
                size="large"
                className="mb-3 mb-md-4 mt-4"
              > */}
              <ColorButton
                type="button"
                fullWidth
                size="large"
                variant="contained"
                className="mt-4"
                href="/intro"
              >
                Login
              </ColorButton>
              {/* </Button> */}

              <Link href="/register" className="mt-4">
                {/* <ColorButton
                  type="button"
                  fullWidth
                  size="large"
                  variant="contained"
                  className="mt-4"
                >
                  Cadastrar
                </ColorButton> */}
                Ainda não possui uma conta ? Cadastre-se
              </Link>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
