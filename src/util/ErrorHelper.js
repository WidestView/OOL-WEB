import Swal from "sweetalert2";

export const swalError = (error, handleGoBack) => {
    Swal.fire({
        title: 'Algo deu errado...',
        text: error?? 'Não temos certeza do que rolou',
        icon: 'error',
        confirmButtonText: 'Ok :('
    }).then(handleGoBack === undefined? ()=>{} : handleGoBack);
}