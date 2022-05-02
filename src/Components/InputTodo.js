import React, { useState } from "react";

export const InputTodo = (props) => {
    // stateの作成
    const [ text, setText ] = useState('');

    // 入力値をtextに変換
    const handleChange = setText(e.target.value);

    // Enterを押すとTodoに追加
    const handleEnter = e => {
        if (e.key === 'Enter') {
            // 入力値が空文字なら終了
            if (!text.match(/\S/g) ) return;

            props.onAdd(text);
            setText('');
        }
    };

    return (
        <div className="panel-block">
            <input
                class='input'
                type='text'
                placeholder='Enter to add'
                value={text}
                onChange={handleChange}
                onKeyPress={handleEnter}
            />
        </div>
    );
}

export default InputTodo;