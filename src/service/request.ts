import Taro from '@tarojs/taro';

let baseUrl = 'https://wxapp.morcat.cn';
baseUrl = 'http://192.168.1.10:8099';

export default (options = {
        method: 'GET',
        data: {}
    }) => {
        return Taro.request({
            url: baseUrl + options.url,
            data: {
                ...options.data,
            },
            header: {
                'Content-Type': 'application/json',
            },
            method: options.method.toUpperCase(),
        }).then(res => {
            const {
                statusCode,
                data
            } = res;
            if (statusCode >= 200 && statusCode < 300) {
                if (data.status !== 'ok') {
                    Taro.showToast({
                        title: `${res.data.error.message}~` || res.data.error.code,
                        icon: 'none',
                        mask: true,
                    });
                }
                return data;
            } else {
                throw new Error(`网络请求错误，状态码${statusCode}`);
            }
    });
};