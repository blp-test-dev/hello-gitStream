function extractNewFiles(subObjects, fileType) {
    console.log("Detecting new files that match"+fileType);

    let filteredSubObjects = {};

    for (const [plugin, objects] of Object.entries(subObjects)) {
        const hasIndexJS = objects.some((subObject) => subObject.new_file.includes(fileType) && subObject.original_file === '');
    
        if (hasIndexJS) {
            filteredSubObjects[plugin] = objects;
        } else {
            filteredSubObjects[plugin] = [];
        }
    }

    for (const k in filteredSubObjects) {
        if (Array.isArray(filteredSubObjects[k]) && filteredSubObjects[k].length === 0) {
            delete filteredSubObjects[k];
        }
    }
    console.log("New file analysis complete.");
    return filteredSubObjects;
}

module.exports = extractNewFiles;
