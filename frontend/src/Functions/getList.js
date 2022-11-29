import axios from "axios";
const getList = async () => {
    try {
        const data = await axios.get("/getItems");
        return data;
    } catch (error) {
         return error;
    }
}
export default getList;