import React from "react";
import PropTypes from 'prop-types';

import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ onUpdateAvatar, isOpen, onClose }) {
  const avatarRef = React.useRef();

  React.useEffect(() => {
    avatarRef.current.value = "";
  }, [isOpen]);

  function handleSubmit() {
    onUpdateAvatar(avatarRef.current.value);
  }

  return (
    <PopupWithForm
      name="edit-avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      onSubmit={handleSubmit}
      isOpen={isOpen}
      onClose={onClose}
    >
      <fieldset className="popup__fieldset">
        <input id="url-avatar-input" className="popup__input" ref={avatarRef}
          placeholder="Ссылка на аватар" type="url" name="avatar" required />
        <span className="popup__error url-avatar-input-error"></span>
      </fieldset>
    </PopupWithForm>
  );
}

EditAvatarPopup.propTypes = {
  onUpdateAvatar: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default EditAvatarPopup;
