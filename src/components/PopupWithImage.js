import buttonClosePopup from "../images/button-сlose.svg";

function PopupWithImage({card, onClose}) {
  if (!card) {
    return null;
  }

  return (
    <div className="popup popup_type_pic popup_opened">
      <div className="popup__container-pic">
        <img className="popup__pic" alt="Изображение отсутствует" src={card.link} />
        <h2 className="popup__pic-title">{`${card.name} || ${card.owner.name} (${card.owner.about})`}</h2>
        <button className="popup__button-close" type="button" aria-label="Закрыть картинку">
          <img className="popup__button-close-img" src={buttonClosePopup} alt="Закрыть окно" onClick={onClose} />
        </button>
      </div>
    </div>
  );
}

export default PopupWithImage;
