import { BiStar } from "react-icons/bi";

function StarRating({ rating }) {
  let starRating = [0, 0, 0, 0, rating % 1];

  for (let n = 0; n < Math.floor(rating); n++) {
    starRating[n] = 1;
  }

  function fillStar() {}
  return <div>{}</div>;
}

export default StarRating;
