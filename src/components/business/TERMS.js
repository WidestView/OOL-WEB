import personal from "../../assets/svgs/business/personal_data.svg";

const TERMS = () => {
    return ( <div>
        <h1 className="text-center mb-5">Termos de serviço</h1>
        <p>
            Consequat culpa commodo pariatur consequat est laboris occaecat. Non in adipisicing cillum id veniam aute fugiat. Incididunt est est proident consequat in eu anim sint eiusmod id voluptate. Nostrud reprehenderit fugiat adipisicing fugiat aliqua. Consequat ullamco deserunt nostrud id id ad cillum deserunt nisi incididunt aliquip. Non tempor nulla Lorem sint mollit consectetur et eu ea dolore magna irure esse.
        </p>
        <div className="row">
            <div className="col-12 col-lg-8 d-flex">
                <div className="mb-auto">
                    <p>Consectetur magna aliquip veniam cillum veniam esse laboris nisi magna. In dolore quis tempor do ullamco. Id cillum dolore exercitation veniam anim ipsum consectetur irure. Dolore ut ipsum est excepteur minim velit incididunt Lorem aliqua ex do.</p>
                    <p>Proident eiusmod consequat nulla commodo et nisi consectetur quis enim irure adipisicing commodo. Duis cupidatat cillum irure in commodo. Voluptate mollit nostrud ad non eiusmod in id eiusmod anim mollit deserunt. Et aute aute veniam eu consectetur consequat dolore elit tempor ad sunt aute. Adipisicing dolor ex enim tempor voluptate. Nulla ex cupidatat qui culpa.</p>
                </div>
            </div>
            <div className="col-12 col-lg-4 d-flex justify-content-center">
                <img src={personal} className="w-75" alt="That's important stuff!!"/>
            </div>
        </div>
    </div> );
}
 
export default TERMS;