const gitstreamUsers = ["BenLloydPearson", "user2"];

function containsString(arr, str) {
    return arr.includes(str);
}

function users(username) {
    if (containsString(gitstreamUsers, username)) {
        return true;
    } else {
        return false;
    }
};

module.exports = users;
