import React from 'react';

import './IdCard.css';

const IdCard = props => {
  const lastName = props.lastName;
  const firstName = props.firstName;
  const gender = props.gender;
  const height = props.height;
  const birth = props.birth;
  const picture = props.picture;

  return (
    <div className="id-card">
      <img src={picture} alt="Person's Profile" />
      <div>
        <p>
          {' '}
          <strong>First name: </strong> {firstName} <br />{' '}
        </p>
        <p>
          {' '}
          <strong>Last name: </strong> {lastName} <br />{' '}
        </p>
        <p>
          {' '}
          <strong>Gener: </strong> {gender} <br />{' '}
        </p>
        <p>
          {' '}
          <strong>Height: </strong> {height} <br />{' '}
        </p>
        <p>
          {' '}
          <strong>Birth: </strong> {birth.toLocaleString()} <br />{' '}
        </p>
      </div>
    </div>
  );
};

export default IdCard;
