import useJwt from "../jwt/useJwt";

export const getBooks = () => {
    return useJwt().get("/books/");
}
export const getBook = (id) => {
    return useJwt().get(`/books/${id}/`);
}
export const createBook = (data) => {
    return useJwt().post("/books/", data);
}
export const updateBook = (id, data) => {
    return useJwt().put(`/books/${id}/`, data);
}
