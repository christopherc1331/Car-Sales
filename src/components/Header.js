import React from "react";

import { connect } from "react-redux";
import { updateCarFeaturesActionCreator } from "../actions/index.js";

const Header = props => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.carFromProps.image} alt={props.carFromProps.name} />
      </figure>
      <h2>{props.carFromProps.name}</h2>
      <p>Amount: ${props.carFromProps.price}</p>
    </>
  );
};

const mapStateToProps = state => {
  return { carFromProps: state.CarReducer.car };
};

export default connect(
  mapStateToProps,
  { updateCarFeatures: updateCarFeaturesActionCreator }
)(Header);
