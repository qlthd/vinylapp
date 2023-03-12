import axios from 'axios';

export async function post<T>(url: string, data: any): Promise<T> {
    const instance = axios.create({
        baseURL: 'http://localhost:3002/'
    });
    return instance.post(url, data);
}