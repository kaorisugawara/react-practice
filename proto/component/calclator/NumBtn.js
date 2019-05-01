import React from "react";
import PropType from "prop-types";

const NumBtn = ({n,onClick}) => (
    <button onClick={onClick}>{n}</button>
)

NumBtn.PropType = {
    onClick: PropType.func.isRequired
}

export default NumBtn;