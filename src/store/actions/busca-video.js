import youtubeSearch from 'youtube-api-v3-search'
import YTApi from './../../api'
// import {dispatch} from 'rxjs/internal/observable/range';
// import API_KEY from '../../api'
const API_KEY = YTApi

//busca video 
//inicia bucas
    // ...retorne a lista de vídeos
    // ...retorne o erro

export const buscaVideoInicio = () => {
    return{
        type: 'BUSCA_VIDEO_INICIO',
        carregando: true,
        erro: false
    }
}

export const buscaVideo = (termo) => {
    return dispatch => {
        dispatch(buscaVideoInicio())
        youtubeSearch(API_KEY,{q:termo})
            .then((data) => dispatch(buscaVideoSucesso(data.items)))
            .catch((data) => dispatch(buscaVideoErro()))
    }
}

export const buscaVideoSucesso = (videos) => {
    return {
        type: 'BUSCA_VIDEO_SUCESSO',
        videos,
        carregando: false,
        erro: false
    }
}

export const buscaVideoErro = () => {
    return {
        type:'BUSCA_VIDEO_ERRO',
        carregando: false,
        erro: true
    }
}