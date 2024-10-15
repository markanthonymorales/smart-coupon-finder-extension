import { db } from "./db";
import axios from 'axios';

export default async function getCoupons(link: string): Promise<any> {
    if(link === '') {
        return '';
    }

    let response: any = await axios.get(link);
    if(!response) {
        return '';
    }

    return response.data;
};
