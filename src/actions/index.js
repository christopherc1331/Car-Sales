export const ADD_CAR_FEATURES = "ADD_CAR_FEATURES";

export const updateCarFeaturesActionCreator = feature => {
  console.log(feature);
  return {
    type: ADD_CAR_FEATURES,
    payload: feature
  };
};
