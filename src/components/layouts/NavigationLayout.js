const NavigationLayout = (props) => {
    return ( 
        <div>
            <button onClick={props.onClick} type="button" className="btn btn-link text-decoration-none pl-0 mt-2"><i className="bi bi-chevron-left"></i> Voltar</button>
            {props.children}
        </div> 
    );
}
 
export default NavigationLayout;