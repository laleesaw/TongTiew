// "use client";
// import "./page.css";
// import Image from "next/image";
// import Choose_nav from "../component/navigation_bar";
// import { useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";

// type ValuePiece = Date | null;
// type Value = ValuePiece | [ValuePiece, ValuePiece];

// function MyCalendar() {
//   const [date, setDate] = useState<Value>(new Date());
//   const [dateRange, setdateRange] = useState<[Date, Date] | null>(null);



//   return (
//     <div>
//         <Calendar 
//          onChange={(value) => setdateRange(value as [Date, Date])}
//          value={dateRange} 
//          selectRange={true} 
//          formatMonthYear = {(locale, date) => {
//             const month = date.toLocaleString("eng", {month: "long"});
//             const year = date.getFullYear();
//             return `${month}\n${year}`;
//          }}
//         tileClassName={({ date }) => {
//         if (!dateRange) return "";
//         const [start, end] = dateRange;

//         const isSameDay = (d1: Date, d2: Date) =>
//             d1.getFullYear() === d2.getFullYear() &&
//             d1.getMonth() === d2.getMonth() &&
//             d1.getDate() === d2.getDate();

//         // วันแรก
//         if (start && isSameDay(date, start)) return "range-start";

//         // วันสุดท้าย
//         if (end && isSameDay(date, end)) return "range-end";

//         // วันระหว่าง
//         if (start && end && date > start && date < end) return "highlight-range";

//         return "";
//         }}
// />
//     </div>
//   );
// }

// export default function Schedule_page() {
//   return (
//     <div className="schedule_page">
//       <div className="background">
//         <div className="frame">
//           <Image
//             id="fest"
//             alt="festival_advice"
//             src="/newyear_festival.png"
//             width={440}
//             height={440}
//           />
//         </div>
//         <div className="circle">
//           <div className="box">
//             <MyCalendar />
//             <div className="nav_bar">
//                 <Choose_nav choose_nav_={3} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
