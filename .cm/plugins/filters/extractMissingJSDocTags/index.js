const requiredjsdocTags = ['@description', '@module', '@returns', '@param', '@example', '@license'];

function extractMissingJsdocTags (fileMetadata) {
    const response = [];

    for (fileList in fileMetadata) {
        console.log('Running JSDoc checklist for ' + fileList);
        const modifiedFiles = fileMetadata[fileList];
        const pluginIndex = modifiedFiles.find((item) => item.new_file.endsWith('index.js'));
        const missingTags = [];

        requiredjsdocTags.forEach((tag) => {
            const tagExists = Boolean(pluginIndex.new_content.includes(tag));
            if (!tagExists) {
                missingTags.push(tag);
            }
        });
        const output = {
            file: pluginIndex.new_file,
            missing_tags: missingTags,
            source: pluginIndex.new_content
        };
        response.push(output);
    }
    console.log(response)
    return response;
}

module.exports = extractMissingJsdocTags;
