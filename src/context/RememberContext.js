import createDataContext from "./createDataContext";

const rememberReducer = (state, action) => {
  switch (action.type) {
    case "add_remember":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: `Remember #${state.length + 1}`
        }
      ];
    case "delete_remember":
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};

const addRemember = dispatch => {
  return () => {
    dispatch({ type: "add_remember" });
  };
};

const deleteRemember = dispatch => {
  return id => {
    dispatch({ type: "delete_remember", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  rememberReducer,
  { addRemember, deleteRemember },
  []
);
