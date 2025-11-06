"use client";

import { useEffect, useState } from "react"
import axios from "axios"
import "./page.css"
import Input_bar from "../component/input"
import Image from "next/image"
import Link from "next/link"





export default function Register(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    interface LoginResponse {
        token: string;
        user?: {
            UserID: number;
            Email: string;
            Username: string;
        };
    }
    const handleLogin = async () => {
        try {
        // ระบุ generic type ให้ axios.post
        const res = await axios.post<LoginResponse>("http://localhost:8080/signin", {
            email,
            password,
        });

        const token = res.data.token; // ตอนนี้ TypeScript รู้ว่า res.data มี token
        localStorage.setItem("token", token);

        alert("Login success!");
        window.location.href = "/Explore_page";
        } catch (err) {
        alert("Login failed");
        console.error(err);
        }
    };
    return(
        <div className = "page_login">
            <Image id = "welcome" src = "/welcome.png" alt = "welcome to TongTiew" width={343} height={144}></Image>
            <div className = "login">
                <Input_bar username = "USERNAME"
                 img_link = "/user_logo.png" 
                 type_input = "text" 
                 input_value = {email} 
                 onChange_value = {(e) => setEmail(e.target.value)}></Input_bar>
                <Input_bar username = "PASSWORD"
                 img_link = "/password_icon.png" 
                 type_input = "password" 
                 input_value = {password} 
                 onChange_value = {(e) => setPassword(e.target.value)}></Input_bar>
                <button className = "button" onClick={handleLogin}>SIGN IN</button>
            </div>
            <p>Don’t have an account?<span><Link href = "/SignUp"> Sign Up</Link></span></p>
        </div>
    )
}