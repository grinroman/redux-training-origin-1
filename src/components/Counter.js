import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
const Counter = ({ counter, dec, inc, rnd, name }) => {
    // const { dispatch, subscribe, getState } = store;
    // const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

    return (
        <div className="jumbotron">
            <h1>
                {name} - {counter}
            </h1>
            <button onClick={dec} className="btn btn-primary">
                DEC
            </button>
            <button onClick={inc} className="btn btn-primary">
                INC
            </button>
            <button onClick={rnd} className="btn btn-primary">
                RND
            </button>
        </div>
    );
};

//classes works the same way

const mapStateToProps = (state) => {
    return { counter: state.value, name: state.name }; // приходит текущий state
};

// #1
// const mapDispatchToProps = (dispatch) => {
//     // const { dec, rnd, inc } = bindActionCreators(actions, dispatch);
//     // return {
//     //     inc,
//     //     dec,
//     //     rnd,
//     // }; // приходит текущий state
//     return bindActionCreators(actions, dispatch);
// };
// #1 если 2-ой параметр это ф-ия mapDispatchToProps - при доп манипуляциях по изменению action creators!!
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// #2 если 2-ой параметр это просто объект actions _ за сценой работает mapDispatchToProps!!
export default connect(mapStateToProps, actions)(Counter);

// we'll give additional functional to this component!!!!
//connect от Provider получает сигнал чот что-то было изменено => надо шото делать
