console.log('Testing is running')

//javascript jsx --> javascript XML

const app={
    title:'Indecision app',
    subtitle:'Information about Indecision app',
    options:[]
}

const numbers=[10,20,30]

const onformsubmit=(e)=>{
    e.preventDefault()
    const option=e.target.elements.options.value
    if(option)
    {
        app.options.push(option);
        e.target.elements.options.value='';
        e.target.elements.options.focus()
        renderTemplate();
    }
    console.log('testing')
}


const removeAll=()=>{
    app.options=[];
    renderTemplate()
}

const makeDecision=()=>{
    let n=app.options.length;
    const randomNum=Math.floor(Math.random()*n);
    const option=app.options[randomNum]
    alert(option)
}

const appRoot=document.getElementById('app')

const renderTemplate=()=>{
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length>0?'Here are your options':'No options'}</p>
            <p>{app.options.length}</p>
            <button disabled={app.options.length === 0} onClick={makeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option)=>{
                        return <li key={option}>Option:{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onformsubmit}>
                <input type="text" placeholder="Options" name="options"/>
                <button>Add Option</button>
            </form>
        </div>
    )
    ReactDOM.render(template,appRoot)
}
renderTemplate();