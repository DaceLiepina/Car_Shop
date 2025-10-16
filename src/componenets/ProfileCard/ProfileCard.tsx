import type { JSX } from "react";


type Props = {
  avatar: string;
  name: string;
  job: string;
  hobby: string;
};


export default function ProfileCard({avatar, name, job, hobby}: Props):JSX.Element{
  return (
    <div
       style={{
        border: "2px solid #ccc",
        borderRadius: "12px",
        padding: "16px",
        width: "220px",
        textAlign: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        margin: "10px",
      }}
    >
      <img
        src={avatar}
        alt={name}
        style={{ width: "100px", height: "100px", borderRadius: "50%" }}
      />
      <h3>{name}</h3>
      <p><b>Job: </b> {job}</p>
      <p><b>Hobby: </b> {hobby}</p>
    </div>
  )
}
