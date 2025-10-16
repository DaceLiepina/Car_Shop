import type { JSX } from "react";
import style from './ProfileCard.module.css'


type Props = {
  avatar: string;
  name: string;
  job: string;
  hobby: string;
};


export default function ProfileCard({avatar, name, job, hobby}: Props):JSX.Element{
  return (
    <div className={style.card}>
      <img
        src={avatar}
        alt={name}
        style={{ width: "100px", height: "100px"}}
      />
      <h3>{name}</h3>
      <p><b>Job: </b> {job}</p>
      <p><b>Hobby: </b> {hobby}</p>
    </div>
  )
}
