"use client"

import "./detail_hide.css"
import { useState } from "react";
import Image from "next/image";


interface Destination {
  id?: number;
  name: string;
  location?: string;
  detail: string;
  img_path: string;
}

function Fetch_api_attraction_Off( {destination}: {destination: Destination | null}){
    const [detail, setDetail] = useState<string>("Loading...");
    if (!destination) {
        return "Type a location name to start exploring";
    }

    const char = Array.from(destination.detail);
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
function Fetch_api_attraction_On({destination}: {destination: Destination | null}){
    const [detail, setDetail] = useState<string>("Loading...");
    if (!destination) {
        return "Type a location name to start exploring";
    }
    return(
        <div>
            <p>
                {destination.detail}
            </p>
        </div>
    )
}
export default function Detail_handler( {destination}: {destination: Destination | null} ){
    const [show_detail, setShow_detail] = useState(false);
    if (!destination) {
        return "Type a location name to start exploring";
    }
    const click_handler = () =>{
        setShow_detail((prev) => !prev)
    }

    const char = Array.from(destination.detail);
    let word = 0;
    let content = "";

    for (let i = 0; i < char.length; i++) {
        if (char[i] == " ") {
            word += 1;
            content += char[i];
        }
    }
    if( word < 30){
        return(
            <div className = "detail">
                <Fetch_api_attraction_On destination={destination}></Fetch_api_attraction_On>
            </div>
        )
    } else{
        return(
            <div className = "detail">
                {show_detail? <Fetch_api_attraction_On destination={destination}></Fetch_api_attraction_On>: <Fetch_api_attraction_Off destination={destination }></Fetch_api_attraction_Off>}
                <div className = "more_detail">
                    <button className = "button_more_detail" onClick = {click_handler}>
                        <Image id = "more_detail" src = {"/more_detail_icon.png"} alt = "more_detail" width = {32} height = {32}></Image>
                    </button>
                </div>
            </div>
        )
    }
}