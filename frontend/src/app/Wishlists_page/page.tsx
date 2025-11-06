import "./page.css"
import Image from "next/image"
import Choose_nav from "../component/navigation_bar"

export default function Wishlists(){
    return(
        <div className = "wishlists">
            <div className = "card">
                <div className = "img_place">
                    <Image id = "img_place" alt = "img" src = "/chinatown_standard.jpg" width = {334} height = {334}></Image>
                    <Image id = "love" alt = "love" src = "/love.png" width = {30.75} height = {27.27}></Image>
                </div>
                <div className = "head">
                    <h1 className = "name">Yaowarat</h1>
                    <div className = "rating">
                        <div className = "star">
                        <Image alt = "rating" src = "/star.png" width = {26} height = {26}></Image>
                        </div>4.5
                    </div>
                </div>
                <h2 className = "detail"><span id = "span1">Yaowarat</span> is known as <span id = "span2">"Thailand's Chinatown"</span> an old neighborhood rich in Chinese culture. It's famous for its delicious food,<span id = "span3"> especially</span> <span id = "span4">the</span><span id = "span5"> world-</span></h2>
                <div className = "more_detail">
                    <Image id = "more_detail" src = "/more_detail_icon.png" alt = "more_detail" width = {32} height = {32}></Image>
                </div>
            </div>
            <div className = "nav_bar">
                <Choose_nav choose_nav_ = {1}></Choose_nav>
            </div>
        </div>
    )
}