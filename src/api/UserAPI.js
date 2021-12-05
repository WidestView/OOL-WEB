import axios from "axios";
import { isDev } from "../util/Env";

class UserAPI {

    static get = async (id) => {

        if (id) {
            let res = await axios.get(`YET TO IMPLEMENT`);
            let user = res.data;
            if(user && isDev()){
                console.info("USER INFO:");
                console.info(user);
            }
            return user;
        }

        let res = await axios.get(`YET TO IMPLEMENT`);
        let user = res.data;
        if(user && isDev()){
            console.info("USERS INFO:");
            console.info(user);
        }
        return user;
    }

    static getSessionUser = async () => {
        let res = await axios.get(`${process.env.REACT_APP_API_URL}/api/user/greet`);
        let user = res.data;
        if(user && isDev()){
            console.info("USER INFO:");
            console.info(user);
        }
        return user;
    }

    static post = async (newUser) => {
        let res = await axios.post(`${process.env.REACT_APP_API_URL}/api/user`, newUser);
        let user = res.data;
        if(user && isDev()){
            console.info("USER CREATED INFO:");
            console.info(user);
        }
        return user;
    }

    static put = async (id, newUser) => {
        let res = await axios.put(`YET TO IMPLEMENT`, newUser);
        let user = res.data;
        if(user && isDev()){
            console.info("USER UPDATED INFO:");
            console.info(user);
        }
        return user;
    }

    static isEmployee = (user) => (user.kind === "employee");

    static getFormStruct = () => [
        [
            { 
                name: "Cpf", 
                value: null, 
                displayName: "CPF", 
                type: "text", 
                placeholder: "O seu cpf", 
                help: null, 
                required: true,
                colSize: null
            },
            { 
                name: "Name", 
                value: null, 
                displayName: "Nome", 
                type: "text", 
                placeholder: "O seu nome", 
                help: null, 
                required: true,
                colSize: null
            },
            { 
                name: "SocialName", 
                value: null, 
                displayName: "Nome social*", 
                type: "text", 
                placeholder: "Seu nome social*", 
                help: null, 
                required: false,
                colSize: null
            },
            { 
                name: "BirthDate", 
                value: null, 
                displayName: "Data de Nascimento", 
                type: "date", 
                placeholder: "Sua data de nascimento", 
                help: null, 
                required: true,
                colSize: null
            },
            { 
                name: "Phone", 
                value: null, 
                displayName: "Telefone Celular", 
                type: "text", 
                placeholder: "Seu telefone celular", 
                help: null, 
                required: true,
                colSize: null
            },
            { 
                name: "Email", 
                value: null, 
                displayName: "Email", 
                type: "email", 
                placeholder: "Seu email", 
                help: null, 
                required: true,
                colSize: null
            },
            { 
                name: "Password", 
                value: null, 
                displayName: "Senha", 
                type: "password", 
                placeholder: "Sua senha", 
                help: null, 
                required: true,
                colSize: null
            }
        ]     
    ]
}

export default UserAPI;