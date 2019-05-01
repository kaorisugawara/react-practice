import React from "react";
import PropType from "prop-types";

const PlusBtn = ({onClick}) => (
    <button onClick={onClick}>+</button>
)

PlusBtn.PropType = {
    onClick: PropType.func.isRequired
}

export default PlusBtn;