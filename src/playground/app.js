//IT ALSO GIVE US JSX CODE..
class IndecisionApp extends React.Component{
    constructor(props){
        super(props)
        this.handleRemoveOptions=this.handleRemoveOptions.bind(this)
        this.handlePick=this.handlePick.bind(this)
        this.handleAddOption=this.handleAddOption.bind(this)
        this.handleRemoveOption=this.handleRemoveOption.bind(this)

        this.state={
            options:[]
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
        alert(this.state.options[no])
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
        const subtitle='Put your life in my hand.'
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                    hasOption={this.state.options.length>0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleRemoveOptions={this.handleRemoveOptions}
                    handleRemoveOption={this.handleRemoveOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
            
        )
    }
}


const Header=(props)=>{
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}

Header.defaultProps={
    title:'Indecision App'
}

// class Header extends React.Component{
//     render(){
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         )
//     }
// }

const Action=(props)=>{
    return (
        <div>
            <button 
            onClick={props.handlePick}
            disabled={!props.hasOption}
            >What should I do?</button>
        </div>
    )
}


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

const Options=(props)=>{
    return (
        <div>
            <button onClick={props.handleRemoveOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add options to get started!</p>}
            {
               props.options.map((option)=> (
                <Option 
                    key={option} 
                    option={option}
                    handleRemoveOption={props.handleRemoveOption}
                />
               ) )
            }
        </div>
    )
}

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


const Option=(props)=>{
    return (
        <div>
            {props.option}
            <button onClick={(e)=>{
                props.handleRemoveOption(props.option)
            }}>remove</button>
        </div>
    )
}

// class Option extends React.Component{
//     render(){
//         return (
//             <div>
//                 {this.props.option}
//             </div>
//         )
//     }
// }



class AddOption extends React.Component{
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
                {(this.state.error)&&<p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" placeholder="Enter your option" name="options"></input>
                    <button>Add option</button>
                </form>
            </div>
        )
    }
}

const User=(props)=>{
    return (
        <div>
            <p>Name:{props.name}</p>
            <p>Age:{props.age}</p>
        </div>
    )
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

ReactDOM.render(<IndecisionApp />,document.getElementById('app'))