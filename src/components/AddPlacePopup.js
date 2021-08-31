import React from "react";
import PropTypes from 'prop-types';

import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ onAddPlace, isOpen, onClose }) {
  const [title, setTitle] = React.useState("");
  const [pic, setPic] = React.useState("");

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handlePic(e) {
    setPic(e.target.value);
  }

  function handleSubmit() {
    onAddPlace({
      title,
      pic
    });
  }

  return (
    <PopupWithForm
      name="add-card"
      title="Новое место"
      buttonText="Создать"
      onSubmit={handleSubmit}
      isOpen={isOpen}
      onClose={onClose}
    >
      <fieldset className="popup__fieldset">
        <input id="title-pic-input" className="popup__input"
          value={title ?? ""} onChange={handleTitle}
          placeholder="Название места" type="text" name="title"
          required minLength={2} maxLength={30} />
        <span className="popup__error title-pic-input-error"></span>
        <input id="url-pic-input" className="popup__input popup__input_url_pic"
          value={pic ?? ""} onChange={handlePic}
          placeholder="Ссылка на картинку" type="url" name="pic" required />
        <span className="popup__error url-pic-input-error"></span>
      </fieldset>
    </PopupWithForm>
  );
}

AddPlacePopup.propTypes = {
  onAddPlace: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default AddPlacePopup;
