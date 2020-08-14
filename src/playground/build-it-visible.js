class Visibility extends React.Component{
    render(){
        return (
            <div>
                <Header />
                <Details />
            </div>
        )
    }
}

class Header extends React.Component{
    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
            </div>
        )
    }
}

class Details extends React.Component{

    constructor(props){
        super(props)
        this.handleDetails=this.handleDetails.bind(this)
        this.state={
            visibility:false
        }
    }

    handleDetails(){
        this.setState((prevState)=>{
            return {
                visibility:(prevState.visibility?false:true)
            }
        })
    }

    render(){
        return (
            <div>
                <button onClick={this.handleDetails}>{(this.state.visibility)?'Hide Details':'Show Details'}</button>
                {(this.state.visibility) && <p>Hey:Here is your all details.</p>}
            </div>
        )
    }
}


ReactDOM.render(<Visibility />,document.getElementById('app'))


// console.log('Running');
// const app=document.getElementById('app')
// let buttonName='Show details'


// const detailsVisibility=(e)=>{
//     if(buttonName === 'Show details'){
//         buttonName = 'Hide details'
//     }
//     else
//     buttonName='Show details'
//     render()
// }


// const render=()=>{
//     const template=(
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={detailsVisibility}>{buttonName}</button>
//             { (buttonName === 'Hide details') && <p>Hey:Here is your all details.</p>}
//         </div>
       
//     )
    
//     ReactDOM.render(template,app)
// }

// render()
