import {API} from "./index";

export const getCategoriesApi = async () => {
    return await API.get('/categories');
}