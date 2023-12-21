const gitstreamUsers = ["BenLloydPearson", "user2"];

function users(username) {
    if (containsString(gitstreamUsers, username)) {
        return true;
    } else {
        return false;
    }
};

module.exports = users;
