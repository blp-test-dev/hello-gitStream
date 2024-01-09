function formatComment(obj) {
    console.log("Creatin the comment");
    let comment = '';

    comment += 'gitStream has detected missing JSDoc tags in the following files:\n\n'
    obj.forEach((subObj) => {
        comment += '* '+subObj.file+' is missing '+subObj.missing_tags.join(', ')+'\n';
    });
    comment += '\nPlease add the missing tags to the files listed above.\n';
    comment += '\nOr, check this box to get recommended text auto-generated for this PR:\n';
    comment += '\n[ ] Auto-generate JSDoc text\n';
    console.log(comment);
    return String(comment);
}

module.exports = formatComment;
