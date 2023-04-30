import {API} from "./index";

export const getProductsByCategoryIdApi = async (categoryId = null) => {
    if (categoryId)
        return await API.get('/products?categoryId=' + categoryId);
    return await API.get('/products');
}