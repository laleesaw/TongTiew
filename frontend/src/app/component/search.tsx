"use client";

import "./search.css";
import Image from "next/image";
import { use, useEffect, useState } from "react";
import axios from "axios";


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

// ✅ Custom hook สำหรับดึงข้อมูลจาก backend
function useFindFromDatabase() {
  const [attraction, setAttraction] = useState<Attraction[]>([]);

  const fetchAttractionName = async (searchText: string) => {
    // console.log(searchText);
    try {
      const res = await axios.post<ExploreResponse>("http://localhost:8080/explore",{query: searchText,});
      setAttraction(res.data.data);
    } catch (err) {
      console.error("Error fetching attraction_name:", err);
    }
  };
  return { attraction, fetchAttractionName };
}

// ✅ Component หลัก

interface search_type {
  onSelect: (item: Attraction | null) => void;
}

export default function Search_bar({ onSelect }: search_type) {
  const { attraction, fetchAttractionName } = useFindFromDatabase();
  const [ query, setQuery] = useState("");
  const [ finish_hint, setFinish_hint] = useState("");
  const [ matched, setMatch] = useState<Attraction | null>(null);
  // const [ found, setfound] = useState("");

  useEffect(() => { 
    let find = "";
    for( let i = 0; i < attraction.length; i++){
      let hint = "";
      for( let j = 0; j < attraction[i].name.length; j++){
        hint += attraction[i].name[j];
        if(query.toLowerCase() == hint.toLowerCase()){
          console.log(hint);
          // setfound(attraction[i].name);
          find = attraction[i].name;
          setMatch(attraction[i]);
        }
      }
    }
    setFinish_hint(find);
  },[query])

  return (
    <div className="top">
      <div className = "wrap_all">
        <div className="wrap_search_bar">
          <input
            id="search_bar"
            placeholder = "Start your search"
            onClick={() => fetchAttractionName(query)}
            value = {query}
            onChange = {(e) => {
              const inputValue = e.target.value;
              setQuery(inputValue);
                }
              }
            onKeyDown={ (e) => {
              if (e.key === "Enter"){
                fetchAttractionName(query);
                onSelect(matched);
                setFinish_hint("");
              }
            }}
          />
          <Image
            id="search_icon"
            src="/search_icon.png"
            alt="search"
            width={48.27}
            height={48.27}
          />
        </div>
        <button className = {`hint ${finish_hint ? "has-hint" : "no-hint"}`} 
         onClick={() => {
          onSelect(matched);
          setFinish_hint("");
        }
         }>
          <span className = {`content ${finish_hint ? "has-content" : "no-content"}`}>{finish_hint}</span>
        </button>
      </div>
    </div>
  );
}
