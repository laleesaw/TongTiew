"use client"

import "./page.css"
import Image from "next/image"
import Choose_nav from "../component/navigation_bar"
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react"
import Link from "next/link";

// function Fetch_api_restaurant_img({attraction}: {attraction: Attraction | null}){
//     if (!attraction){
//         return "/welcome_to_tongtiew.png";
//     }
//     return attraction.img_path;
// }



interface Restaurant {
  name: string;
  location: string;
  rating: string;
  detail: string;
  img_path: string;
}

interface ExploreResponse {
  status: string;
  data: Restaurant[];
}
interface A_card_type{
    src: string;
    name: string;
    rating: string;
    detail: string;
}

function useFindFromDatabase() {
  const [restaurant, setRestaurant] = useState<Restaurant[]>([]);
  const fetchRestaurant_Attraction_id = async (search_number: number) => {
    console.log(search_number);
    try {
      const res = await axios.post<ExploreResponse>("http://localhost:8080/restaurant",{Restaurant_id: search_number,});
      setRestaurant(res.data.data);
    } catch (err) {
      console.error("Error fetching restaurant:", err);
    }
  };
  return { restaurant, fetchRestaurant_Attraction_id };
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
    // console.log(restaurant[0].img_path);


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
    // let total_src = ["/chinatown_standard.jpg", "/chinatown_standard.jpg", "/chinatown_standard.jpg", "/chinatown_standard.jpg", "/chinatown_standard.jpg", "/chinatown_standard.jpg"]
    // let total_rating = [4.5, 4.5, 4.5, 4.5, 4.5, 4.5]
    // let total_detail = ["Yaowarat</span> is known as Thailand's Chinatown an old neighborhood rich in Chinese culture. It's famous for its delicious food, especially world-",
    //     "Yaowarat</span> is known as Thailand's Chinatown an old neighborhood rich in Chinese culture. It's famous for its delicious food, especially world-",
    //     "Yaowarat</span> is known as Thailand's Chinatown an old neighborhood rich in Chinese culture. It's famous for its delicious food, especially world-",
    //     "Yaowarat</span> is known as Thailand's Chinatown an old neighborhood rich in Chinese culture. It's famous for its delicious food, especially world-",
    //     "Yaowarat</span> is known as Thailand's Chinatown an old neighborhood rich in Chinese culture. It's famous for its delicious food, especially world-",
    //     "Yaowarat</span> is known as Thailand's Chinatown an old neighborhood rich in Chinese culture. It's famous for its delicious food, especially world-"
    // ]
    return(
        <div className = "display_card">
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