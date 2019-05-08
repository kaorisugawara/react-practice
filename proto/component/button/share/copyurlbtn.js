import React from "react";
import PropType from "prop-types";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Button from '@material-ui/core/Button';

const CopyURLBtn = ({value,onClick}) => (
    <div>
        <CopyToClipboard text={value} onCopy={onClick}>
            <Button className="copyBtn" variant="outlined" color="secondary">copy URL</Button>
        </CopyToClipboard>
    </div>
)

CopyURLBtn.PropType = {
    onClick: PropType.func.isRequired
}

export default CopyURLBtn;