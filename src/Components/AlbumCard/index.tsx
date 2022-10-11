import React from 'react';

import styles from './index.module.css';

interface AlbumCardProps {
  shouldFocus?: boolean;
  imageUrl: string;
  title: string;
}

const AlbumCard: React.FC<AlbumCardProps> = ({
  imageUrl,
  title,
  shouldFocus = true,
}: AlbumCardProps) => {
  const classes = [styles.container];
  if (!shouldFocus) classes.push(styles.showImageOnly);

  return (
    <div className={classes.join(' ')}>
      <img className={styles.albumImage} src={imageUrl} alt={title} />
      {shouldFocus && <p className={styles.albumTitle}>{title}</p>}
    </div>
  );
};

export default AlbumCard;
