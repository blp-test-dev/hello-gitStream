const flaggedUsers = ["user1", "user2"];
/**
 * @module isFlaggedUser
 * @description Returns true if the username that is passed to this function is specified in a predefined list of users. 
 * This is useful if you want gitStream automations to run only for specified users.
 * @license MIT
 */
function isFlaggedUser(username) {
    if (flaggedUsers.includes(username)) {
        return true;
    } else {
        return false;
    }
};

module.exports = isFlaggedUser;
