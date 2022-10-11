import { Album } from 'Shared/Types/Album';
import { Photo } from 'Shared/Types/Photo';

export const getMappedAlbumsWithThumbnail = (albums: Album[], photos: Photo[]) => {
  const thumbnailByAlbumId: Record<string, string> = {};

  for (let photoIdx = 0; photoIdx < photos.length; photoIdx += 50) {
    thumbnailByAlbumId[photos[photoIdx].albumId] = photos[photoIdx].thumbnailUrl;
  }

  return albums.map((album: Album) => ({ ...album, thumbnailUrl: thumbnailByAlbumId[album.id] }));
};

export const getSelectedAlbumPhotos = (photos: Photo[], albumId: number) => {
  return photos.filter((photo: Photo) => photo.albumId === albumId);
};
