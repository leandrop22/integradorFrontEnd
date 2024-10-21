//PRODUCT

import Swal from "sweetalert2";
import { productoActivo } from "../../main";
import { handleGetProductLocalStorage, setInLocalStorage } from "../persistence/localStorage";
import { closeModal } from "../views/modal";
import { handleGetProductsToStore, handleRenderList } from "../views/store";
//guardamos
export const handleSaveOrModifyElements = () => {

    //funcion guardar
    const nombre = document.getElementById("nombre").value,
        imagen = document.getElementById("img").value,
        precio = document.getElementById("precio").value,
        categories = document.getElementById("categoria").value;
    let object = null;

    if (productoActivo) {
        object = {
            ...productoActivo,
            nombre,
            imagen,
            precio,
            categories,
        };
    }else {
        object = {
            id: new Date().toISOString(),
            nombre,
            imagen,
            precio,
            categories,
        };
        console.log(object);
    };

    Swal.fire({
        title: "Buen trabajo!",
        text: "El elemento fue añadido correctamente!",
        icon: "success"
    });
    
    setInLocalStorage(object);
    handleGetProductsToStore();
    closeModal();
};
//eliminar producto
export const handleDeleteProduct = () => {

    Swal.fire({
        title: "¿Seguro que quieres eliminarlo?",
        text: "No podrás recuperarlo!",
        icon: "warning!",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, Eliminalo!"
        }).then((result) => {
        if (result.isConfirmed) {
            const products = handleGetProductLocalStorage();
            const result = products.filter((el) => el.id !== productoActivo.id);
            localStorage.setItem("products", JSON.stringify(result));
            const newProducts = handleGetProductLocalStorage();
            handleRenderList(newProducts);
            closeModal();
        } else {
            closeModal();
        }
    });

};