const myFunction = async (params, callback) => {
    const message = {
        text: "Hello World!",
    };
    const error = null;
    return callback(error, message.text); 
};

module.exports = {
    async: true,
    filter: asyncTest,
}
