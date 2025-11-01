import "./page.css"
import Input_bar from "../component/input"
import Image from "next/image"
import Link from "next/link"


export default function Register(){
    return(
        <div className = "page_login">
            <Image id = "welcome" src = "/welcome.png" alt = "welcome to TongTiew" width={343} height={144}></Image>
            <div className = "login">
                <Input_bar username = "USERNAME" img_link = "/user_logo.png" type_input = "text"></Input_bar>
                <Input_bar username = "PASSWORD" img_link = "/password_icon.png" type_input = "password"></Input_bar>
                <button className = "button">SIGN In</button>
            </div>
            <p>Don’t have an account?<span><Link href = "/SignUp"> Sign Up</Link></span></p>
        </div>
    )
}