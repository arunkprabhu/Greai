import React, { useState } from "react";

import {
  BsEmojiExpressionlessFill,
  BsEmojiNeutralFill,
  BsEmojiSmileFill,
  BsFillEmojiFrownFill,
  BsFillEmojiLaughingFill,
} from "react-icons/bs";
import { ratingData } from "../../services/data/progressData";

const Rating = () => {
  const [rating, setRating] = useState(1);

  const onHandleClick = (type) => {
    if (rating >= 1 && rating < 6) {
      if (type === "add") {
        setRating(rating + 1);
      } else if (type === "minus") {
        setRating(rating - 1);
      }
    }
  };
  React.useEffect(() => {
    if (rating === 6) {
      setRating(5);
    } else if (rating === 0) {
      setRating(1);
    }
  }, [rating]);
  console.log(rating);
  return (
    <div className="rating">
      <div onClick={() => onHandleClick("minus")} className="minus">
        -
      </div>

      {ratingData?.map(({ id, icon }) => {
        const removeTransparance = id === rating ? "" : "transparent";
        return (
          <div key={id} className={`level${id}`}>
            {icon === "level1" ? (
              <BsFillEmojiFrownFill className={removeTransparance} />
            ) : icon === "level2" ? (
              <BsEmojiExpressionlessFill className={removeTransparance} />
            ) : icon === "level3" ? (
              <BsEmojiNeutralFill className={removeTransparance} />
            ) : icon === "level4" ? (
              <BsEmojiSmileFill className={removeTransparance} />
            ) : (
              <BsFillEmojiLaughingFill className={removeTransparance} />
            )}
          </div>
        );
      })}
      <div onClick={() => onHandleClick("add")} className="add">
        +
      </div>
    </div>
  );
};

Rating.propTypes = {};

export default Rating;
