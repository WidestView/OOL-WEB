import { Link } from "react-router-dom";

const ChoicesGrid = ({choices, small = false}) => {
    return ( 
        <div className={`choices-grid row`}>
            {
                choices.map((choice, index) => (
                    <Link className={`choice col-${small? "4" : "3"} d-flex justify-content-center align-items-cente bg-white shadow-sm rounded text-reset text-decoration-none m-3`} title={choice.name} to={choice.uri} key={index}>
                        { small && 
                            <div className="choice-id d-block text-center pb-3 pt-3">
                                <i className={`bi bi-${choice.icon} h1 text-primary mt-n3`}></i>
                                <h6 className="mt-2">{choice.name}</h6>
                            </div>
                        }
                        { !small && 
                            <div className="choice-id d-block text-center py-4">
                                <i className={`bi bi-${choice.icon} display-4 text-primary mt-n3`}></i>
                                <h5 className="mt-2">{choice.name}</h5>
                            </div>
                        }
                    </Link>
                ))
            }
        </div> );
}
 
export default ChoicesGrid;