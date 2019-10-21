import React from "react";
import PropTypes from "prop-types";

const HelloWorldComponent = ({ name, updateName }) => {
  return (
    <div>
      <h3>Hello, {name}!</h3>
      <hr />
      <form>
        <label htmlFor="name">Say hello to:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={e => updateName(e.target.value)}
        />
      </form>
    </div>
  );
};

HelloWorldComponent.propTypes = {
  name: PropTypes.string.isRequired,
  updateName: PropTypes.func.isRequired
};

HelloWorldComponent.defaultProps = {
  name: "World"
};

export default HelloWorldComponent;
