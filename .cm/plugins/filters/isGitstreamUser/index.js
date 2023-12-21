// Add user who want to enable gitStream to this list.
const gitstreamUsers = ["user1", "user2"];

function containsString(arr, str) {
    return arr.includes(str);
}

function isGitStreamUser(username) {
    if (containsString(gitstreamUsers, username)) {
        return true;
    } else {
        return false;
    }
};

module.exports = isGitStreamUser;
