import React from "react";

import buttonClosePopup from "../images/button-сlose.svg";

function PopupWithForm(props) {
  const [isSubmit, setIsSubmit] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    props.onSubmit();
    setIsSubmit(true);
  }

  React.useEffect(() => {
    setIsSubmit(false);
  }, [props.isOpen]);

  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? "popup_opened" : ""} `} onClick={props.onClose}>
      <div className="popup__container" onClick={(e) => e.stopPropagation()}>
        <h2 className="popup__title">{props.title}</h2>
        <form className={`popup__form popup__form_type_${props.name} `} name={`form - ${props.name}`} onSubmit={handleSubmit} >
          {props.children}
          <button className="popup__button-save" type="submit" aria-label="Сохранить">
            {props.buttonText}{isSubmit ? "..." : ""}
          </button>
        </form>
        <button className="popup__button-close" type="button" aria-label="Закрыть окно" onClick={props.onClose}>
          <img className="popup__button-close-img" src={buttonClosePopup} alt="Закрыть окно" />
        </button>
      </div>
    </div>
  );
}

export default PopupWithForm;
