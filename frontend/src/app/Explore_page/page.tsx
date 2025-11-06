import "./page.css"
import Image from "next/image"
import Button_bar from "../component/button"
import Choose_nav from "../component/navigation_bar"

export default function Explore_page(){
    return(
        <div className = "explore_page">
            <div className = "top">
                <div className = "wrap_search_bar">
                    <input id = "search_bar" placeholder="Start your Search"></input>
                    <Image id = "search_icon" src = "/search_icon.png" alt = "search" width = {48.27} height = {48.27}></Image>
                </div>
            </div>
            <div className = "background">
                <Image id = "chinatown_background" src = "/chinatown_standard.jpg" alt = "background" width = {440} height = {330}></Image>
                <div className = "circle">
                    <div className = "box">
                        <h1>Yaowarat</h1>
                        <h2><span id = "large">Yaowarat</span> is known as <span id = "medium">"Thailand's Chinatown"</span> an old neighborhood rich in Chinese culture. It's famous for its delicious food, <span id = "opa1">especially </span> <span id = "opa2">the </span><span id = "opa3">world-</span></h2>
                        <div className = "more_detail">
                            <Image id = "more_detail" src = "/more_detail_icon.png" alt = "more_detail" width = {32} height = {32}></Image>
                        </div>
                        <div className = "set_button">
                            <div></div>
                            <Button_bar text = "RESTAURANT" img_link = "/restaurant_icon.png" end_point = {"/SignIn"} width_icon = {48} height_icon = {48}></Button_bar>
                            <Button_bar text = "HOTEL" img_link = "/hotel_icon.png" end_point = {"/SignIn"} width_icon = {48} height_icon = {48}></Button_bar>
                            <Button_bar text = "LANDMARK" img_link = "/landmark.png" end_point = {"/SignIn"} width_icon = {48} height_icon = {48}></Button_bar>
                        </div>
                    </div>
                </div>
                <div className = "nav_bar">
                    <Choose_nav choose_nav_ = {0}></Choose_nav>
                </div>
            </div>

        </div>
    )
}