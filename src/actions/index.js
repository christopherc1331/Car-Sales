export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const UPDATE_TOTAL = "UPDATE_TOTAL";

export const addFeatureActionCreator = feature => {
  console.log(feature);
  return {
    type: ADD_FEATURE,
    payload: feature
  };
};

export const removeFeatureActionCreator = feature => {
  console.log(feature);
  return {
    type: REMOVE_FEATURE,
    payload: feature
  };
};

export const updateTotalActionCreator = feature => {
  console.log(feature);
  return {
    type: UPDATE_TOTAL,
    payload: feature
  };
};
