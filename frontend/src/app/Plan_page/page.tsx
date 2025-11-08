import "./page.css"
import Choose_nav from "../component/navigation_bar"
import Image from "next/image"

export default function Plan_page(){
    return(
        <div className = "plan_page">
            <div className = "background">
                <iframe id = "iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.6384053694496!2d100.50737777470789!3d13.740328586650305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2999370ced7ad%3A0x5857f80ee7e16ad4!2z4LmE4LiK4LiZ4LmI4Liy4LiX4Liy4Lin4LiZ4LmMICjguYDguKLguLLguKfguKPguLLguIop!5e0!3m2!1sth!2sth!4v1762499178636!5m2!1sth!2sth"
                 width="440" 
                 height="330">
                </iframe>
                <div className = "circle">
                    <div className = "box">
                        <h1>Yaowarat</h1>
                        <div className = "planning">
                            <Image alt = "hotel" src = "/hotel_icon_plan.png" width = {50} height = {50}></Image>
                            <Image alt = "finish" src = "/finish_go_to.png" width = {17} height={87}></Image>
                            <Image alt = "restaurant" src = "/hotel_icon_plan.png" width = {48} height = {48}></Image>
                            <Image alt = "unfinish" src = "/unfinish_go_to.png" width = {17} height={87}></Image>
                            <Image alt = "market" src = "/market_icon_plan.png" width = {47} height = {47}></Image>
                        </div>
                    </div>
                </div>
            </div>
            <div className = "nav_bar">
                <Choose_nav choose_nav_ = {2}></Choose_nav>
            </div>
        </div>
    )
}