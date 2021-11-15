import { useHistory } from "react-router-dom";

const NavigationLayout = (props) => {

    const history = useHistory();

    const handleGoBack = () => {
        history.goBack();
    }

    return ( 
        <div>
            {!props.home && <button onClick={props.onClick?? handleGoBack} type="button" className="btn btn-link text-decoration-none pl-0 mt-2"><i className="bi bi-chevron-left"></i> Voltar</button>}
            {props.children}
        </div> 
    );
}
 
export default NavigationLayout;