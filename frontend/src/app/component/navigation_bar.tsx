import "./navigation_bar.css"
import Image from "next/image"
import Link from "next/link";

interface input_bar_type{
    img_link: string;
    name: string;
    width_nav: number;
    height_nav: number;
}


function Navigate_to({img_link, name, width_nav, height_nav}: input_bar_type){
    return(
        <div className = "nav_to">
            <Image alt = "nav" src = {img_link} width = {width_nav} height = {height_nav}></Image>
            <p>{name}</p>
        </div>
    )
}

interface choose_type{
    choose_i: number;
}
function Choose_nav({ choose_i }: choose_type) {
  const choose_before = [
    "/search_before_nav.png",
    "/wishlist_before_icon.png",
    "/planning_before_icon.png",
    "/schedule_before_icon.png",
    "/profile_before_icon.png"
  ];
  const choose_after = [
    "/search_after_icon.png",
    "/wishlist_after_icon.png",
    "/planning_after_icon.png",
    "/schedule_after_icon.png",
    "/profile_after_icon.png"
  ];


  const link_to = [
    "/Explore_page",
    "/Wishlists_page",
    "/Plan_page",
    "/Schedule_page",
    "/Profile_page"
  ]


  const nav_i = ["Explore", "Wishlist", "Plan", "Schedule", "Profile"];
  const width_icon = [31.74, 30.75, 31, 38, 41];
  const height_icon = [31.74, 27.27, 31, 38, 41];


  return (
    <div className="nav_bar_group">
      {nav_i.map((name, i) => (
        <div key={i} className="nav_bar_i">
          <Link href = {link_to[i]}>
            <Navigate_to
              img_link={i === choose_i ? choose_after[i] : choose_before[i]}
              name={name}
              width_nav={width_icon[i]}
              height_nav={height_icon[i]}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}

interface choose_nav_type {
    choose_nav_: number;
}
export default function Nav_bar({choose_nav_ }: choose_nav_type){
    return(
        <div className = "Navbar">
            <Choose_nav choose_i = {choose_nav_}></Choose_nav>
        </div>
    )
}