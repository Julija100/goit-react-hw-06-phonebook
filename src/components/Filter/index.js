import { connect } from "react-redux";
import Filter from "./Filter";


const mapDispatchToProps = (dispatch) => ({
  setFilter: (filter) => dispatch({ type: "SET_FILTER", payload: filter }),
});

export default connect(null, mapDispatchToProps)(Filter);
