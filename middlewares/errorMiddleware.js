const errorMiddleware = (err, req, res, next)=> {
    console.log("Error occurred in middleware");
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

    res.status(statusCode).json({
        message: err.message,
        stack: process.env.NODE_ENV === 'development' ? err.stack :undefined,
    })
}

module.exports = errorMiddleware;