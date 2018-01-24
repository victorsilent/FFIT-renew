import { data } from './data';

export default {
    getAllBands(){
        return data;
    },
    getAllAlbums(){
        let albums = [];
        data.map((band) => {
            return band.albums.map((album) => {
                albums.push({
                    ...album,
                    bandName: band.name
                });
            }
        )});
        return albums;
    },
    getBandInfo(id){
        return data.filter((band) => {
            return band.id == id ? true : false;
        });
    },
    getAlbumById(id){
        let albumFiltered = [];
        data.map((band) => {
            return band.albums.filter((album) => {
                album.id == id ? albumFiltered.push({...album, bandName: band.name}) : false
            });
        }).filter(band => band.length > 0)
        return albumFiltered;
    },
}