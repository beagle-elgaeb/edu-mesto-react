import React from "react";
import PropTypes from 'prop-types';

import PopupWithForm from "./PopupWithForm";

import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ onUpdateUser, isOpen, onClose }) {
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleName(e) {
    setName(e.target.value);
  }

  function handleDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit() {
    onUpdateUser({
      name: name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="edit-profile"
      title="Редактировать профиль"
      buttonText="Сохранить"
      onSubmit={handleSubmit}
      isOpen={isOpen}
      onClose={onClose}
    >
      <fieldset className="popup__fieldset">

        <input id="name-input" className="popup__input popup__input_text_full-name"
          value={name ?? ""} onChange={handleName}
          placeholder="Ваше имя" type="text" name="fullName"
          required minLength={2} maxLength={40} />

        <span className="popup__error name-input-error"></span>

        <input id="about-you-input" className="popup__input popup__input_text_profession"
          value={description ?? ""} onChange={handleDescription}
          placeholder="Ваша профессия" type="text" name="profession"
          required minLength={2} maxLength={200} />

        <span className="popup__error name-input-error"></span>

      </fieldset>
    </PopupWithForm>
  );
}

EditProfilePopup.propTypes = {
  onUpdateUser: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default EditProfilePopup;
