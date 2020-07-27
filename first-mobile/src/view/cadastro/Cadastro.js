import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { green } from "@material-ui/core/colors";
import { changeValue, cadastroUser } from "../../store/actions/cadastro.action";
import { rootUrl } from "../../config/globalConfig";


import "../../App.css";

const ColorButton = withStyles(theme => ({
  root: {
    position: "absolute",
    left: "54.73%",
    right: "52.27%",
    top: "110.86%",
    bottom: "17.24%",
    width:"144px",
    height:"63px",

    background: '#3A5998',
    borderRadius: "8px"
    
  }
}))(Button);
const ColorButtonCadastrar = withStyles(theme => ({
  root: {
    position: "absolute",
    left: "34.6%",
    right: "52.27%",
    top: "110.86%",
    bottom: "17.24%",
    width:"144px",
    height:"63px",

    background: '#E57728',
    borderRadius: "8px"
    
  }
}))(Button);

export class Cadastro extends Component {
  cadastrar = () => {
    this.props.cadastroUser(this.props.cadastro).then(() => {
      if (this.props.sucess) {
        Window.location.replace(rootUrl + "intro  ");
      }
    });
  };
  render() {
    return (
      // <div className="fundo">
        <Container Component="main" maxWidth="xs">
          <div className="mt-4 mt-md-5">
            <div className="text-center">
              <img
                className="mt-4"
                src="g3721.png"
                position="absolute"
                width="191px"
                height="80px"
                transform=" matrix(1, 0, 0, -1, 0, 0)"
              />
            </div>
            <div className="mt-4">
              <TextField
                className="input"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Nome"
                name="name"
                type="name"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="sobrenome"
                label="Sobrenome"
                name="sobrenome"
                type="sobrenome"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                type="username"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                type="email"
              />

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
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="confirmar"
                label=" Confirmar Senha"
                name="confirmar"
                type="confirmar"
              />

              <ColorButtonCadastrar
                type="button"
                variant="contained"
                fullWidth
                background="#E57728"
                size="large"
                className="mb-3 mb-md-4 mt-4"
                width="50px"
                href="/register"

                onClick={() => this.cadastrar()}
              >
                CADASTRAR
              </ColorButtonCadastrar>
              <ColorButton
                type="button"
                fullWidth
                size="large"
                variant="contained"
                className="mt-4"
                href="/login"

              >
                SING IN
              </ColorButton>
              {/* </Button> */}
              <div className="text-center">
                <Link
                  href="/login"
                  className="mt-4"
                  color="secondary"
                  variant="body2"

                >
                  Já possui uma conta ? Faça Login
                </Link>
              </div>
            </div>
          </div>
        </Container>
      // </div>
    );
  }
}
const mapStateToProps = state => ({
  cadastro: state.cadastroReducer.cadastro,
  sucess: state.cadastroReducer.sucess,
  error: state.cadastroReducer.error
});

const mapDispatchToProps = dispatch => ({
  changeValue: value => dispatch(changeValue(value)),
  cadastroUser: cadastro => dispatch(cadastroUser(cadastro))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cadastro);
