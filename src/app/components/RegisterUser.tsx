'use client';

import React from 'react';
import { useReducer } from 'react';

type TFormBody = {
    email: string;
    password: string;
    password_confirmation: string;
};

type TFormPayload = {
    type: keyof TFormBody;
    value: string;
};

const RegisterUser = () => {
    const initialState: TFormBody = {
        email: '',
        password: '',
        password_confirmation: ''
    };

    const reducer = (state: TFormBody, action: TFormPayload) => {
        switch (action.type) {
            case 'email':
                return { ...state, email: action.value };
            case 'password':
                return { ...state, password: action.value };
            case 'password_confirmation':
                return { ...state, password_confirmation: action.value };
            default:
                return state;
        }
    }

    const [form, setForm] = useReducer(reducer, initialState);
    const [errorMap, setErrorMap] = React.useState<any>(null);
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(form.password.trim() !== form.password_confirmation.trim() || form.email.trim() === '' || form.password.trim() === '' || form.password_confirmation.trim() === ''){
            return;
        }
        try {
            const res = await fetch('/api/auth/register', {
                method: 'POST',
                body: JSON.stringify({email:form.email, password:form.password}),
            });

        } catch (error) {
            setErrorMap(error);
        }
    }

    return (
        <form onSubmit={handleSubmit} className=' text-black '>
            <div className='flex flex-col border-1 '>
                <label htmlFor="email">Email</label>
                <input type='email' name='email' placeholder='email' value={form.email} onChange={e => setForm({ type: 'email', value: e.target.value })} />
            </div>
            <div className='flex flex-col border-1 '>
                <label htmlFor="password">Password</label>
                <input type='password' name='password' placeholder='password' value={form.password} onChange={e => setForm({ type: 'password', value: e.target.value })} />
            </div>
            <div className='flex flex-col border-1      '>
                <label htmlFor="passwordconfirm">Confirm Password</label>
                <input type='password' name='passwordconfirm' placeholder='password confirm' value={form.password_confirmation} onChange={e => setForm({ type: 'password_confirmation', value: e.target.value })} />
            </div>
            <button type='submit'>Invia</button>
            {errorMap && <div>{errorMap}</div>}
        </form>
    )
}

export default RegisterUser;
