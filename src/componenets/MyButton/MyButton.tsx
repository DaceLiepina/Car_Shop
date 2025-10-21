type MyButtonProps = {
    onClick: () => void;
    children: React.ReactNode; //apvienoti visi saturamie tipi- number, string, null utt
}

export default function MyButton({onClick, children}: MyButtonProps) {
  return (
   <button
      onClick={onClick}
      style={{
        backgroundColor: "#1a5492ff",
        color: "white",
        border: "none",
        borderRadius: "6px",
        padding: "8px 16px",
        cursor: "pointer",
        fontSize: "1rem",
        margin: "7px",
        transition: "background-color 0.3s",
      }}
      // onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
      // onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#007bff")}
    >
      {children}
    </button>
  )
}
