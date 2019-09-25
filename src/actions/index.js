export const ADD_CAR_FEATURES = "ADD_CAR_FEATURES";
export const REMOVE_ADDITIONAL_FEATURES = "REMOVE_ADDITIONAL_FEATURES";

export const updateCarFeaturesActionCreator = feature => {
  console.log(feature);
  return {
    type: ADD_CAR_FEATURES,
    payload: feature
  };
};

export const updateAdditionalFeaturesActionCreator = feature => {
  console.log(feature);
  return {
    type: REMOVE_ADDITIONAL_FEATURES,
    payload: feature
  };
};

export const updateTotalActionCreator = feature => {
  console.log(feature);
  return {
    type: REMOVE_ADDITIONAL_FEATURES,
    payload: feature
  };
};
