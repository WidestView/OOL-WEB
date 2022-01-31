import { useHistory } from "react-router";
import Swal from "sweetalert2";

const ErrorPopup = ({error}) => {
    
    const history = useHistory();

    const handleGoBack = () => {
        history.goBack();
    }

    console.error(error);

    Swal.fire({
        title: 'Algo deu errado...',
        text: 'Não temos certeza do que rolou',
        icon: 'error',
        confirmButtonText: 'Ok :('
    }).then(handleGoBack);

    return null;
}
 
export default ErrorPopup;