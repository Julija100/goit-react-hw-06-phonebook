const intialState = {
  contacts: {
    items: JSON.parse(localStorage.getItem("contacts")) || [],
    filter: "",
  },
};

const reducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case "ADD_CONTACT": {
      const items = [...state.contacts.items, payload];

      localStorage.setItem("contacts", JSON.stringify(items));
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items,
        },
      };
    }
    case "REMOVE_CONTACT": {
      const items = state.contacts.items.filter(({ id }) => id !== payload.id);
      localStorage.setItem("contacts", JSON.stringify(items));

      return {
        ...state,
        contacts: {
          ...state.contacts,
          items,
        },
      };
    }
    case "SET_FILTER":
      return { ...state, contacts: { ...state.contacts, filter: payload } };
    default:
      return state;
  }
};

export default reducer;
