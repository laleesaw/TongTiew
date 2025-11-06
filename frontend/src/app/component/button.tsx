import "./button.css"
import Image from "next/image"
import Link from "next/link";


interface input_bar_type{
    text: string;
    img_link: string;
    end_point: string;
    width_icon: number;
    height_icon: number;
}

export default function Input_bar({text, img_link, end_point, width_icon, height_icon}: input_bar_type){
    return(
        <div className = "button_bar">
            <Link href = {end_point}>
                <button>{text}</button>
            </Link>
            <Image id = "img_button" src = {img_link} alt = "component" width = {width_icon} height = {height_icon}></Image>
        </div>
    )
}