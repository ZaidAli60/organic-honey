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