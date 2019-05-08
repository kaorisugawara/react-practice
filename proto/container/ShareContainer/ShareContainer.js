import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {CopyToClipboard} from 'react-copy-to-clipboard';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import * as actions from '../../action';
import ShareBtn from '../../component/button/share/sharebtn';
import CopyURLBtn from '../../component/button/share/copyurlbtn';

class ShareContainer extends Component {
    render() {
        const { share, actions } = this.props;
        return (
            <div>
                <ShareBtn onClick={() => actions.onShareClick()} />
                <Dialog
                    open={share.shareDialogOpen || false}
                    onClose={() => actions.onShareDialogClose()}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <DialogTitle>{"Do Share?"}</DialogTitle>
                    <DialogContent>
                        <div>
                            <Button onClick={() => actions.onTwitter()}>Twitter</Button>
                            <Button onClick={() => actions.onFacebook()}>Facebook</Button>
                        </div>
                        <CopyURLBtn value={share.value} onClick={() => actions.onCopyURL()}></CopyURLBtn>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => actions.onShareDialogClose()}>Close</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

const mapState = (state, ownProps) => ({
    share: state.share
})

function mapDispatch(dispatch) {
    return {
        actions: bindActionCreators(actions,dispatch)
    }
}

export default connect(mapState, mapDispatch)(ShareContainer);