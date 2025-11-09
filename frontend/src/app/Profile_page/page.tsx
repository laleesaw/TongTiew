import "./page.css"
import Choose_nav from "../component/navigation_bar"
import Standard_background from "../component/standard_background"
import Image from "next/image"

function user_detail(){
    return(
        <div className = "user_detail">
            <p>USERNAME</p>
            <p>EMAIL</p>
            <p>ADDRESS</p>
        </div>
    )
}


export default function Profile_page(){
    return(
        <div className = "profile_page">

            <div className = "frame_profile">
                <div className = "profile">
                    <Image id = "inner_profile" alt = "profile" src = "/my_profile.jpg" width = {300} height = {300}></Image>
                </div>
            </div>
            <div className = "background">
                <Standard_background img_head = "/chinatown_standard.jpg" detail = {user_detail}></Standard_background>
            </div>
            <div className = "nav_bar">
                <Choose_nav choose_nav_ = {4}></Choose_nav>
            </div>
        </div>
    )
}