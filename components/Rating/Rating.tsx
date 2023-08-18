import React, { useEffect, useState, KeyboardEvent } from "react";
import { RatingProps } from "./Rating.props";
import classnames from "classnames";
import StarIcon from "./Star.svg";
import style from "./Rating.module.css";
import { ForwardedRef, forwardRef } from 'react';

export const Rating = forwardRef(({
  isEditeble = false,
  rating,
  setRating,
  ...props
}: RatingProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const epatedArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <span
          className={classnames(style.star, {
            [style.filled]: i < currentRating,
            [style.editable]: isEditeble,
          })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onClick(i + 1)}
        >
          <StarIcon
            tabIndex={isEditeble ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGAElement>) =>
              isEditeble && handleSpace(i + 1, e)
            }
          />
        </span>
      );
    });
    setRatingArray(epatedArray);
  };

  const changeDisplay = (i: number) => {
    if (!isEditeble) return;
    constructRating(i);
  };

  const onClick = (i: number) => {
    if (!isEditeble || !setRating) return;
    setRating(i);
  };

  const handleSpace = (i: number, e: KeyboardEvent<SVGAElement>) => {
    if (e.code != "Space" || !setRating) return;
    setRating(i);
  };

  return (
    <div {...props} ref={ref}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
});
