"use client"

import "./page.css"
import Image from "next/image"
import Choose_nav from "../component/navigation_bar"
import { useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react"


// function Fetch_api_restaurant_img({attraction}: {attraction: Attraction | null}){
//     if (!attraction){
//         return "/welcome_to_tongtiew.png";
//     }
//     return attraction.img_path;
// }



interface Attraction {
  name: string;
  location: string;
  detail: string;
  img_path: string;
}

interface ExploreResponse {
  status: string;
  data: Attraction[];
}
interface A_card_type{
    src: string;
    name: string;
    rating: number;
    detail: string;
}





function A_Card({src, name, rating, detail}: A_card_type){
    return(
            <div className = "card">
                <div className = "img_place">
                    <Image id = "img_place" alt = "img" src = {src} width = {334} height = {334}></Image>
                </div>
                <div className = "head">
                    <h1 className = "name">{name}</h1>
                    <div className = "rating">
                        <div className = "star">
                        <Image alt = "rating" src = "/star.png" width = {26} height = {26}></Image>
                        </div>{rating}
                    </div>
                </div>
                <h2 className = "detail">{detail}</h2>
                <div className = "more_detail">
                    <Image id = "more_detail" src = "/more_detail_icon.png" alt = "more_detail" width = {32} height = {32}></Image>
                </div>
            </div>
    )
}
function Display_card(){
    // console.log(attraction);
    let total_restautant = ["Yaowarat","Yaowarat","Yaowarat","Yaowarat","Yaowarat","Yaowarat"];
    let total_src = ["/chinatown_standard.jpg", "/chinatown_standard.jpg", "/chinatown_standard.jpg", "/chinatown_standard.jpg", "/chinatown_standard.jpg", "/chinatown_standard.jpg"]
    let total_rating = [4.5, 4.5, 4.5, 4.5, 4.5, 4.5]
    let total_detail = ["Yaowarat</span> is known as Thailand's Chinatown an old neighborhood rich in Chinese culture. It's famous for its delicious food, especially world-",
        "Yaowarat</span> is known as Thailand's Chinatown an old neighborhood rich in Chinese culture. It's famous for its delicious food, especially world-",
        "Yaowarat</span> is known as Thailand's Chinatown an old neighborhood rich in Chinese culture. It's famous for its delicious food, especially world-",
        "Yaowarat</span> is known as Thailand's Chinatown an old neighborhood rich in Chinese culture. It's famous for its delicious food, especially world-",
        "Yaowarat</span> is known as Thailand's Chinatown an old neighborhood rich in Chinese culture. It's famous for its delicious food, especially world-",
        "Yaowarat</span> is known as Thailand's Chinatown an old neighborhood rich in Chinese culture. It's famous for its delicious food, especially world-"
    ]
    return(
        <div>
            {total_restautant.map((name, i) => (
                <A_Card 
                key = {i}
                src = {total_src[i]}
                name = {total_restautant[i]}
                rating = {total_rating[i]}
                detail = {total_detail[i]}></A_Card>
            ))}
        </div>
    )
    
}
export default function Restaurant_page(){
    const params = useSearchParams();
    const attraction_id = params.get("attraction_id");
    console.log(attraction_id);
    return(
        <div className = "wishlists">
            <Display_card></Display_card>
            <div className = "nav_bar">
                <Choose_nav choose_nav_ = {0}></Choose_nav>
            </div>
        </div>
    )
}