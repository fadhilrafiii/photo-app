import React from 'react';

import { Photo } from 'Shared/Types/Photo';

import styles from './index.module.css';

interface PhotoGridProps {
  photos: Photo[];
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ photos }: PhotoGridProps) => {
  return (
    <div className={styles.container}>
      {photos.map((photo: Photo, idx: number) => (
        <img
          key={photo.id}
          src={photo.thumbnailUrl}
          alt={photo.title}
          className={styles.photo}
          data-index={idx}
          loading="lazy"
        />
      ))}
    </div>
  );
};

export default PhotoGrid;
