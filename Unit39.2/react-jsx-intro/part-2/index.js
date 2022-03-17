const Tweet = (props) =>{
    return(
        <ul>
            <li>Username: {props.username}</li>
            <li>Name: {props.name}</li>
            <li>Date: {props.date}</li>
            <li>Message: {props.message}</li>
        </ul>
    )
}

const App = () =>{

    return (
        <div>
            <Tweet username="OrgesV" name="Orges Velia" date="3/17/2022" Message="Hello There"/>
            <Tweet username="OrgesV" name="Orges Velia" date="3/17/2022" Message="Hello There"/>
            <Tweet username="OrgesV" name="Orges Velia" date="3/17/2022" Message="Hello There"/>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))