import axios from "axios";

export class ImageAPI {

    static getImage = async (url) => {
        const res = await axios.get(url, { responseType: 'arraybuffer' });
        let data = `data:${res.headers["content-type"]};base64,${Buffer.from(res.data, "binary").toString("base64")}`;
        return data;
    }
}
