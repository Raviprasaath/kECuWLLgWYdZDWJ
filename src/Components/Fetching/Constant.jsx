export const GET_PRODUCT_LIST = "api/v1/ecommerce/clothes/products";

export const GET_VARIETY_LIST = (title, search_term) => {    
    return `api/v1/ecommerce/clothes/products?search={"${title}":"${search_term}"}`;
}

export const methods = {
    GET: "GET",
    POST: "POST"
}


