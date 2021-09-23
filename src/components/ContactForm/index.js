import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import ContactForm from "./ContactForm";

const mapDispatchToProps = (dispatch) => ({
  addContact: (name, number) =>
    dispatch({ type: "ADD_CONTACT", payload: { name, number, id: uuidv4() } }),
});

export default connect(null, mapDispatchToProps)(ContactForm);
