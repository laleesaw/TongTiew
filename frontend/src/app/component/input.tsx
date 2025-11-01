import "./input.css"
import Image from "next/image"

interface input_bar_type{
    username: string;
    img_link: string;
    type_input: string;
}

export default function Input_bar({username, img_link, type_input}: input_bar_type){
    return(
        <div className = "input_bar">
            <input type = {type_input} placeholder = {username}></input>
            <Image src = {img_link} alt = "component" width={41} height={41}></Image>
        </div>
    )
}