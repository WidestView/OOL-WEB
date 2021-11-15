import Swal from "sweetalert2";

const ErrorPopup = ({error}) => {
    
    console.error(error);

    Swal.fire({
        title: 'Algo deu errado...',
        text: 'Não temos certeza do que rolou',
        icon: 'error',
        confirmButtonText: 'Ok :('
    });

    return;
}
 
export default ErrorPopup;