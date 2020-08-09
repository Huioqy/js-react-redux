import React, { Component } from 'react';
import { connect } from 'react-redux'

import * as actionTypes from '../../store/actions'
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={() => this.props.onAdd( 5 )}  />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubtractFive( 5 )}  />
            <hr />
            <button onClick={()=>this.props.onStoreResult(this.props.ctr)}>Store Result</button>
            <ul>
                {this.props.storedResults.map( strResult => {
                    return (
                        <li key={strResult.id} onClick={() => this.props.onDeletResult(strResult.id)} >{strResult.value}</li>
                    )
                })}
            </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
};';'

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onAdd: (value) => dispatch({type: actionTypes.ADD, value}),
        onSubtractFive: (value) => dispatch({type: actionTypes.SUBTRACT, value: value}),
        onStoreResult: (result) => dispatch({type: actionTypes.STORE_RESULT, result: result}),
        onDeletResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, resulElId: id})

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);