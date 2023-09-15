import { TFilm } from '../types/film';
import { TFilmDetail } from '../types/film';

export const films: TFilm[] = [
  {
    id: '1',
    name: 'Thor',
    previewImage: 'https://avatars.mds.yandex.net/get-kinopoisk-post-img/2268018/d31fe056a529b0b84ca5c696518b3cb8/960',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    genre: 'Fantasy'
  },
  {
    id: '2',
    name: 'Little Woman',
    previewImage: 'https://i.pinimg.com/236x/4f/8d/e1/4f8de1ec6a7a0b90350b3796aaa6762d.jpg',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    genre: 'Thriller'
  },
  {
    id: '3',
    name: 'Color out of Space',
    previewImage: 'https://i.pinimg.com/originals/20/58/5a/20585a955f901de5068b39ba2f4fd717.jpg',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    genre: 'Fantasy'
  },
  {
    id: '4',
    name: 'Avatar',
    previewImage: 'https://virtus-img.cdnvideo.ru/images/as-is/plain/f2/f2c72915-06f4-45f4-bacd-ae35f07e82cd.jpg@jpg',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    genre: 'Fantasy'
  },
  {
    id: '5',
    name: 'Scary Movie',
    previewImage: 'https://m.media-amazon.com/images/M/MV5BMGEzZjdjMGQtZmYzZC00N2I4LThiY2QtNWY5ZmQ3M2ExZmM4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    genre: 'Comedy'
  },
  {
    id: '6',
    name: 'Shotgun Wedding',
    previewImage: 'https://media.kg-portal.ru/movies/s/shotgunwedding/posters/shotgunwedding_1t.jpg',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    genre: 'Comedy'
  },
  {
    id: '7',
    name: 'The Cabin in the Woods',
    previewImage: 'https://ic.pics.livejournal.com/tanjand/44781189/95329322/95329322_original.jpg',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    genre: 'Horror'
  },
  {
    id: '8',
    name: 'Crash',
    previewImage: 'https://www.film.ru/sites/default/files/styles/thumb_260x400/public/movies/posters/50410659-2360786.jpeg',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    genre: 'Thriller'
  }
];

export const favoriteFilms: TFilm[] = [
  {
    id: '5',
    name: 'Scary Movie',
    previewImage: 'https://m.media-amazon.com/images/M/MV5BMGEzZjdjMGQtZmYzZC00N2I4LThiY2QtNWY5ZmQ3M2ExZmM4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    genre: 'comedy'
  },
  {
    id: '6',
    name: 'Shotgun Wedding',
    previewImage: 'https://media.kg-portal.ru/movies/s/shotgunwedding/posters/shotgunwedding_1t.jpg',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    genre: 'comedy'
  },
  {
    id: '7',
    name: 'The Cabin in the Woods',
    previewImage: 'https://ic.pics.livejournal.com/tanjand/44781189/95329322/95329322_original.jpg',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    genre: 'horror'
  },
  {
    id: '8',
    name: 'Crash',
    previewImage: 'https://www.film.ru/sites/default/files/styles/thumb_260x400/public/movies/posters/50410659-2360786.jpeg',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    genre: 'thriller'
  }
];

export const detailFilms: TFilmDetail[] = [
  {
    id: '1',
    name: 'Thor',
    posterImage: 'https://avatars.mds.yandex.net/get-kinopoisk-post-img/2268018/d31fe056a529b0b84ca5c696518b3cb8/960',
    backgroundImage: 'img/the-grand-budapest-hotel-poster.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://13.design.pages.academy/static/film/video/matrix.mp4',
    description: 'some description',
    rating: 3.4,
    scoresCount: 160757,
    director: 'David Yates',
    starring: [
      'Eddie Redmayne',
      'Katherine Waterston',
      'Dan Fogler'
    ],
    runTime: 134,
    genre: 'Fantasy',
    released: 2018,
    isFavorite: false
  },
  {
    id: '2',
    name: 'Little Woman',
    posterImage: 'https://i.pinimg.com/236x/4f/8d/e1/4f8de1ec6a7a0b90350b3796aaa6762d.jpg',
    backgroundImage: 'img/the-grand-budapest-hotel-poster.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://13.design.pages.academy/static/film/video/matrix.mp4',
    description: 'some description',
    rating: 5,
    scoresCount: 1607,
    director: 'David Yates',
    starring: [
      'Eddie Redmayne',
      'Katherine Waterston',
      'Dan Fogler'
    ],
    runTime: 134,
    genre: 'Thriller',
    released: 2017,
    isFavorite: false
  },
  {
    id: '3',
    name: 'Color out of Space',
    posterImage: 'https://i.pinimg.com/originals/20/58/5a/20585a955f901de5068b39ba2f4fd717.jpg',
    backgroundImage: 'img/the-grand-budapest-hotel-poster.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://13.design.pages.academy/static/film/video/matrix.mp4',
    description: 'some description',
    rating: 6,
    scoresCount: 160745,
    director: 'David Yates',
    starring: [
      'Eddie Redmayne',
      'Katherine Waterston',
      'Dan Fogler'
    ],
    runTime: 125,
    genre: 'Fantasy',
    released: 2012,
    isFavorite: true
  },
  {
    id: '4',
    name: 'Avatar',
    posterImage: 'https://virtus-img.cdnvideo.ru/images/as-is/plain/f2/f2c72915-06f4-45f4-bacd-ae35f07e82cd.jpg@jpg',
    backgroundImage: 'img/the-grand-budapest-hotel-poster.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://13.design.pages.academy/static/film/video/matrix.mp4',
    description: 'some description',
    rating: 10,
    scoresCount: 1745,
    director: 'David Yates',
    starring: [
      'Eddie Redmayne',
      'Katherine Waterston',
      'Dan Fogler'
    ],
    runTime: 125,
    genre: 'Fantasy',
    released: 2012,
    isFavorite: true
  },
  {
    id: '5',
    name: 'Scary Movie',
    posterImage: 'https://m.media-amazon.com/images/M/MV5BMGEzZjdjMGQtZmYzZC00N2I4LThiY2QtNWY5ZmQ3M2ExZmM4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
    backgroundImage: 'img/the-grand-budapest-hotel-poster.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://13.design.pages.academy/static/film/video/matrix.mp4',
    description: 'some description',
    rating: 7,
    scoresCount: 1045,
    director: 'David Yates',
    starring: [
      'Eddie Redmayne',
      'Katherine Waterston',
      'Dan Fogler'
    ],
    runTime: 115,
    genre: 'Comedy',
    released: 2002,
    isFavorite: false
  },
  {
    id: '6',
    name: 'Shotgun Wedding',
    posterImage: 'https://media.kg-portal.ru/movies/s/shotgunwedding/posters/shotgunwedding_1t.jpg',
    backgroundImage: 'img/the-grand-budapest-hotel-poster.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://13.design.pages.academy/static/film/video/matrix.mp4',
    description: 'some description',
    rating: 7,
    scoresCount: 1245,
    director: 'David Yates',
    starring: [
      'Eddie Redmayne',
      'Katherine Waterston',
      'Dan Fogler'
    ],
    runTime: 120,
    genre: 'Comedy',
    released: 2022,
    isFavorite: false
  },
  {
    id: '7',
    name: 'The Cabin in the Woods',
    posterImage: 'https://ic.pics.livejournal.com/tanjand/44781189/95329322/95329322_original.jpg',
    backgroundImage: 'img/the-grand-budapest-hotel-poster.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://13.design.pages.academy/static/film/video/matrix.mp4',
    description: 'some description',
    rating: 6,
    scoresCount: 1345,
    director: 'David Yates',
    starring: [
      'Eddie Redmayne',
      'Katherine Waterston',
      'Dan Fogler'
    ],
    runTime: 118,
    genre: 'Horror',
    released: 2021,
    isFavorite: true
  },
  {
    id: '8',
    name: 'Crash',
    posterImage: 'https://www.film.ru/sites/default/files/styles/thumb_260x400/public/movies/posters/50410659-2360786.jpeg',
    backgroundImage: 'img/the-grand-budapest-hotel-poster.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://13.design.pages.academy/static/film/video/matrix.mp4',
    description: 'some description',
    rating: 8,
    scoresCount: 1345,
    director: 'David Yates',
    starring: [
      'Eddie Redmayne',
      'Katherine Waterston',
      'Dan Fogler'
    ],
    runTime: 108,
    genre: 'Horror',
    released: 2021,
    isFavorite: true
  }
];

export const similarFilms: TFilm[] = [
  {
    id: '1',
    name: 'Thor',
    previewImage: 'https://avatars.mds.yandex.net/get-kinopoisk-post-img/2268018/d31fe056a529b0b84ca5c696518b3cb8/960',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    genre: 'Fantasy'
  },
  {
    id: '2',
    name: 'Little Woman',
    previewImage: 'https://i.pinimg.com/236x/4f/8d/e1/4f8de1ec6a7a0b90350b3796aaa6762d.jpg',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    genre: 'Thriller'
  },
  {
    id: '3',
    name: 'Color out of Space',
    previewImage: 'https://i.pinimg.com/originals/20/58/5a/20585a955f901de5068b39ba2f4fd717.jpg',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    genre: 'Fantasy'
  },
  {
    id: '4',
    name: 'Avatar',
    previewImage: 'https://virtus-img.cdnvideo.ru/images/as-is/plain/f2/f2c72915-06f4-45f4-bacd-ae35f07e82cd.jpg@jpg',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    genre: 'Fantasy'
  }
];
