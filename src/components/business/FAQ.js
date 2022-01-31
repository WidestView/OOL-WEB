import { useState } from "react";

const FAQ = () => {

    const [opened, setopened] = useState(-1);

    const items = [
        {question: "Quais tipos de fotos a empresa cobre?", answer: "A Out Of Lens cobre uma extensa variedade de pacotes para as mais diversas situações: eventos de diferentes portes, ensaios individuais e em grupo, registro de acervos artísticos e mais. Confira nossa seção de pacotes na página inicial!"},
        {question: "Quantas fotos vocês entregam?", answer: "A quantidade de fotos depende do pedido realizado, sendo esse customizável e sujeito a alterações de acordo com a vontade do usuário."},
        {question: "Vocês fazem ensaios fora de estúdio?", answer: "Sim! A locação do estúdio é opcional, sendo possível a negociação do cenário de registro entre o próprio usuário e fotógrafo, através do contato disponibilizado. É importante salientar que a necessidade de transporte de longas distâncias por parte dos profissionais pode encarecer o produto final."},
        {question: "O que exatamente está incluso no preço dos pacotes?", answer: "Os números de profissionais envolvidos e de equipamentos utilizados, bem como a logística e gestão necessárias para o cumprimento do combinado, estão sujeitos a aumento de acordo com o porte do pacote. Por isso, o valor deles varia com a magnitude do serviço contratado."}
    ]

    return ( 
        <div className="container">
            <div className="row mx-auto d-flex justify-content-center mt-5 col-12 mb-5"><h2 className="col text-center font-weight-bold text-titillium">Perguntas Frequentes</h2></div>
            
            {Array.isArray(items) &&
                items.map((item, index)=>(
                    <div className="row pointer" onClick={()=>setopened(index===opened? -1 : index)} key={index}>
                        <div className="col-12 d-flex justify-content-between align-items-center px-5">
                            <div><h4 className="d-inline text-primary">{index+1}. </h4><h4 className="d-inline text-titillium">{item.question}</h4></div>
                            <h4 className={`bi bi-chevron-${index === opened? "up" : "down"} text-secondary font-weight-bold`}> </h4>
                        </div>
                        {index === opened &&
                            <div className="col-12 mt-3 mt-lg-1 d-flex justify-content-between align-items-center px-5 text-muted">
                                <h5 className="text-titillium">{item.answer}</h5>
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