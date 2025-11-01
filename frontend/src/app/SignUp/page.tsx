import "./page.css"
import Input_bar from "../component/input"
import Image from "next/image"
import Link from "next/link"


export default function Register(){
    return(
        <div className = "page_login">
            <Image id = "signup_icon" src = "/signup_icon.png" alt = "signup" width={340} height={144}></Image>
            <div className = "login">
                <Input_bar username = "EMAIL" img_link = "/email_icon.png" type_input = "email"></Input_bar>
                <Input_bar username = "USERNAME" img_link = "/user_logo.png" type_input = "text"></Input_bar>
                <Input_bar username = "PASSWORD" img_link = "/password_icon.png" type_input = "password"></Input_bar>
                <Input_bar username = "CONFIRM PASSWORD" img_link = "/password_icon.png" type_input = "confirm password"></Input_bar>
                <button className = "button">SIGN Up</button>
            </div>
            <p>Already have an account?<span><Link href = "/SignIn"> Sign In</Link></span></p>
        </div>
    )
}