import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from '../../action';
import Button from '@material-ui/core/Button';

class UserFetchContainer extends Component {
    Users(list) {
        const member = list.map((user, index) => {
            return (
                <li key={index}>
                    {user.name} {user.age}
                </li>
            )
        })
        return <ul>{member}</ul>
    }
    Errors(list) {
        const error = list.map((err, index) => {
            return (
                <li key={index}>
                    {err}
                </li>
            )
        })
        return <ul>{error}</ul>
    }
    getjson(obj) {
        if (typeof obj === 'object') {
            let strVal = [];
            for (let key of obj) {
                strVal.push(key)
            }
            return strVal;
        }
    }
    render() {
        const { userfetch, actions } = this.props;
        // const obj = Object.entries(userfetch.member);
        // console.log(obj[0])
        const getVal = this.getjson(userfetch.member);
        const getError = this.getjson(userfetch.error);
        return (
            <div>
                <Button variant="outlined" onClick={() => actions.onUserFetchRequest('/')}>Get json Value</Button>
                <div>member: {this.Users(getVal)}</div>
                <div>error: {this.Errors(getError)}</div>
            </div>
        )
    }
}


const mapState = (state) => ({
    userfetch: state.userfetch
})

function mapDispatch(dispatch) {
    return {
        actions: bindActionCreators(actions,dispatch)
    }
}

export default connect(mapState,mapDispatch)(UserFetchContainer);