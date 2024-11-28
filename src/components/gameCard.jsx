import "../css/_gameCard.scss";

// Import game images for cards
import GamePic1 from '../assets/img/img-gamecard-1.jpeg';
import GamePic2 from '../assets/img/img-gamecard-2.jpeg';
import GamePic3 from '../assets/img/img-gamecard-3.jpeg';
import GamePic4 from '../assets/img/img-gamecard-4.jpeg';
import GamePic5 from '../assets/img/img-gamecard-5.jpeg';
import GamePic6 from '../assets/img/img-gamecard-6.jpeg';

// Store all game images in an array for easy indexing
const gameImages = [GamePic1, GamePic2, GamePic3, GamePic4, GamePic5, GamePic6];

// GameCard component to display individual game cards
function GameCard(props) {
  return (
    <>
      <div className="card">
        {/* Display game image based on imgIndex prop */}
        <img
          src={gameImages[props.imgIndex]}
          alt={props.cardTitle}
          className="img"
        />

        {/* Display game title */}
        <h2 className="card-title">{props.cardTitle}</h2>

        {/* Display game price */}
        <p className="price-tag">{props.priceTag}</p>

        {/* Button to add the game to the cart */}
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

