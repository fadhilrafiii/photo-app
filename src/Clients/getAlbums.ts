import { Album } from 'Shared/Types/Album';

export const getAlbums = async (): Promise<Album[] | undefined> => {
  try {
    const url = 'https://jsonplaceholder.typicode.com/albums?_page=1&_limit=10';
    const result = await fetch(url);

    return result.json();
  } catch (error) {
    console.log(error);
  }
};
