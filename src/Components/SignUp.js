import React from "react";
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useAuthContext } from '../Context/authContext';

const SignUp = () => {
    const { user } = useAuthContext();
    const handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        createUserWithEmailAndPassword(auth, email.value, password.value);
    };

    return (
        <div>
            <h1>ユーザ登録 {user.email}</h1>
            <form onSubmit={handleSubmit}>
            <div>
                <label>メールアドレス</label>
                <input name="email" type="email" placeholder="email" />
            </div>
            <div>
                <label>パスワード</label>
                <input name="password" type="password" />
            </div>
            <div>
                <button>登録</button>
            </div>
            </form>
        </div>
    );
};

export default SignUp;