import buttonClosePopup from "../images/button-сlose.svg";

function PopupImage() {
  return (
    <div className="popup popup_type_pic">
      <div className="popup__container-pic">
        <img className="popup__pic" alt="Изображение отсутствует" src="#" />
        <h2 className="popup__pic-title">Заголовок отсутствует</h2>
        <button className="popup__button-close" type="button" aria-label="Закрыть картинку">
          <img className="popup__button-close-img" src={buttonClosePopup} alt="Закрыть окно" />
        </button>
      </div>
    </div>
  );
}

export default PopupImage;
