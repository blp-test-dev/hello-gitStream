function formatComment(obj, commentType='default') {
    let comment = '';
    if (commentType === 'default') {
        return obj;
    } else if (commentType === 'missingJSDoc') {
        comment += 'gitStream has detected missing JSDoc tags in the following files:\n\n'
        obj.forEach((subObj) => {
            comment += '* '+subObj.file+' is missing '+subObj.missing_tags.join(', ')+'\n';
        });
        comment += '\nPlease add the missing tags to the files listed above.\n';
        comment += '\nOr, check this box to get recommended text auto-generated for this PR:\n';
        comment += '\n[ ] Auto-generate JSDoc text\n';
    }
    return comment;
}

module.exports = formatComment;
