import {useState} from "react";
import {FullInput} from "./components/FullInput";
import {Input} from "./components/Input";
import {Button} from "./components/Button";

function App() {
    const [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
        {message: 'message4'},
        {message: 'message5'}
    ])

    let[text, setText] = useState('')
    console.log(text)

    const addMessage = (text: string) => {
        let newMessage = {message: text}
            setMessage([newMessage, ...message])
    }

    const callBackButtonHandler = () => {
        addMessage(text)
        setText('')
    }


    return (
        <div className="App">
            {/*<FullInput addText={addMessage}/>*/}

            <Input setText={setText} text={text} />
            <Button name={'+'} callBack={callBackButtonHandler}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default App;