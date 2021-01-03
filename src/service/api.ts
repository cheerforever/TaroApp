import Request from './request';

export const getUserInfo = data => {
    Request({
        url: '/api/login',
        method: 'POST',
        data,
    });
}
