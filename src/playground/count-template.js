class Counter extends React.Component{

    constructor(props){
        super(props);
        this.handleAddOne=this.handleAddOne.bind(this)
        this.handleMinusOne=this.handleMinusOne.bind(this)
        this.handleReset=this.handleReset.bind(this)
        this.state={
            count:0
        }
    }

    componentDidMount(){
        // const jsonString=
        const countstr=localStorage.getItem('count')
        const count=parseInt(countstr,10)
        if(!isNaN(count)){
            this.setState(()=>({count}))
        }

    }

    componentDidUpdate(prevProps,prevState){
        if(this.state.count !== prevState.count){
            localStorage.setItem('count',this.state.count)
        }
    }

    handleAddOne(){
        this.setState((prevState)=>{
            return {
                count:prevState.count + 1
            }
        })
    }

    handleMinusOne(){
        this.setState((prevState)=>{
            return {
                count:prevState.count-1
            }
        })
    }

    handleReset(){
        this.setState((prevState)=>{
            return {
                count:0
            }
        })
    }


    render(){
        return (
            <div>
                <h1>Count:{this.state.count} </h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
            
        )
    }
}

ReactDOM.render(<Counter count={20}/>,document.getElementById('app'))

// let count=0
// const addOne=()=>{
//     count++;
//     renderCounterApp();
// }

// const minusOne=()=>{
//     count--;
//     renderCounterApp();
// }

// const reset=()=>{
//     count=0;
//     renderCounterApp();
// }



// const renderCounterApp=()=>{
//     const templateTwo=(
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     )

//     ReactDOM.render(templateTwo,appRoot)
// }

// renderCounterApp();