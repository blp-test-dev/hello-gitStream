function extractNewFiles(subObjects, fileType) {
    console.log("Identifying new files...")

    const filteredSubObjects = {};

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
    return filteredSubObjects;
}