import createDataContext from "./createDataContext";
import api from "../api/jsonServer";

const INITIAL_STATE = {
  loading: false,
  remembers: []
};

const rememberReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "load_remember":
      return { ...state, loading: action.payload };

    case "fetch_remembers":
      return { ...state, remembers: action.payload };

    case "delete_remember":
      return {
        ...state,
        remembers: state.remembers.filter(item => item.id !== action.payload)
      };

    case "edit_remember":
      return {
        ...state,
        remembers: state.remembers.map(item => {
          return item.id === action.payload.id ? action.payload : item;
        })
      };
    default:
      return state;
  }
};

const fetchRemembers = dispatch => {
  return async () => {
    dispatch({ type: "load_remember", payload: true });
    try {
      const { data: response } = await api.get("/remembers");
      dispatch({ type: "fetch_remembers", payload: response });
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: "load_remember", payload: false });
    }
  };
};

const addRemember = () => {
  return async (post, callback) => {
    try {
      await api.post("/remembers", post);
    } catch (error) {
      console.log(error);
    } finally {
      if (callback) callback();
    }
  };
};

const deleteRemember = dispatch => {
  return async id => {
    try {
      await api.delete(`/remembers/${id}`);
      dispatch({ type: "delete_remember", payload: id });
    } catch (error) {
      console.log(error);
    }
  };
};

const editRemember = dispatch => {
  return async (post, callback) => {
    const { id, title, content } = post;

    try {
      await api.put(`/remembers/${id}`, { title, content });
      dispatch({ type: "edit_remember", payload: post });
    } catch (error) {
      console.log(error);
    } finally {
      if (callback) callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  rememberReducer,
  { addRemember, deleteRemember, editRemember, fetchRemembers },
  []
);
