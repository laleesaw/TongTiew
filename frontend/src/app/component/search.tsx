"use client";

import "./search.css";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";

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
  // const [ query, setQuery] = useState("");

  const fetchAttractionName = async (searchText: string) => {
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
export default function Search_bar() {
  const { attraction, fetchAttractionName } = useFindFromDatabase();
  const [ query, setQuery] = useState("");
  // console.log(attraction);


  return (
    <div className="top">
      <div className="wrap_search_bar">
        <input
          id="search_bar"
          onChange={(e) => setQuery(e.target.value)}
          placeholder = "Start your search"
          onClick={() => fetchAttractionName(query)}  // ✅ เรียกฟังก์ชันจาก custom hook
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              fetchAttractionName(query);
              for (let i = 0; i < attraction.length; i++){
                if (query == attraction[i].name){
                  alert(query + " is in database");
                  break;
                } else {
                  alert(query + " isn't in database");
                  break;
                }
              }
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
    </div>
  );
}
