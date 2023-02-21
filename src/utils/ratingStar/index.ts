import {assets} from '@assets/assets';

export const renderStar = (rating: number) => {
  let starsLeft = Math.floor(rating * 2) / 2;
  let starName = [];

  for (let i = 0; i < 5; i++) {
    let starIconName = assets.images.starsEmpty;

    if (starsLeft >= 1) {
      starIconName = assets.images.starsFull;
    } else if (starsLeft === 0.5) {
      starIconName = assets.images.starsHalf;
    }
    starName.push(starIconName);
    starsLeft -= 1;
  }

  return starName;
};
