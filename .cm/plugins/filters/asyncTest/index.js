const asyncTest = async (params, callback) => {
  const message = {
    text: "Hello World!",
  };
  const error = null;
  return callback(error, message); 
};

module.exports = {
   async: true,
   filter: asyncTest,
   return: callback(asyncTest)
}
