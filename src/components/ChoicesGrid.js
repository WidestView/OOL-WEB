import { Link } from "react-router-dom";

const ChoicesGrid = ({choices, small=false}) => {
    return ( 
        <div className={`choices-grid${small? "-small": ""}`}>
            {
                choices.map(choice => (
                    <Link className="choice d-flex justify-content-center align-items-center shadow rounded text-reset text-decoration-none" title={choice.name} to={choice.uri} key={choice.uri}>
                        <div className="choice-id d-block text-center">
                            <i className={`bi bi-${choice.icon} choice-icon`}></i>
                            { small && <h6>{choice.name}</h6>}
                            { !small && <h3>{choice.name}</h3>}
                        </div>
                    </Link>
                ))
            }
        </div> );
}
 
export default ChoicesGrid;