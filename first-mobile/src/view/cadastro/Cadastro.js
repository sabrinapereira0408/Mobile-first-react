import React, {Component} from "react";
import {connect} from "react-redux";
import {withStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import {changeValue, cadastroUser} from "../../store/actions/cadastro.action";
import "../../App.css";
import "./register.css";
import Typography from "@material-ui/core/Typography";

const ColorButton = withStyles(theme => ({
  root: {
    background: '#3A5998',
    borderRadius: "8px",
    height: '100%',
    padding: '16px',
    color: 'white',
    fontWeight: '700',
    textTransform: 'uppercase'
  }
}))(Button);
const ColorButtonCadastrar = withStyles(theme => ({
  root: {
    background: '#E57728',
    borderRadius: "8px",
    height: '100%',
    padding: '16px',
    marginRight: '12px',
    color: 'white',
    fontWeight: '700',
    textTransform: 'uppercase'
  }
}))(Button);

export class Cadastro extends Component {
  // cadastrar = () => {
  //   this.props.cadastroUser(this.props.cadastro).then(() => {
  //     if (this.props.sucess) {
  //       Window.location.replace(rootUrl + "intro  ");
  //     }
  //   });
  // };
  render() {
    return (
      <div className="c-main">
        <Container>
          <div className="pt-4 pt-md-5 c-register">
            <div className="text-center">
              <img
                className="mt-4"
                src="g3721.png"
                position="absolute"
                width="191px"
                height="80px"
                transform=" matrix(1, 0, 0, -1, 0, 0)"
                alt="g3721"/>
            </div>
            <div className="mt-4">
              <Typography
                className="mt-3 font-family-montserrat c-field__label"
              >
                Nome
              </Typography>
              <TextField
                className="input"
                variant="outlined"
                required
                fullWidth
                id="name"
                name="name"
                type="name"
                InputProps={{
                  className: 'input-field',
                }}
              />
              <Typography
                className="mt-3 font-family-montserrat c-field__label"
              >
                Sobrenome
              </Typography>
              <TextField
                className="input"
                variant="outlined"
                required
                fullWidth
                id="sobrenome"
                name="sobrenome"
                type="sobrenome"
                InputProps={{
                  className: 'input-field',
                }}
              />
              <Typography
                className="mt-3 font-family-montserrat c-field__label"
              >
                Username
              </Typography>
              <TextField
                className="input"
                variant="outlined"
                required
                fullWidth
                id="username"
                name="username"
                type="username"
                InputProps={{
                  className: 'input-field',
                }}
              />
              <Typography
                className="mt-3 font-family-montserrat c-field__label"
              >
                Email
              </Typography>
              <TextField
                className="input"
                variant="outlined"
                required
                fullWidth
                id="email"
                name="email"
                type="email"
                InputProps={{
                  className: 'input-field',
                }}
              />
              <Typography
                className="mt-3 font-family-montserrat c-field__label"
              >
                Senha
              </Typography>
              <TextField
                className="input"
                variant="outlined"
                required
                fullWidth
                id="password"
                name="password"
                type="password"
                InputProps={{
                  className: 'input-field',
                }}
              />
              <Typography
                className="mt-3 font-family-montserrat c-field__label"
              >
                Confirmar Senha
              </Typography>
              <TextField
                className="input"
                variant="outlined"
                required
                fullWidth
                id="confirmar"
                name="confirmar"
                type="confirmar"
                InputProps={{
                  className: 'input-field',
                }}
              />

              <div className="c-register__register">
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
                  <img src="facebook.svg" alt="facebook" className="mr-3"/>
                  Sign in
                </ColorButton>
              </div>
              <div className="text-center">
                <Link
                  href="/login"
                  className="mt-2 c-register__login"
                  variant="body2"

                >
                  Já possui uma conta ? Faça Login
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
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
