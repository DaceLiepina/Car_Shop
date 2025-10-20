import ProfileCard from "../ProfileCard/ProfileCard";



export default function Homework02() {

    const user1 = {
    avatar: "https://i.pravatar.cc/150?img=33",
    name: "John Lacks",
    job: "Teacher",
    hobby: "Traveling",
  };

  const user2 = {
    avatar: "https://i.pravatar.cc/150?img=45",
    name: "Maria Rosy",
    job: "Designer",
    hobby: "Drawing",
  };

  const user3 = {
    avatar: "https://i.pravatar.cc/150?img=11",
    name: "Alejandro Outer",
    job: "Photograph",
    hobby: "Guitar",
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
      <ProfileCard {...user1} />
      <ProfileCard {...user2} />
      <ProfileCard {...user3} />
    </div>
  )
}
