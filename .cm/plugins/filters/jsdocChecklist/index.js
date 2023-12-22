/**
 * Check if specific JSDoc tags are present in the given JavaScript code.
 * @param {string} filediff - JavaScript code as a string.
 * @returns {string} Markdown unordered list indicating the presence of tags.
 */
function checkJSDocTagsPresence(filediff) {
    // Define the tags to check for
    const tagsToCheck = ['@description', '@module', '@returns', '@example', '@license'];

    // Initialize an object to store tag presence
    const tagPresence = {};

    // Split the code into lines
    const lines = filediff.split('\n');

    // Iterate through lines to check for tags
    lines.forEach((line) => {
        tagsToCheck.forEach((tag) => {
            if (line.includes(tag)) {
            tagPresence[tag] = true;
        }
    });
});

// Generate Markdown unordered list
let markdownList = '';
tagsToCheck.forEach((tag) => {
    const isPresent = tagPresence[tag] ? '✅' : '❌';
    markdownList += `* ${tag} - ${isPresent}\n`;
});

return markdownList;
}

module.exports = checkJSDocTagsPresence;
