import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { green } from "@material-ui/core/colors";

import Background from "../../assets/Rectangle.png";
import { height } from "@material-ui/system";
import "../../App.css";

const ColorButton = withStyles(theme => ({
  root: {
    color: "#fff",
    borderRadius: "8px",
    backgroundColor: "#E57728",
    position: "absolute",
    width: "48px",
    height: "48px",
    left: "1100px",
    top: "506px",
    background: "#E57728",
    borderRadius: "8px"
  }
}))(Button);

export class Intro extends Component {
  render() {
    return (
      <div className="fundo">
        <Container Component="main" maxWidth="xs">
          <div className="text-center">
            <img className="logointro" src="layer1.png" />
            <Typography className="titulo1">Qual a sua Tribo?</Typography>
            <Typography className="titulo2">
              Para começar a usar seu perfil, primeiro nos informe sobre o que
              você curte.{" "}
            </Typography>
          </div>
          <ColorButton
            type="button"
            fullWidth
            size="large"
            variant="contained"
            className="mt-4"
          >
            >>
          </ColorButton>

          {/* </Button> */}
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Intro);
