import React from 'react';

import AlbumCard from 'Components/AlbumCard';
import Carousel from 'Components/Carousel';

import { Album } from 'Shared/Types/Album';

import styles from './index.module.css';

interface AlbumCarouselProps {
  albums: Album[];
  selectedAlbumId: number;
  onChangeSelectedAlbum: (albumIdx: number) => void;
}

const AlbumCarousel: React.FC<AlbumCarouselProps> = ({
  albums,
  selectedAlbumId,
  onChangeSelectedAlbum,
}: AlbumCarouselProps) => {
  return (
    <div className={styles.container}>
      <Carousel onChangeSlide={onChangeSelectedAlbum}>
        {albums.map(({ id, thumbnailUrl, title }: Album) => (
          <AlbumCard
            key={id}
            imageUrl={thumbnailUrl || ''}
            title={title}
            shouldFocus={id === selectedAlbumId}
          />
        ))}
      </Carousel>
      <span className={styles.indicator}>
        {selectedAlbumId} of {albums.length}
      </span>
    </div>
  );
};

export default AlbumCarousel;
