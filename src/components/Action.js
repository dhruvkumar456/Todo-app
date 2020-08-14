import React from 'react'

const Action=(props)=>(
    <div>
        <button 
        onClick={props.handlePick}
        disabled={!props.hasOption}
        className="big-button"
        >What should I do?</button>
    </div>
)

// class Action extends React.Component{
//     render(){
//         return (
//             <div>
//                 <button 
//                 onClick={this.props.handlePick}
//                 disabled={!this.props.hasOption}
//                 >What should I do?</button>
//             </div>
//         )
//     }
// }

export default Action