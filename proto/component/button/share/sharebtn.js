import React from "react";
import PropType from "prop-types";

import Icon from '@material-ui/icons/share';

const ShareBtn = ({onClick}) => (
    <button className="shareBtn" onClick={onClick}><Icon></Icon></button>
)

ShareBtn.PropType = {
    onClick: PropType.func.isRequired
}

export default ShareBtn;