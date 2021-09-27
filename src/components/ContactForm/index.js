import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addContact } from "../../actions";
import ContactForm from "./ContactForm";

const mapDispatchToProps = (dispatch) => ({
  addContact: (name, number) =>
    dispatch(addContact({ name, number, id: uuidv4() })),
});

export default connect(null, mapDispatchToProps)(ContactForm);
