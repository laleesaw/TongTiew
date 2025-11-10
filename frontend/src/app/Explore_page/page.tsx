"use client";

import { useEffect, useState } from "react"
import axios from "axios"
import "./page.css"
import Image from "next/image"
import Button_bar from "../component/button"
import Choose_nav from "../component/navigation_bar"
import Standard_background from "../component/standard_background"

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


function Fetch_api_attraction_Off(){
    const [detail, setDetail] = useState<string>("Loading...");

    useEffect(() => {
        const fetchDetail = async () => {
        try {
            const res = await axios.post<ExploreResponse>("http://localhost:8080/explore");
            setDetail(res.data.data[0].detail);
        } catch (err) {
            console.error("Error fetching detail:", err);
            setDetail("Failed to load detail.");
        }
        };

        fetchDetail();
    }, []);

    const char = Array.from(detail);
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
function Fetch_api_attraction_On(){
    const [detail, setDetail] = useState<string>("Loading...");

    useEffect(() => {
        const fetchDetail = async () => {
        try {
            const res = await axios.post<ExploreResponse>("http://localhost:8080/explore");
            setDetail(res.data.data[0].detail);
        } catch (err) {
            console.error("Error fetching detail:", err);
            setDetail("Failed to load detail.");
        }
        };

        fetchDetail();
    }, []);

    return(
        <p>
            {detail}
        </p>
    )

}


function Detail_handler(){
    const [show_detail, setShow_detail] = useState(false);

    const click_handler = () =>{
        setShow_detail((prev) => !prev)
    }
    return(
        <div>
            {show_detail? <Fetch_api_attraction_On></Fetch_api_attraction_On>: <Fetch_api_attraction_Off></Fetch_api_attraction_Off>}
            <div className = "more_detail">
                <button className = "button_more_detail" onClick = {click_handler}>
                    <Image id = "more_detail" src = "/more_detail_icon.png" alt = "more_detail" width = {32} height = {32}></Image>
                </button>
            </div>
        </div>
    )
}


function Detail( ){


    return(

    <div className = "box">
        <h1>Yaowarat</h1>
        {Detail_handler()}
        <div className = "set_button">
            <Button_bar text = "RESTAURANT" img_link = "/restaurant_icon.png" end_point = {"/SignIn"} width_icon = {48} height_icon = {48}></Button_bar>
            <Button_bar text = "HOTEL" img_link = "/hotel_icon.png" end_point = {"/SignIn"} width_icon = {48} height_icon = {48}></Button_bar>
            <Button_bar text = "LANDMARK" img_link = "/landmark.png" end_point = {"/SignIn"} width_icon = {48} height_icon = {48}></Button_bar>
        </div>
    </div>


    )


}



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
                <Standard_background img_head = "/chinatown_standard.jpg" detail = {Detail}></Standard_background>
                <div className = "nav_bar">
                    <Choose_nav choose_nav_ = {0}></Choose_nav>
                </div>
            </div>

        </div>
    )
}