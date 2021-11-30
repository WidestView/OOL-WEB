import { useParams } from "react-router-dom";
import PackageAPI from "../../api/PackageAPI";
import NavigationLayout from "../../components/layouts/NavigationLayout";
import PageFormLayout from "../../components/layouts/PageFormLayout";

const PackageView = () => {

    const { id } = useParams();

    return (
        <div className="container">
            <NavigationLayout>
                    <PageFormLayout 
                        title="Pacote"
                        icon="box"
                        api={PackageAPI}
                        id={id}
                        successMessage="Seu pacote está lindo 🤩" 
                        editable={true} />
            </NavigationLayout>
        </div>
    );
}

export default PackageView;