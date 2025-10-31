import "./page.css"
import Image from "next/image"


export default function login(){
    return(
        <div className = "page_login">
            <div className = "login">
                <div className = "username">
                    <input type = "text" placeholder = "USERNAME"></input>
                    <Image src = "/user_logo.png" alt = "user" width={41} height={41}></Image>
                </div>
                <input type = "password" className = "password" placeholder = "PASSWORD"></input>
                <button className = "button">SIGN IN</button>
            </div>
        </div>
    )
}