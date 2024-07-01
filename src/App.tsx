import {useState} from "react";
import {FullInput} from "./components/FullInput";

function App() {
    const [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
        {message: 'message4'},
        {message: 'message5'}
    ])


    const addMessage = (text: string) => {
        let newMessage = {message: text}
            setMessage([newMessage, ...message])
    }


    return (
        <div className="App">
            <FullInput addText={addMessage}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default App;