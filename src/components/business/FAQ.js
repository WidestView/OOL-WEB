import { useState } from "react";

const FAQ = () => {

    const [opened, setopened] = useState(-1);

    const items = [
        {question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
        {question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
        {question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
    ]

    return ( 
        <div className="container">
            <div className="row mx-auto d-flex justify-content-center mt-5 col-12 mb-5"><h1 className="col text-center">Perguntas Frequentes</h1></div>
            
            {Array.isArray(items) &&
                items.map((item, index)=>(
                    <div className="row pointer" onClick={()=>setopened(index===opened? -1 : index)} key={index}>
                        <div className="col-12 d-flex justify-content-between align-items-center px-5">
                            <div><h3 className="d-inline text-primary">{index+1}. </h3><h3 className="d-inline">{item.question}</h3></div>
                            <h3 className={`bi bi-chevron-${index === opened? "up" : "down"} text-secondary font-weight-bold`}> </h3>
                        </div>
                        {index === opened &&
                            <div className="col-12 mt-3 mt-lg-1 d-flex justify-content-between align-items-center px-5 text-muted">
                                <h4 className="">{item.answer}</h4>
                            </div>
                        }
                        {!(items.length-1 === index) && <hr className="w-100"/>}
                    </div>
                ))}
            
            {Array.isArray(items) && items.length===0 && 
                <div className="row d-flex justify-content-center mt-5 col-12 mb-5"><h4 className="col text-center text-danger">Não há perguntas frequentes!</h4></div>
            }

        </div>
     );
}
 
export default FAQ;