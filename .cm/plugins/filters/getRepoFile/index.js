const { Octokit } = require("@octokit/rest");

/**
 * @module getRepoFile
 * @description 
 * @param {string} Input - 
 * @returns {boolean} 
 * @example 
 * @license MIT
 */

const getRepoFile = async (repo, path, auth, callback) => {
    error = null;
    authString = String(auth);
    console.log (repo.owner, repo.name, path, authString)
    const octokit = new Octokit({
        request: { fetch },
        auth: authString,
    });

    const res = await octokit.repos.getContent({
        owner: repo.owner,
        repo: repo.name,
        path
    });

    return callback(error, Buffer.from(res.data.content, 'base64').toString());
}

module.exports = {
    async: true,
    filter: getRepoFile
}
