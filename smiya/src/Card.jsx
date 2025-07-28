import "./Card.css";

function Card({ image, title, paragraph }) {
  return (
    <div className="card-container">
      <div className="card">
        <img src={image} alt="" />
        <h2>{title}</h2>
        <p>{paragraph}</p>
      </div>
    </div>
  );
}

export default Card;
