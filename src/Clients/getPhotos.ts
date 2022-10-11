import { Photo } from 'Shared/Types/Photo';

export const getPhotos = async (): Promise<Photo[] | undefined> => {
  // Only get Album 1 - 10
  try {
    const url = 'https://jsonplaceholder.typicode.com/photos?_page=1&_limit=500';
    const result = await fetch(url);

    return result.json();
  } catch (error) {
    console.log(error);
  }
};
