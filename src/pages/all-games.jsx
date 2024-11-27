import GameCard from "../components/gameCard.jsx";

function AllGames(){
    return <div className="card-container">
        <GameCard
          cardTitle="Indiana Jones and the Great Circle™"
          priceTag="699 sek"
          imgIndex={0}
        />
        <GameCard
          cardTitle="Call of Duty®: Black Ops 6"
          priceTag="1099 sek"
          imgIndex={1}
        />
        <GameCard
          cardTitle="Microsoft Flight Simulator 2024"
          priceTag="399 sek"
          imgIndex={2}
        />
        <GameCard
          cardTitle="S.T.A.L.K.E.R. 2: Heart of Chornobyl"
          priceTag="599 sek"
          imgIndex={3}
        />
        <GameCard
          cardTitle="Sniper Elite: Resistance"
          priceTag="499 sek"
          imgIndex={4}
        />
        <GameCard
          cardTitle="Tom Clancy's Rainbow Six® Siege"
          priceTag="699 sek"
          imgIndex={5}
        />
      </div>
}

export default AllGames;