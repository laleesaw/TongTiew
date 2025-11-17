"use client";

import { useEffect, useState } from "react"
import axios from "axios"
import "./page.css"
import Image from "next/image"
import Button_bar from "../component/button"
import Choose_nav from "../component/navigation_bar"
import Standard_background from "../component/standard_background"
import Search_bar from "../component/search";
import { useRouter } from "next/navigation";


interface Attraction {
  id: number;
  name: string;
  location: string;
  detail: string;
  img_path: string;
}

interface ExploreResponse {
  status: string;
  data: Attraction[];
}


function Fetch_api_attraction_background({attraction}: {attraction: Attraction | null}){
    if (!attraction){
        return "/welcome_to_tongtiew.png";
    }
    return attraction.img_path;
}

// function Fetch_api_attraction_id({attraction}: {attraction: Attraction | null}){
//     if (!attraction){
//         return 0;
//     }
//     return attraction.id;
// }


function Fetch_api_attraction_Off( {attraction}: {attraction: Attraction | null}){
    const [detail, setDetail] = useState<string>("Loading...");
    if (!attraction) {
        return "Type a location name to start exploring";
    }

    const char = Array.from(attraction.detail);
    let word = 0;
    let content = "";
    let last_1st_content = "";
    let last_2nd_content = "";
    let last_3rd_content = "";

    for (let i = 0; i < char.length; i++) {
        if (char[i] == " ") {
            word += 1;
            content += char[i];
            last_1st_content += char[i];
            last_2nd_content += char[i];
            last_3rd_content += char[i];

        } 
        if (char[i] != " ") {
            if ( word <= 30){
                content += char[i];
            }
            if ( word > 30 && word <= 31){
                last_1st_content += char[i]
            }
            if ( word > 31 && word <= 32){
                last_2nd_content += char[i]
            }
            if ( word > 32 && word <= 33){
                last_3rd_content += char[i]
            }
        }
    }
    return(
        <div>
            <p>{content}
                <span id = "opa1">{last_1st_content}</span>
                <span id = "opa2">{last_2nd_content}</span>
                <span id = "opa3">{last_3rd_content}</span>
            </p>
        </div>
    )
}
function Fetch_api_attraction_On({attraction}: {attraction: Attraction | null}){
    const [detail, setDetail] = useState<string>("Loading...");
    if (!attraction) {
        return "Type a location name to start exploring";
    }
    return(
        <div>
            <p>
                {attraction.detail}
            </p>
        </div>
    )
}


function Detail_handler( {attraction}: {attraction: Attraction | null} ){
    const [show_detail, setShow_detail] = useState(false);
    const click_handler = () =>{
        setShow_detail((prev) => !prev)
    }

    return(
        <div>
            {show_detail? <Fetch_api_attraction_On attraction={attraction}></Fetch_api_attraction_On>: <Fetch_api_attraction_Off attraction={attraction }></Fetch_api_attraction_Off>}
            <div className = "more_detail">
                <button className = "button_more_detail" onClick = {click_handler}>
                    <Image id = "more_detail" src = {"/more_detail_icon.png"} alt = "more_detail" width = {32} height = {32}></Image>
                </button>
            </div>
        </div>
    )
}


function Detail( {attraction}: {attraction: Attraction | null} ){
    if (!attraction){
        return(
        <div className = "box">
            <div className = "not_attraction"><p>Explore</p><p>for Attraction</p></div>
            <Detail_handler attraction = {attraction}></Detail_handler>
            <div className = "set_button">
                <Button_bar text = "RESTAURANT" img_link = "/restaurant_icon.png" end_point = {"/Restaurant_page"} width_icon = {48} height_icon = {48} attraction_id = {0}></Button_bar>
                <Button_bar text = "HOTEL" img_link = "/hotel_icon.png" end_point = {"/SignIn"} width_icon = {48} height_icon = {48} attraction_id = {0}></Button_bar>
                <Button_bar text = "LANDMARK" img_link = "/landmark.png" end_point = {"/SignIn"} width_icon = {48} height_icon = {48} attraction_id = {0}></Button_bar>
            </div>
        </div>
        )
    }
    return(
    <div className = "box">
        <h1>{attraction.name}</h1>
        <Detail_handler attraction = {attraction}></Detail_handler>
        <div className = "set_button">
            <Button_bar text = "RESTAURANT" img_link = "/restaurant_icon.png" end_point = {"/Restaurant_page"} width_icon = {48} height_icon = {48} attraction_id = {attraction.id}></Button_bar>
            <Button_bar text = "HOTEL" img_link = "/hotel_icon.png" end_point = {"/SignIn"} width_icon = {48} height_icon = {48} attraction_id = {attraction.id}></Button_bar>
            <Button_bar text = "LANDMARK" img_link = "/landmark.png" end_point = {"/SignIn"} width_icon = {48} height_icon = {48} attraction_id = {attraction.id}></Button_bar>
        </div>
    </div>
    )
}



export default function Explore_page(){
    const [selectedPlace, setSelectedPlace] = useState<Attraction | null>(null);
    const ImgPath = Fetch_api_attraction_background({attraction:selectedPlace});
    // const Attraction_id = Fetch_api_attraction_id({attraction:selectedPlace});
    // console.log(Attraction_id);
    return(
        <div className = "explore_page">
            <Search_bar onSelect={setSelectedPlace} ></Search_bar>
            <div className = "background">
                <Standard_background img_head = {ImgPath} detail = { () => <Detail attraction={selectedPlace}></Detail>}></Standard_background>
                <div className = "nav_bar">
                    <Choose_nav choose_nav_ = {0}></Choose_nav>
                </div>
            </div>

        </div>
    )
} 