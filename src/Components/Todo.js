import { useState } from "react";


const Todo = () => {
    const [ incompleteArea, setIncompleteTodos ] = useState(['宿題', '片づけ']);
    return (
        <div className="outline">
            <div className="inputArea">
                <input placeholder="todoを入力"/>
                <button>追加</button>
            </div>
            <div className="incompleteArea">
                <p className="title">未達成のtodo</p>
                <ul>
                    <li className="todoList">
                        <p>テスト</p>
                        <button>完了</button>
                        <button>削除</button>
                    </li>
                </ul>
            </div>
            <div className="completeArea">
                <p className="title2">完了したtodo</p>
                <ul>
                    <li className="todolist">
                        <p>テスト</p>
                        <button>戻す</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Todo;