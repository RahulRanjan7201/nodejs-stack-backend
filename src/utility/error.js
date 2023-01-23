module.exports = {
    errorCode(statuscode, msg) {
        let err = new Error(msg);
        err.status = parseInt(statuscode);
        return err;
    }
}