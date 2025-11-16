"use client";

import "./search.css";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";

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

// ✅ Custom hook สำหรับดึงข้อมูลจาก backend
function useFindFromDatabase() {
  const [attraction, setAttraction] = useState<Attraction[]>([]);

  const fetchAttractionName = async (searchText: string) => {
    console.log(searchText);
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
  const [matched, setMatch] = useState<Attraction | null>(null);



  return (
    <div className="top">
      <div className = "wrap_all">
        <div className="wrap_search_bar">
          <input
            id="search_bar"
            // onChange={(e) => setQuery(e.target.value)}
            placeholder = "Start your search"
            onClick={() => fetchAttractionName(query)}
            value = {query}
            onChange = {(e) => {
              const inputValue = e.target.value;
              setQuery(inputValue);
              for (let i = 0; i < attraction.length; i++){
                let hint_attraction = "";
                for (let j = 0; j < attraction[i].name.length; j++){
                  hint_attraction += attraction[i].name[j];
                  if (inputValue === hint_attraction) {
                    setFinish_hint(attraction[i].name);
                    setMatch(attraction[i]); // ใช้ Attraction ตัวจริง
                  }
                }
              }
            }}
            onKeyDown={ (e) => {
              // console.log(query);
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
        <ul className = {`hint ${finish_hint ? "has-hint" : "no-hint"}`}>
          {finish_hint}
        </ul>
      </div>
    </div>
  );
}
