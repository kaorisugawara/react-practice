import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../action';
import NumBtn from '../component/calclator/NumBtn';
import PlusBtn from '../component/calclator/PlusBtn';
import MinusBtn from '../component/calclator/MinusBtn';
import Result from '../component/calclator/Result';
import ResetBtn from '../component/calclator/Reset';

class CalculatorContainer extends Component {
    render() {
        const { calclator, actions } = this.props;
        return (
            <div>
                <div>
                    <ResetBtn onClick={() => actions.onResetClick()} />
                </div>
                <div>
                    <NumBtn n={1} onClick={() => actions.onNumClick(1)} />
                    <NumBtn n={2} onClick={() => actions.onNumClick(2)} />
                    <NumBtn n={3} onClick={() => actions.onNumClick(3)} />
                </div>
                <div>
                    <NumBtn n={4} onClick={() => actions.onNumClick(4)} />
                    <NumBtn n={5} onClick={() => actions.onNumClick(5)} />
                    <NumBtn n={6} onClick={() => actions.onNumClick(6)}/>
                </div>
                <div>
                    <NumBtn n={7} onClick={() => actions.onNumClick(7)}/>
                    <NumBtn n={8} onClick={() => actions.onNumClick(8)}/>
                    <NumBtn n={9} onClick={() => actions.onNumClick(9)}/>
                </div>
                <div>
                    <NumBtn n={0} onClick={() => actions.onNumClick(0)}/>
                    <PlusBtn onClick={() => actions.onPlusClick()} />
                    <MinusBtn onClick={() => actions.onMinusClick()} />
                </div>
                <div>
                    <Result result={calclator.showingResult ? calclator.resultValue : calclator.inputValue} />
                </div>
            </div>
        )
    }
}

const mapState = (state, ownProps) => ({
    calclator: state.calclator
})

function mapDispatch(dispatch) {
    return {
        actions: bindActionCreators(actions,dispatch)
    } 
}

export default connect(mapState, mapDispatch)(CalculatorContainer);