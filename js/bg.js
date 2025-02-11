const preloadImages = [
    "../images/b-main.jpg",
    "../images/z.jpg",
    "../images/b-movies.jpg",
    "../images/b-music.jpg",
    "../images/b-games.jpg"
  ];
  
  preloadImages.forEach((src) => {
    const img = new Image();
    img.src = src;
  });