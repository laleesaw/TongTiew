import "./standard_background.css"
import Image from "next/image";

interface input_type{
    img_head: string;
    detail: () => React.ReactNode;
}

export default function Standard_background({img_head, detail}:input_type){
    return(
        <div className = "profile_page">
            <div className = "background">
                <div className = "head_background">
                    <Image id = "img_head" alt = "header" src = {img_head} width = {440} height = {330}></Image>
                </div>
                <div className = "circle">
                    <div className = "box">{detail()}</div>
                </div>
            </div>
        </div>
    )
}