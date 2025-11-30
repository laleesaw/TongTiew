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
import Detail_handler from "../component/detail_hide";


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



function Detail( {attraction}: {attraction: Attraction | null} ){
    if (!attraction){
        return(
        <div className = "box">
            <div className = "not_attraction"><p>Explore</p><p>for Attraction</p></div>
            <Detail_handler destination = {attraction}></Detail_handler>
            <div className = "set_button">
                <Button_bar text = "RESTAURANT" img_link = "/restaurant_icon.png" end_point = {"/Restaurant_page"} width_icon = {48} height_icon = {48} attraction_id = {0}></Button_bar>
                <Button_bar text = "HOTEL" img_link = "/hotel_icon.png" end_point = {"/Hotel_page"} width_icon = {48} height_icon = {48} attraction_id = {0}></Button_bar>
                <Button_bar text = "LANDMARK" img_link = "/landmark.png" end_point = {"/Landmark_page"} width_icon = {48} height_icon = {48} attraction_id = {0}></Button_bar>
            </div>
        </div>
        )
    }
    return(
    <div className = "box">
        <h1>{attraction.name}</h1>
        <Detail_handler destination = {attraction}></Detail_handler>
        <div className = "set_button">
            <Button_bar text = "RESTAURANT" img_link = "/restaurant_icon.png" end_point = {"/Restaurant_page"} width_icon = {48} height_icon = {48} attraction_id = {attraction.id}></Button_bar>
            <Button_bar text = "HOTEL" img_link = "/hotel_icon.png" end_point = {"/Hotel_page"} width_icon = {48} height_icon = {48} attraction_id = {attraction.id}></Button_bar>
            <Button_bar text = "LANDMARK" img_link = "/landmark.png" end_point = {"/Landmark_page"} width_icon = {48} height_icon = {48} attraction_id = {attraction.id}></Button_bar>
        </div>
    </div>
    )
}



export default function Explore_page(){
    const [selectedPlace, setSelectedPlace] = useState<Attraction | null>(null);
    const ImgPath = Fetch_api_attraction_background({attraction:selectedPlace});
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