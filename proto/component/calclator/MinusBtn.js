import React from "react";
import PropType from "prop-types";

const MinusBtn = ({onClick}) => (
    <button onClick={onClick}>-</button>
)

MinusBtn.PropType = {
    onClick: PropType.func.isRequired
}

export default MinusBtn;