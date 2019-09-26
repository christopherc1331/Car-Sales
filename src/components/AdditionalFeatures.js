import React from "react";
import { connect } from "react-redux";

import AdditionalFeature from "./AdditionalFeature";
import { updateAdditionalFeaturesActionCreator } from "../actions/index.js";

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.storeFromProps.length ? (
        <ol type="1">
          {props.storeFromProps.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

// export default AdditionalFeatures;

const mapStateToProps = state => {
  return {
    storeFromProps: state.CarReducer.store
  };
};

export default connect(
  mapStateToProps,
  { updateAdditionalFeatures: updateAdditionalFeaturesActionCreator }
)(AdditionalFeatures);
