export function sumMusics(album){
    return album.reduce(function(prev, current) {
        return prev + current.musics
      }, 0);
}
