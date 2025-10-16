import type { JSX } from "react";  // vecakku elements
import Car from "../Car/Car";   // importeejam Children - beernu....ieks vecaaka tagad ir beerns - Car Components
import Bike from "../Bike/Bike";

export default function CarShop():JSX.Element {
  return (
    <div>
      <h1>Car Shop</h1>
      <h2>Cars</h2>
      {/* izsaucam */}
      <Car brand={"BMW"} color={"coral"} image={"https://tse3.mm.bing.net/th/id/OIP.EZYoRWYpWrMvRxy6y54NcgHaE8?pid=Api&P=0&h=180"} /> 
      <Car brand={"Lada"} color={"pink"} image={"https://img.indianautosblog.com/resize/750x-/2018/08/29/lada-4x4-vision-concept-bb63.jpg"}/> 
      <Car brand={"Volga"} color={"green"} image={"https://temp2.modland.net/i/68c684c9c4045/68cef173569d3/Screenshot_5-md_modland.webp"}/> 
      <Car brand={"Mercedes"} color={"blue"} image={"https://www.hdcarwallpapers.com/thumbs/2014/2015_mercedes_benz_cls-t2.jpg"}/>
      <Car brand={"Honda"} color={"yellow"} image={"https://www.motortrend.com/uploads/2023/05/2024-Honda-HR-V-AWD-EX-L-front-view-20.jpg"}/>
      <Bike gears={8} brand={"Harley Davidson"} price={14000} image={"https://sportishka.com/uploads/posts/2022-04/1650967338_37-sportishka-com-p-chopperi-kharlei-devidson-modelnii-ryad-kr-39.jpg"}/>
      <Bike gears={0} brand={"Honda CBR 650R"} price={23_000} image={"https://images5.1000ps.net/images_bikekat/2024/2-Honda/9566-CBR650R/006-638352039840227007-honda-cbr650r.jpg?width=1200&height=740&mode=crop&format=webp"}/>
    
     
     
      
      </div>
  )
}
