import React, {useState} from 'react'

const InputSample = () => {
    const [inputText, setInputText] = useState("");
    const onChangeInput = e => {
        setInputText(e.target.value)
    }
    const onReset = () => {
        setInputText("")
    }

    return (
        <>
            <h1 className="title">Input 연습</h1>
            <h1>TEXT: { inputText }</h1>
            <input
                type="text"
                value={inputText}
                placeholder="입력하세요"
                onChange={onChangeInput}
            />
            <button onClick={onReset}>Reset</button>
        </>
    )
}

export default InputSample;