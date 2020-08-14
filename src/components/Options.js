import React from 'react'
import Option from './Option'


const Options=(props)=>(
    <div>
        <div className="widget-header">
            <h3 className="widget-header__text">Your option</h3>
            <button 
            className="button button--link"
            onClick={props.handleRemoveOptions}
            >
                Remove All
            </button>
        </div>
        
        {props.options.length === 0 && <p className="widget__message">Please add options to get started!</p>}
        {
           props.options.map((option,indx)=> (
            <Option 
                key={option} 
                option={option}
                count={indx+1}
                handleRemoveOption={props.handleRemoveOption}
            />
           ) )
        }
    </div>
)

// class Options extends React.Component{

//     render(){
//         return (
//             <div>
//                 <button onClick={this.props.handleRemoveOptions}>Remove All</button>
//                 {
//                    this.props.options.map((option)=> <Option key={option} option={option}/> )
//                 }
//             </div>
//         )
//     }
// }

export default Options