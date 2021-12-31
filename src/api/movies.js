import request from '@/utils/request';

export function getMovies(params) {
    return request({
        url: 'discover/movie',
        method: 'get',
        params
    })
}

export function getGenres(params) {
    return request({
        url: 'genre/movie/list',
        method: 'get',
        params
    })
}

export function getMovieDetails(id, params) {
    return request({
        url: 'movie/' + id,
        method: 'get',
        params
    })
}

export function getCredits(id, params) {
    return request({
        url: 'movie/' + id + '/credits',
        method: 'get',
        params
    })
}