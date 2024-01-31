const { Octokit } = require("@octokit/rest");

/**
 * @module getRepoFile
 * @description 
 * @param {string} Input - 
 * @returns {boolean} 
 * @example 
 * @license MIT
 */

async function getRepoFile(repo, path, auth) {
    const octokit = new Octokit({
        request: { fetch },
        auth,
    });

    const res = await octokit.repos.getContent({
        owner: repo.owner,
        repo: repo.name,
        path
    });

    return Buffer.from(res.data.content, 'base64').toString()
}

module.exports = getRepoFile;
