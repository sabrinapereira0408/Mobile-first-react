import React, {Component} from "react";
import {connect} from "react-redux";
import Container from "@material-ui/core/Container";
import "../../App.css";
import "./intro.css";

export class Intro extends Component {
  render() {
    return (
      <div className="c-main">
        <Container>
          <div className="c-intro__ellipses-top"/>
          <div className="c-intro__ellipses-middle"/>
          <div className="c-intro__ellipses-bottom"/>
          <div className="c-intro">
            <div/>
            <div className="text-center">
              <img className="c-intro__logo" src="layer1.png" alt="layer"/>
              <h1 className="c-intro__title">Qual a sua Tribo?</h1>
              <p className="c-intro__subtitle">
                Para começar a usar seu perfil, primeiro nos informe sobre o que
                você curte.
              </p>
            </div>
            <div className="c-intro__actions">
              <div className="c-intro__actions-ellipses">
                <div className="c-intro__action c-intro__action--rectangle"/>
                <div className="c-intro__action c-intro__action--circle"/>
              </div>
              <button
                type="button"
                className="c-intro__next"
              >
                <img src="chevron.svg" alt="Next"/>
              </button>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Intro);
