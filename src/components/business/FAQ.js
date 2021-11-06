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
            <div className="row mx-auto d-flex justify-content-center mt-5 col-12 mb-5"><h1 className="col text-center font-weight-bold" style={{fontFamily: "'Titillium Web', sans-serif"}}>Perguntas Frequentes</h1></div>
            
            {Array.isArray(items) &&
                items.map((item, index)=>(
                    <div className="row pointer" onClick={()=>setopened(index===opened? -1 : index)} key={index}>
                        <div className="col-12 d-flex justify-content-between align-items-center px-5">
                            <div><h4 className="d-inline text-primary">{index+1}. </h4><h4 className="d-inline" style={{fontFamily: "'Titillium Web', sans-serif"}}>{item.question}</h4></div>
                            <h4 className={`bi bi-chevron-${index === opened? "up" : "down"} text-secondary font-weight-bold`}> </h4>
                        </div>
                        {index === opened &&
                            <div className="col-12 mt-3 mt-lg-1 d-flex justify-content-between align-items-center px-5 text-muted">
                                <h5 className="" style={{fontFamily: "'Titillium Web', sans-serif"}}>{item.answer}</h5>
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