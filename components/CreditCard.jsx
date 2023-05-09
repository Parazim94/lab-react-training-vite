import React from "react";

function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
  let cardTypeIcon;
  if (type === "Visa") {
    cardTypeIcon = "/img/visa.png";
  } else if (type === "Master Card") {
    cardTypeIcon = "/img/master-card.svg";
  }

  const formattedNumber = "**** **** **** " + number.slice(-4);

  const formattedMonth = ("0" + expirationMonth).slice(-2);
  const formattedYear = expirationYear.toString().slice(-2);

  const cardStyle = {
    backgroundColor: bgColor,
    color: color,
  };

  return (
    <div className="credit-card" style={cardStyle}>
      <div className="card-type">
        <img src={cardTypeIcon} alt={type} />
      </div>
      <div className="card-number">{formattedNumber}</div>
      <div className="card-info">
        <div className="card-expiration">
          <span>Expires {formattedMonth}/{formattedYear}</span>
        </div>
        <div className="card-bank">{bank}</div>
      </div>
      <div className="card-owner">{owner}</div>
    </div>
  );
}

export default CreditCard;
