import { useState } from "react";
import { useParams } from "react-router-dom";
import PackageAPI from "../../api/PackageAPI";
import FormLayout from "../../components/layouts/FormLayout";
import InputField from "../../components/layouts/form_fields/InputField";
import NavigationLayout from "../../components/layouts/NavigationLayout";

const PackageView = () => {

    const { id } = useParams();
    const [pack, setPack] = useState();
    
    return (
        <div className="container">
            <NavigationLayout>
                <FormLayout api={PackageAPI} id={id} data={pack} setData={setPack}>
                        <div className="form-row">
                            <InputField name="Name" type="text" displayName="Nome" placeholder="O nome do pacote" required className="col-5" defaultValue={pack !== undefined? pack.name : undefined} />
                        </div>
                </FormLayout>
            </NavigationLayout>
        </div>
    );
}

export default PackageView;