function createResponse(error,something) {
    const result ={};
    if(error){
        result["error"] = error;
        result["status"] = "error";
    }
    else {
        result["data"] = something;
        result["status"] = "success";
    }
    return result;
}
module.exports = { createResponse : createResponse};