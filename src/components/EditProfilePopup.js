import React from "react";

import PopupWithForm from "./PopupWithForm";

import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  function handleName(e) {
    setName(e.target.value);
  }

  function handleDescription(e) {
    setDescription(e.target.value);
  }

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUser({
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
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <fieldset className="popup__fieldset">
        <input id="name-input" className="popup__input popup__input_text_full-name" value={name ?? ""} onChange={handleName} placeholder="Ваше имя" type="text"
          name="fullName" required minLength={2} maxLength={40} />
        <span className="popup__error name-input-error"></span>
        <input id="about-you-input" className="popup__input popup__input_text_profession" value={description ?? ""} onChange={handleDescription} placeholder="Ваша профессия"
          type="text" name="profession" required minLength={2} maxLength={200} />
        <span className="popup__error about-you-input-error"></span>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
