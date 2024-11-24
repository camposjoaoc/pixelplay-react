import "../css/gameCard.css";
import GamePic1 from '../img/img-gamecard-1.jpeg';
import GamePic2 from '../img/img-gamecard-2.jpeg';
import GamePic3 from '../img/img-gamecard-3.jpeg';
import GamePic4 from '../img/img-gamecard-4.jpeg';
import GamePic5 from '../img/img-gamecard-5.jpeg';

const gameImages = [GamePic1, GamePic2, GamePic3, GamePic4, GamePic5];

function GameCard(props) {
  // let cardTitle = "Generic";
  // let priceTag = 0;

  return (
    <>
      <div className="card">
        <img
          src={gameImages[props.imgIndex]}
          alt={props.cardTitle}
          className="img"
        />
        <h2 className="card-title">{props.cardTitle}</h2>
        <p className="price-tag">{props.priceTag}</p>
        <button
          className="btn-buy"
          onClick={() => alert('Product added to your cart successfully!')}
        >
          Add to Cart
        </button>
      </div>
    </>
  );
}

export default GameCard;
