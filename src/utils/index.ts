// 导入 axios
import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

// 设置基本的URL
const baseURL = ''; // 你的基本URL

// 创建 Axios 实例
const $http: AxiosInstance = axios.create({
    baseURL,
});

// 定义 post 函数
export const post = async <T = any>(url: string, data?: any): Promise<T> => {
    try {
        const response: AxiosResponse<T> = await $http.post(url, data);
        return response.data;
    } catch (error) {
        // @ts-ignore
        throw handleAxiosError(error);
    }
};

// 处理 Axios 错误的辅助函数
const handleAxiosError = (error: AxiosError) => {
    if (error.response) {
        // 请求已发出，但服务器响应状态码不在 2xx 范围内
        return error.response.data;
    } else if (error.request) {
        // 请求已发出，但没有收到响应
        return '请求无响应';
    } else {
        // 设置请求时触发错误
        return '请求发生错误';
    }
};
