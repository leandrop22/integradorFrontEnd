//POPUP 

import { productoActivo, setproductoActivo } from "../../main";
import { handleDeleteProduct, handleSaveOrModifyElements } from "../services/product";


const buttonAccept = document.getElementById("acceptButton");
buttonAccept.addEventListener("click", () => {
    handleSaveOrModifyElements();
});

const cancelButton = document.getElementById("cancelButton");
cancelButton.addEventListener("click", () => {
    closeModal();
});



//FUNCIONES ABRIR - CERRAR MODAL
export const openModal = () => {
    const modal = document.getElementById("modalPopUP");
    modal.style.display = "flex";

    const buttonDelete = document.getElementById("deletebutton");
    if (productoActivo) {
         buttonDelete.style.display = "block";
    } else {
         buttonDelete.style.display = "none";

    }

    if(productoActivo) {
      const nombre = document.getElementById("nombre"),
            imagen = document.getElementById("img"),
            precio = document.getElementById("precio"),
            categories = document.getElementById("categoria");
        imagen.value = productoActivo.imagen;
        precio.value = productoActivo.precio;
        nombre.value = productoActivo.nombre;
        categories.value = productoActivo.categories;
    };
};

export const closeModal = () => {
    const modal = document.getElementById("modalPopUP");
    modal.style.display = "none";
    resetModal();
    setproductoActivo(null);
    
};

const resetModal = () => {
    const nombre = document.getElementById("nombre"),
        imagen = document.getElementById("img"),
        precio = document.getElementById("precio"),
        categories = document.getElementById("categoria");
    imagen.value = "";
    categories.value = "Seleccione una categoria";
    precio.value = 0;
    nombre.value = "";
};
//eliminar producto
const deleteButton = document.getElementById("deletebutton");
    deleteButton.addEventListener("click", () => {
        handlebuttonDelete();
})
const handlebuttonDelete = () => {
        handleDeleteProduct();
};