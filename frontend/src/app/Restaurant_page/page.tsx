"use client"

import "./page.css"
import Image from "next/image"
import Choose_nav from "../component/navigation_bar"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link";
import Detail_handler from "../component/detail_hide"


interface Restaurant {
  name: string;
  location: string;
  rating: string;
  detail: string;
  img_path: string;
}
interface A_card_type{
    src: string;
    name: string;
    rating: string;
    restaurant?: Restaurant;
}

function useFindFromDatabase() {
    const [restaurant, setRestaurant] = useState<Restaurant[]>([]);
    const fetchRestaurant_Attraction_id = async ( search_number: number) => {
        try{
            const res = await fetch("http://localhost:8080/restaurant",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({Restaurant_id: search_number}),
            })

            const data = await res.json();
            setRestaurant(data.data);
        } catch (err) {
        console.error("Error fetching restaurant", err);
    }};
  return { restaurant, fetchRestaurant_Attraction_id };
} 



function A_Card({src, name, rating, restaurant}: A_card_type){
    if(!restaurant){
        return(
            <div>
                error
            </div>
        )
    }
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
                <div className = "detail"><Detail_handler destination={restaurant}></Detail_handler></div>
            </div>
    )
}
function Display_card(){
    const {restaurant, fetchRestaurant_Attraction_id} = useFindFromDatabase();
    const params = useSearchParams();
    const attraction_id = params.get("attraction_id");
    let temp_id = 0;
    if (attraction_id === null){
        temp_id = 0;
    }
    useEffect(() => {
        fetchRestaurant_Attraction_id(temp_id);
    }, [])


    let total_restautant: string[] = [];
    let total_src: string[] = [];
    let total_rating: string[] = []; 
    let total_detail: string[] = [];
    for( let i = 0; i < restaurant.length; i++){
        total_restautant.push(restaurant[i].name);
        total_src.push(restaurant[i].img_path);
        total_rating.push(restaurant[i].rating);
        total_detail.push(restaurant[i].detail);
    }
    return(
        <div className = "display_card">
            {total_restautant.map((name, i) => (
                <A_Card 
                    key = {i}
                    src = {total_src[i]}
                    name = {total_restautant[i]}
                    rating = {total_rating[i]}
                    restaurant = {restaurant[i]}
                >
                </A_Card>
            ))}
        </div>
    )
    
}
export default function Restaurant_page(){
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