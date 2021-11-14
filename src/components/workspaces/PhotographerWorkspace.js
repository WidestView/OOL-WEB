import { useState } from "react";
import NavigationLayout from "../layouts/NavigationLayout"
import Gender from "../../util/Gender";

const PhotographerWorkspace = ({employee}) => {

    const [view, setView] = useState("Default");

    const ViewsDict = {};
    ViewsDict["Default"] = <DefaultView employee={employee} setView={setView}/>;
    ViewsDict["Calendar"] = <CalendarView employee={employee}/>;

    return (
        <NavigationLayout home={view==="Default"} onClick={() => setView("Default")}>
            {ViewsDict[view]}
        </NavigationLayout>
    );
}

const DefaultView = ({employee, setView}) => {
    return ( 
        <div>
            <h1>{new Gender(employee.gender).Greeting}</h1>
            <button className="btn btn-link" onClick={()=> setView("Calendar")}>
                Ver calendário
            </button>
        </div>
    );
}

const CalendarView = ({employee}) => {
    return ( 
        <div>
            <h1>Seu calendário!</h1>
        </div>
    );
}

export default PhotographerWorkspace;