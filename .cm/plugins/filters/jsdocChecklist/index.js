/**
 * Generate a Markdown checklist indicating which new JavaScript files include specified JSDoc elements.
 * @param {Array} fileMetadataList - List of file metadata objects.
 * @returns {string} Markdown checklist.
 */
function jsdocChecklist(fileMetadataList) {
    console.log('Generating JSDoc checklist...');
    const checklistItems = [];

    fileMetadataList.forEach((fileMetadata) => {
        const { new_file, new_content } = fileMetadata;

      // Check if the file is a new JavaScript file
        if (/\.js$/.test(new_file) && /^$/.test(fileMetadata.original_file)) {
            console.log(`${new_file} is a new file`)
            // Check for the presence of specified JSDoc elements
            const requiredTags = ['@description', '@module', '@returns', '@example', '@license'];
            const missingTags = [];

            requiredTags.forEach((tag) => {
                const tagExists = Boolean(new_content.includes(tag));
                console.log(`Checking for ${tag} in ${new_file}: ${tagExists}`)
                if (!tagExists) {
                    console.log(`${new_file} is missing ${tag}`)
                    missingTags.push(tag);
                }
            });

            // Generate checklist item
            const checklistItem = `- [${new_file}](${new_file}) - ${
                missingTags.length === 0 ? 'All required tags present' : 'Missing tags: ' + missingTags.join(', ')
            }`;
            checklistItems.push(checklistItem);
        }
    });

    // Generate Markdown checklist
    const markdownChecklist = checklistItems.join('\n');
    console.log(markdownChecklist)

    return String(markdownChecklist);
}

module.exports = jsdocChecklist;
