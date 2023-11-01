const express = require("express");

const router = express.Router();

router.get("/", (req, rsp) => {
    rsp.end("Done")
});

router.use((req, rsp, next) => {
    const error = new Error("Page Not Found !");
    error.status = 404;
    next(error);
});

router.use((error, req, rsp, next) => {
    rsp.status(error.status || 500);
    rsp.end(error.message);
});

module.exports = router;