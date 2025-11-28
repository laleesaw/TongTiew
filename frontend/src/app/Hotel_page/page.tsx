"use client"

import "./page.css"
import Image from "next/image"
import Choose_nav from "../component/navigation_bar"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link";


interface Hotel {
  name: string;
  rating: string;
  img_path: string;
}
interface A_card_type{
    src: string;
    name: string;
    rating: string;
}

function useFindFromDatabase() {
    const [hotel, setHotel] = useState<Hotel[]>([]);
    const fetchHotel_Attraction_id = async ( search_number: number) => {
        try{
            const res = await fetch("http://localhost:8080/hotel",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({Hotel_id: search_number}),
            })
            const data = await res.json();
            setHotel(data.data);
        } catch (err) {
        console.error("Error fetching hotel", err);
    }};
  return { hotel, fetchHotel_Attraction_id };
} 



function A_Card({src, name, rating}: A_card_type){
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
                {/* <h2 className = "detail">{detail}</h2> */}
                {/* <div className = "more_detail">
                    <Image id = "more_detail" src = "/more_detail_icon.png" alt = "more_detail" width = {32} height = {32}></Image>
                </div> */}
            </div>
    )
}
function Display_card(){
    const {hotel, fetchHotel_Attraction_id} = useFindFromDatabase();
    const params = useSearchParams();
    const attraction_id = params.get("attraction_id");
    let temp_id = 0;
    if (attraction_id === null){
        temp_id = 0;
    }
    useEffect(() => {
        fetchHotel_Attraction_id(temp_id);
    }, [])


    let total_hotel: string[] = [];
    let total_src: string[] = [];
    let total_rating: string[] = []; 
    for( let i = 0; i < hotel.length; i++){
        total_hotel.push(hotel[i].name);
        total_src.push(hotel[i].img_path);
        total_rating.push(hotel[i].rating);
    }
    return(
        <div className = "display_card">
            {total_hotel.map((name, i) => (
                <A_Card 
                key = {i}
                src = {total_src[i]}
                name = {total_hotel[i]}
                rating = {total_rating[i]}></A_Card>
            ))}
        </div>
    )
    
}
export default function Hotel_page(){
    return(
        <div className = "page">
            <Link className = "back" href = "/Explore_page">
                <div className = "back_to_explore">
                    <Image id = "back_to_explore" src = "/back_to_explore.png" alt = "back" width = {263.27} height={53}></Image>
                </div>
            </Link>
            <Display_card></Display_card>
            <div className = "nav_bar">
                <Choose_nav choose_nav_ = {0}></Choose_nav>
            </div>
        </div>
    )
}