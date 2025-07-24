import { message } from "antd";
import dayjs from "dayjs";

window.links = {
    phone: "tel:+92",
    whatsapp: "",
    location: "",
    facebook: "",
    instagram: "",
    linkedin: "",
    youtube: "",
    github: "",
}

window.api = process.env.REACT_APP_API_END_POINT
window.dateFormat = (date, format = "DD-MM-YYYY") => dayjs(date).format(format)

window.today = dayjs(new Date()).format("DD-MM-YYYY")
window.month = dayjs(new Date()).format("MM-YYYY")
window.year = new Date().getFullYear()

message.config({ maxCount: 3 })
window.toastify = (msg, type) => {
    switch (type) {
        case "success": message.success(msg); break;
        case "error": message.error(msg); break;
        case "warning": message.warning(msg); break;
        default: message.info(msg)
    }
}