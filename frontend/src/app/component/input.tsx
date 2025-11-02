import "./input.css"
import Image from "next/image"
import { ChangeEvent } from "react";


interface input_bar_type{
    username: string;
    img_link: string;
    type_input: string;
    input_value: string;
    onChange_value: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input_bar({username, img_link, type_input, input_value, onChange_value}: input_bar_type){
    return(
        <div className = "input_bar">
            <input type = {type_input} placeholder = {username} value = {input_value} onChange = {onChange_value}></input>
            <Image src = {img_link} alt = "component" width={41} height={41}></Image>
        </div>
    )
}