import React from 'react'

export default class AddOption extends React.Component{
    constructor(props){
        super(props)
        this.handleAddOption=this.handleAddOption.bind(this)
        this.state={
            error:undefined
        }
    }


    handleAddOption(e){
        e.preventDefault()
        const value=e.target.elements.options.value.trim()
        const error=this.props.handleAddOption(value) 
        this.setState(()=>({error:error}))
        e.target.elements.options.focus()
        e.target.elements.options.value=''
    }

    render(){
        return (
            <div>
                {(this.state.error)&&<p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input 
                        className="add-option__input"
                        type="text" 
                        placeholder="Enter your option" 
                        name="options"
                    ></input> 
                    <button className="button">Add option</button>
                </form>
            </div>
        )
    }
}