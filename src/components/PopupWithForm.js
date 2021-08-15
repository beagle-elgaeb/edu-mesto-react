import buttonClosePopup from "../images/button-сlose.svg";

function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? "popup_opened" : ""} `}>
      <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>
        <form className={`popup__form popup__form_type_${props.name} `} name={`form - ${props.name} `} noValidate>
          {props.children}
        </form>
        <button className="popup__button-close" type="button" aria-label="Закрыть окно" onClick={props.onClose}>
          <img className="popup__button-close-img" src={buttonClosePopup} alt="Закрыть окно" />
        </button>
      </div>
    </div>
  );
}

export default PopupWithForm;
