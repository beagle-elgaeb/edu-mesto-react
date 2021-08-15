import React from "react";
import api from "../utils/Api";

import Card from "./Card";

import avatar from "../images/loader.gif";
import buttonEditImg from "../images/button-edit.svg";
import buttonAddCard from "../images/button-add.svg";

function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState({ avatar });
  const [cards, setCards] = React.useState([]);

  function getUserAvatar() {
    api.getProfileData()
      .then((result) => {
        setUserName(result.name);
        setUserDescription(result.about);
        setUserAvatar(result.avatar);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  getUserAvatar();

  React.useEffect(() => {
    api.getInitialCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <button className="profile__button-edit-avatar profile__button-edit-avatar-overlay" onClick={props.onEditAvatar}>
          <img className="profile__avatar" src={userAvatar} alt="Фото профиля" />
        </button>
        <div className="profile__info">
          <div className="profile__info-full-name-and-button-edit">
            <h1 id="fullName" className="profile__info-full-name">{userName}</h1>
            <button className="profile__button-edit" type="button" aria-label="Изменить" onClick={props.onEditProfile}>
              <img className="profile__button-edit-img" src={buttonEditImg} alt="Кнопка редактирования профиля" />
            </button>
          </div>
          <p id="profession" className="profile__info-profession">{userDescription}</p>
        </div>
        <button className="profile__button-add-card" type="button" aria-label="Добавить фото" onClick={props.onAddCard}>
          <img className="profile__button-add-card-img" src={buttonAddCard} alt="Кнопка добавления места" />
        </button>
      </section>
      <section className="photo-gallery">
        <ul className="photo-gallery__cards list">

          {cards.map((item) => (
            <Card
              onClick={props.onCardClick}
              card={item}
              key={item._id}
            />
          ))}

        </ul>
      </section>
    </main>
  );
}

export default Main;
