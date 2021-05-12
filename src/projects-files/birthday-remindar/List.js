import React from "react";

const List = props => {
  const { people } = props;
  return (
    <>
      {people.map(person => {
        const { id, name, age, image } = person;
        return (
          <arcticle key={id} className="person">
            <img src={image} alt="" />
            <div>
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
          </arcticle>
        );
      })}
    </>
  );
};

export default List;
