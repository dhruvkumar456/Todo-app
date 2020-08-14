import React from 'react'
import AddOption from './AddOption'
import Options from './Options'
import Header from './Header'
import Action from './Action'
import OptionModel from './OptionModel'

//IT ALSO GIVE US JSX CODE..
export default class IndecisionApp extends React.Component{
    constructor(props){
        super(props)
        this.handleRemoveOptions=this.handleRemoveOptions.bind(this)
        this.handlePick=this.handlePick.bind(this)
        this.handleAddOption=this.handleAddOption.bind(this)
        this.handleRemoveOption=this.handleRemoveOption.bind(this)
        this.handleOkay=this.handleOkay.bind(this)
        this.state={
            options:[],
            selectOption:false
        }
    }


    componentDidMount(){
        const jsonString=localStorage.getItem('options')
        const options=JSON.parse(jsonString)
        if(options)
        this.setState(()=>({options}))
    }

    componentDidUpdate(prevProps,prevState){
        if(prevState.options.length !== this.state.options.length){
            const options=JSON.stringify(this.state.options)
            localStorage.setItem('options',options)
        }
    }

    componentWillUnmount(){
        console.log('Component get unmounted!')
    }



    handleRemoveOptions(){
        this.setState(()=> ({options:[]}))
    }

    handleRemoveOption(optionToRemove){
        this.setState((prevState)=>({
            options:prevState.options.filter((option)=> option!=optionToRemove)
        }))
    }

    handlePick(){
        let no=Math.floor(Math.random()*this.state.options.length)
        this.setState(()=>({selectOption:this.state.options[no]}))
    }

    handleOkay(){
        this.setState(()=>({selectOption:undefined}))
    }

    handleAddOption(option){
        if(!option){
            return 'Enter the option'
        }
        else if(this.state.options.indexOf(option)>-1){
            return 'This Option already exists'
        }
        this.setState((precState)=>({options:precState.options.concat([option])}))
    }

    render(){
        const title='Indecision'
        const subtitle='Put your life in hand of computer.'
        return (
            <div>
                <Header subtitle={subtitle}/>
                <div className="container">
                    <Action 
                        hasOption={this.state.options.length>0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options 
                            options={this.state.options}
                            handleRemoveOptions={this.handleRemoveOptions}
                            handleRemoveOption={this.handleRemoveOption}
                        />
                        <AddOption 
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                    
                    <OptionModel 
                        selectOption={this.state.selectOption}
                        handleOkay={this.handleOkay}
                    />
                </div>
                
            </div>
            
        )
    }
}




//IT GIVE US JSX CODE...
// const template=(
//     <div>
//         <Header />
//         <Action />
//         <Options />
//         <AddOption />
//     </div>
// )