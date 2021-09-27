import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { removeContact, setFilter, addContact } from "./actions";

const intialState = {
  items: JSON.parse(localStorage.getItem("contacts")) || [],
  filter: "",
};

const contacts = createReducer(intialState, {
  [addContact]: (state, { payload }) => {
    const items = [...state.items, payload];
    localStorage.setItem("contacts", JSON.stringify(items));

    return {
      ...state,
      items,
    };
  },

  [removeContact]: (state, { payload }) => {
    const items = state.items.filter(({ id }) => id !== payload.id);
    localStorage.setItem("contacts", JSON.stringify(items));

    return {
      ...state,
      items,
    };
  },

  [setFilter]: (state, { payload }) => ({ ...state, filter: payload }),
});

export default combineReducers({ contacts });
