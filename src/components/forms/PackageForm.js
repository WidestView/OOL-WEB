import PageFormLayout from "../layouts/PageFormLayout";

const PackageForm = ({CRUD}) => {

    switch (CRUD){
        case "CREATE": return Create();
        case "READ": return Read();
        case "UPDATE": return Update();
        default: return Read();
    }
}

const Create = ()=> {
    return ( 
        <PageFormLayout 
            title="Criar pacote" icon="box"
            onSubmit={()=> {console.log("SUBMITTED");}}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
        </PageFormLayout>
    );
}

const Read = ()=> {
    return ( 
        <PageFormLayout 
            title="READ PACKAGE" icon="box">
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
        </PageFormLayout>
    );
}

const Update = ()=> {
    return ( 
        <PageFormLayout 
            title="UPDATE PACKAGE" icon="box"
            onSubmit={()=> {console.log("SUBMITTED");}}>
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
        </PageFormLayout>
    );
}
 
export default PackageForm;