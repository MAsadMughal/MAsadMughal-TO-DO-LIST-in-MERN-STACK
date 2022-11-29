import axios from "axios";
import Notification from "../components/Notifications/Notification";
const addNewItem = async (title, task, switchLoad) => {
    try {
        const config = { Headers: { "Content-Type": "application/json" } }
        if (!title || !task) {
            Notification("Error", "Enter Complete Details", "danger");
        } else {
            switchLoad(true);
            const addItem = await axios.post(`/createItem`, { title, task }, config);
            switchLoad(false);
            Notification("Success", `Added A new Task with title "${addItem.data.newItem.title}"`, "success");
        }
    } catch (error) {
        switchLoad(false);
        console.log(error);
        Notification("Error", error, "danger");
    }
}
export default addNewItem;