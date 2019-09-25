import React from "react";
import { connect } from "react-redux";

import AddedFeature from "./AddedFeature";
import { updateCarFeaturesActionCreator } from "../actions/index.js";

const AddedFeatures = props => {
  console.log(props);

  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.carFromProps.features.length ? (
        <ol type="1">
          {props.carFromProps.features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

// export default AddedFeatures;

const mapStateToProps = state => {
  return { carFromProps: state.AddedFeaturesReducer.car };
};

export default connect(
  mapStateToProps,
  { updateCarFeatures: updateCarFeaturesActionCreator }
)(AddedFeatures);
