import React from "react";

import { connect } from "react-redux";

import { updateTotalActionCreator } from "../actions/index.js";

const Total = props => {
  return (
    <div className="content">
      <h4>
        Total Amount: $
        {props.carFromProps.price + props.additionalPriceFromProps}
      </h4>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    carFromProps: state.CarReducer.car,
    additionalPriceFromProps: state.CarReducer.additionalPrice
  };
};

export default connect(
  mapStateToProps,
  { updateTotalAction: updateTotalActionCreator }
)(Total);
