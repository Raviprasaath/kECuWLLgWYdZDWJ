import { methods, GET_PRODUCT_LIST, GET_VARIETY_LIST } from "./Constant";

const BASE_URL = "https://academics.newtonschool.co/";
const PROJECT_ID = "vflsmb93q9oc";
const LIMIT = 100;

const Header = { projectID: PROJECT_ID };

export const generalService = async (apiUrl, method, limit = LIMIT, limitSymbol = "?") => {
    const fetching = await fetch(`${BASE_URL}${apiUrl}${limitSymbol}limit=${limit}`, { headers: Header, method: method });
    const response = await fetching.json();
    return response;
}

export const getProductList = () => {
    return generalService(GET_PRODUCT_LIST, methods.GET);
}

export const getTypesOfClothsList = (title, search_term, limit = LIMIT) => {
    const apiUrl = GET_VARIETY_LIST(title, search_term);
    return generalService(apiUrl, methods.GET, limit, "&");
}

