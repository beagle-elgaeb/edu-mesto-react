import buttonDeleteCard from "../images/button-delete.svg";

function Card({ card, onClick }) {
  return (
    <li className="photo-gallery__card card list__item">
      <button className="card__button-delete" type="button" aria-label="Удалить">
        <img className="card__button-delete-img" src={buttonDeleteCard} alt="Удалить карточку" />
      </button>
      <img className="card__photo" src={card.link} alt="Фотография" onClick={() => onClick(card)} />
      <div className="card__title-and-like">
        <h2 className="card__title">{card.name}</h2>
        <button className="card__button-like" type="button" aria-label="Нравится">
          <div className="card__button-like-img"></div>
          <p className="card__button-like-count">{card.likes.length}</p>
        </button>
      </div>
    </li>
  );
}

export default Card;
