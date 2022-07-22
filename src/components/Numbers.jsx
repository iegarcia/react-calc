import React from "react";
import Button from "./Button/Index";
import PropTypes from "prop-types";

const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];

const renderButtons = (onClickNumber) => {
  const renderButton = (number) => (
    <Button
      key={number}
      text={number.toString()}
      clickHandler={onClickNumber}
    />
  );
  return numbers.map(renderButton);
};

const Numbers = ({ onClickNumber }) => (
  <section className="numbers">{renderButtons(onClickNumber)}</section>
);

Numbers.propTypes = {
  onClickNumber: PropTypes.func.isRequired,
};

export default Numbers;
