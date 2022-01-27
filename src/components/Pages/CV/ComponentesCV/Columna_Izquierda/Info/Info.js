import "./Info.css";
export default function ContactInfo() {
  return (
    <div className="infoGeneral">
      <h1 className="contactInfo col-lg mt-3">Contact Info</h1>
      <p className="telefono  col-lg mt-3">+34 618 46 41 82</p>
      <p className="email  col-lg mt-2">winkiripinki@gmail.com</p>
      <p className="edad  col-lg mt-2">
        <span style={{ fontSize: "25px" }}></span>
        <span>1994-2022</span>
      </p>
    </div>
  );
}
