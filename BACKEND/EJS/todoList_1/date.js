
exports.getDate=function (){
    const today = new Date();
    const option = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    return today.toLocaleTimeString("en-US", option);
}
exports.getDay=function (){
    const today = new Date();
    const option = {
        weekday: "long"
    }
    return today.toLocaleTimeString("en-US", option);
}
