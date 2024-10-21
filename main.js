import { renderCategories } from "./src/services/categories";
import { handleSearchProductByName } from "./src/services/searchBar";
import { openModal } from "./src/views/modal";
import { handleGetProductsToStore } from "./src/views/store";
import "./style.css";

//APLICATION 
export let categoriaActiva = null;
export const setCategoriaActiva = (categoriaIn) => {
    categoriaActiva = categoriaIn;
};

export let productoActivo = null;
export const setproductoActivo = (productoIn) => {
    productoActivo = productoIn;
};

handleGetProductsToStore();
renderCategories();

// //HEADER
const buttonAdd = document.getElementById("ButtonAddElement");
    buttonAdd.addEventListener("click", () => {
    openModal();
});

//buttonSearch

const buttonSearch = document.getElementById("ButtonSearch");
buttonSearch.addEventListener("click", () => {
    handleSearchProductByName();

});
