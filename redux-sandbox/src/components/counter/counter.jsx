import React from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";

import "./counter.scss";

const Counter = ({ counter, inc, dec, rnd }) => {
  return (
    <div className="jumbotron counter">
      <h2 id="counter">{counter}</h2>
      <div className="counter__buttons">
        <button
          id="dec"
          className="btn btn-primary btn-lg"
          onClick={() => dec()}
        >
          DEC
        </button>
        <button
          id="inc"
          className="btn btn-primary btn-lg"
          onClick={() => inc()}
        >
          INC
        </button>
        <button
          id="rnd"
          className="btn btn-primary btn-lg"
          onClick={(payload) => rnd(payload)}
        >
          RND
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ counter: state });

export default connect(mapStateToProps, actions)(Counter);
