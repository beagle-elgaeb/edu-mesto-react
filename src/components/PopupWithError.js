import buttonClosePopup from "../images/button-сlose.svg";

function PopupError(props) {
  return (
    <div className="popup popup_type_error">
      <div className="popup__container-error">
        <p>Что-то пошло не так.</p>
        <p>Но я не знаю что.</p>
        <p>Посмотрите в консоль.</p>
        <button type="button" aria-label="Закрыть ошибку" className="popup__button-close">
          <img src={buttonClosePopup} alt="Закрыть окно" className="popup__button-close-img" />
        </button>
      </div>
    </div>
  );
}

export default PopupError;
