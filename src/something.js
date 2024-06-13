// Add user who want to enable gitStream to this list.

const gitstreamUsers = ["user1", "user2"];
/**
 * @description Returns true if the username that is passed to this function is specified in a predefined list of users. 
 * This is useful if you want gitStream automations to run only for specified users.
 * @param {string} username - The GitHub username to check.
 * @returns {boolean} Returns true if the user is specified in the gitstreamUsers list, otherwise false.
 * @example {{ pr.author | isGitStreamUser }}
 */
function isGitstreamUser(username) {
    if (containsString(gitstreamUsers, username)) {
        return true;
    } else {
        return false;
    }
};

function containsString(arr, str) {
    return arr.includes(str);
};

module.exports = isGitstreamUser;

