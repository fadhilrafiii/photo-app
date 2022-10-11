/* eslint-disable no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { getAlbums } from 'Clients/getAlbums';
import { getPhotos } from 'Clients/getPhotos';

import LoadingModal from 'Components/LoadingModal';

import { Album } from 'Shared/Types/Album';
import { Photo } from 'Shared/Types/Photo';

import AlbumCarousel from './AlbumCarousel';
import PhotoGrid from './PhotoGrid';
import { getMappedAlbumsWithThumbnail, getSelectedAlbumPhotos } from './utils';

const PhotosPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [albums, setAlbums] = useState<Album[]>([]);

  const [selectedAlbumId, setSelectedAlbumId] = useState(1);

  const handleChangeSelectedAlbum = (slideIdx: number) => {
    const albumId = albums[slideIdx]?.id || 0;
    setSelectedAlbumId(albumId);
  };

  const getPhotosData = useCallback(async () => {
    setIsLoading(true);
    await getPhotos()
      .then((data?: Photo[]) => {
        if (data) setPhotos(data);
        setIsLoading(false);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const getAlbumsData = useCallback(async () => {
    setIsLoading(true);
    await getAlbums()
      .then((data?: Album[]) => {
        if (data) setAlbums(data);
        setIsLoading(false);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const getPhotosAndAlbumsData = useCallback(async () => {
    await getAlbumsData();
    await getPhotosData();
  }, [getAlbumsData, getPhotosData]);

  useEffect(() => {
    getPhotosAndAlbumsData();
  }, [getPhotosAndAlbumsData]);

  const mappedAlbumsWithThumbnail = useMemo(
    () => getMappedAlbumsWithThumbnail(albums, photos),
    [albums, photos],
  );

  const selectedAlbumPhotos = useMemo(
    () => getSelectedAlbumPhotos(photos, selectedAlbumId),
    [photos, selectedAlbumId],
  );

  return (
    <div>
      <AlbumCarousel
        albums={mappedAlbumsWithThumbnail}
        selectedAlbumId={selectedAlbumId}
        onChangeSelectedAlbum={handleChangeSelectedAlbum}
      />
      <PhotoGrid photos={selectedAlbumPhotos} />
      <LoadingModal isOpen={isLoading} />
    </div>
  );
};

export default PhotosPage;
