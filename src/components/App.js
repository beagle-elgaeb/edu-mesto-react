import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import PopupWithForm from "./PopupWithForm";
import PopupWithImage from "./PopupWithImage";

import "../index.css";

function App() {
  const [editAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [editProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [addCardPopupOpen, setAddCardPopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddCardClick() {
    setAddCardPopupOpen(true);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddCardPopupOpen(false);
    setSelectedCard(undefined);
  }

  const [selectedCard, setSelectedCard] = React.useState();

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddCard={handleAddCardClick}
          onCardClick={handleCardClick}
        />
        <Footer />
      </div>

      <PopupWithForm
        isOpen={editAvatarPopupOpen}
        name="edit-avatar"
        title="Обновить аватар"
        onClose={closeAllPopups}
      >
        <fieldset className="popup__fieldset">
          <input id="url-avatar-input" className="popup__input" placeholder="Ссылка на аватар" type="url" name="avatar"
            required />
          <span className="popup__error url-avatar-input-error"></span>
        </fieldset>
        <button className="popup__button-save" type="submit" aria-label="Сохранить">
          Сохранить
        </button>
      </PopupWithForm>

      <PopupWithForm
        isOpen={editProfilePopupOpen}
        name="edit-profile"
        title="Редактировать профиль"
        onClose={closeAllPopups}
      >
        <fieldset className="popup__fieldset">
          <input id="name-input" className="popup__input popup__input_text_full-name" placeholder="Ваше имя" type="text"
            name="fullName" required minLength="2" maxLength="40" />
          <span className="popup__error name-input-error"></span>
          <input id="about-you-input" className="popup__input popup__input_text_profession" placeholder="Ваша профессия"
            type="text" name="profession" required minLength="2" maxLength="200" />
          <span className="popup__error about-you-input-error"></span>
        </fieldset>
        <button className="popup__button-save" type="submit" aria-label="Сохранить">
          Сохранить
        </button>
      </PopupWithForm>

      <PopupWithForm
        isOpen={addCardPopupOpen}
        name="add-card"
        title="Новое место"
        onClose={closeAllPopups}
      >
        <fieldset className="popup__fieldset">
          <input id="title-pic-input" className="popup__input" placeholder="Название места" type="text" name="title"
            required minLength="2" maxLength="30" />
          <span className="popup__error title-pic-input-error"></span>
          <input id="url-pic-input" className="popup__input popup__input_url_pic" placeholder="Ссылка на картинку"
            type="url" name="pic" required />
          <span className="popup__error url-pic-input-error"></span>
        </fieldset>
        <button className="popup__button-save" type="submit" aria-label="Создать">
          Создать
        </button>
      </PopupWithForm>

      <PopupWithImage
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
