import React, {useState} from "react";
import './LoginModal.css'
import {auth} from "../../firebase";

function LoginModal({handleOpenState}) {
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()

        auth
            .createUserWithEmailAndPassword(email,password)
            .then(async (authUser)=>{
                await authUser.user.updateProfile({
                    displayName:username
                })

                console.log(authUser)

                handleOpenState()
            })
            .catch(err=>{
                alert(err.message)
            })
    }

    return (
        <div className="login-modal">
            <img className="app-header-img" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt=""/>

            <form onSubmit={handleSubmit}>
                <input className='login-input' value={username} onChange={e=> setUsername(e.target.value)} type="text" placeholder={'username'}/>
                <input className='login-input' value={email} onChange={e=> setEmail(e.target.value)} type="email" placeholder={'email'}/>
                <input className='login-input' value={password} onChange={e=> setPassword(e.target.value)} type="password" placeholder={'password'}/>

                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default LoginModal;