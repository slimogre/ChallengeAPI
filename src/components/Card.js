import React from 'react'
import "../App.css";

const Card = ({user,char_id}) => {
    return (
        <div>
 <div className="card middle">
  <div className="front">
    <img src={user.img} alt="" />
  </div>
  <div className="back">
    <div className="back-content middle">
      <h2>Name : {user.name}</h2>
      <span>Birthday : {user.birthday}</span>
      <div className="sm">
        <h3>Occupation : {user.occupation}</h3>
        <h3>Status : {user.status}</h3>
        <h3>Nickname : {user.nickname}</h3>
        <h3>Portrayed : {user.portrayed}</h3>
      </div>
    </div>
  </div>
</div>

        </div>
    )
}

export default Card
