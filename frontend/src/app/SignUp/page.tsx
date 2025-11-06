"use client"

import "./page.css"
import { useEffect, useState } from "react"
import axios from "axios";
import Input_bar from "../component/input"
import Image from "next/image"
import Link from "next/link"




export default function Register(){
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirm_password, setConfirm_password] = useState("")




    const handleSignUp = async () => {
        if (password == confirm_password) {
            try {
            const res = await axios.post("http://localhost:8080/signup", {
                email,
                username,
                password
            });

            alert("Sign up success!");
            window.location.href = "/SignIn";
            } catch (err) {
            alert("Sign up failed");
            console.error(err);
            }

        } else {
            alert("Confirm password must equal to password");
        }
    };





    return(
        <div className = "page_login">
            <Image id = "signup_icon" src = "/signup_icon.png" alt = "signup" width={340} height={144}></Image>
            <div className = "login">
                <Input_bar username = "EMAIL"
                 img_link = "/email_icon.png" 
                 type_input = "email"
                 input_value = {email}
                 onChange_value = {(e) => setEmail(e.target.value)}></Input_bar>
                <Input_bar
                 username = "USERNAME" 
                 img_link = "/user_logo.png" 
                 type_input = "text"
                 input_value = {username}
                 onChange_value = {(e) => setUsername(e.target.value)}></Input_bar>
                <Input_bar
                 username = "PASSWORD" 
                 img_link = "/password_icon.png" 
                 type_input = "password"
                 input_value = {password}
                 onChange_value = {(e) => setPassword(e.target.value)}></Input_bar>
                <Input_bar
                 username = "CONFIRM PASSWORD" 
                 img_link = "/password_icon.png" 
                 type_input = "password"
                 input_value = {confirm_password}
                 onChange_value={(e) => setConfirm_password(e.target.value)}></Input_bar>
                <button className = "button" onClick = {handleSignUp}>SIGN UP</button>
            </div>
            <p>Already have an account?<span><Link href = "/SignIn"> Sign In</Link></span></p>
        </div>
    )
}