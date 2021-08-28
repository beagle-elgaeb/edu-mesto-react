import buttonClosePopup from "../images/button-сlose.svg";

function ImagePopup(props) {
  return (
    <div className={`popup popup_type_pic ${props.card ? "popup_opened" : ""}`} onClick={props.onClose}>
      <div className="popup__container-pic" onClick={(e) => e.stopPropagation()}>
        <img className="popup__pic" alt="Изображение отсутствует" src={props.card?.link} />
        <h2 className="popup__pic-title">{`${props.card?.name} || ${props.card?.owner.name} (${props.card?.owner.about})`}</h2>
        <button className="popup__button-close" type="button" aria-label="Закрыть картинку">
          <img className="popup__button-close-img" src={buttonClosePopup} alt="Закрыть окно" onClick={props.onClose} />
        </button>
      </div>
    </div>
  );
}

export default ImagePopup;
