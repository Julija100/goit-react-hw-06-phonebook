import style from "../Filter/Filter.module.css";
import PropTypes from "prop-types";

const Filter = ({ setFilter }) => {
  return (
    <label>
      <p className={style.filterLitleTitle}>Find contacts by name:</p>
      <input
        className={style.filterInput}
        type="text"
        onChange={(e) => setFilter(e.target.value)}
      />
    </label>
  );
};

Filter.propTypes = {
  setFilter: PropTypes.func.isRequired,
};

export default Filter;
