import type { JSX } from "react";
import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Feedback from "../Feedback/feedback";


export default function Layout():JSX.Element {
  return (
    <div>
      <NavBar/>
      <Outlet/>
      <footer style={{textAlign: "center", color: "#999999", fontSize: "1rem", opacity:"0.8" }}>
        There will be footer
      </footer>
      <Feedback/>
    </div>
  )
}


// Layout ir tas, kaa tas izskatiisies browserii