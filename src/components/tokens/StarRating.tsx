import React from 'react';
import { Icon } from '@iconify/react';

type StarsRatingProps = {
  rating?: number; // e.g., 4.2
};

const StarsRating: React.FC<StarsRatingProps> = ({ rating = 0 }) => {
  // Ensure rating is a number between 0 and 5
  const validRating = Math.max(0, Math.min(5, parseFloat(String(rating)) || 0));

  return (
    <div className="starsRating">
      {Array.from({ length: 5 }, (_, index) => {
        const isActive = index < validRating;
        return (
          <Icon
            key={index}
            icon="solar:star-bold"
            width="16"
            height="16"
            className={isActive ? 'active' : ''}
          />
        );
      })}
    </div>
  );
};

export default StarsRating;
