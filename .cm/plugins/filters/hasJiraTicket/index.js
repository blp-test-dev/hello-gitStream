/**
 * @module hasJiraTicket
 * @description Check to see if the input string matches the title of a Jira ticket.
 * @param {string} Input - The PR title
 * @returns {boolean} Returns true if the input string matches a Jira ticket title. 
 * @example {{ pr.title | hasJiraTicket }}
 * @license MIT
 */

module.exports = {
	async: true,
	filter: async (inputString, password, callback) => {
		const jql = `key = '${inputString}'`;
    
    // the following is non-sensitive information, so it's alright to put it here. 
    // it's the password specifically that must be loaded through a secret environment variable.
    const email = `pearsoben@gmail.com.com`;
    const jiraSpaceName = `blp-test-dev`;
		
    const resp = await fetch(`https://${jiraSpaceName}.atlassian.net/rest/api/2/search`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Basic ' + btoa(`${email}:${password}`)
			},
			body: JSON.stringify({
				'jql': jql,
				'maxResults': 1,
				'fields': [ 'assignee' ]
			})
		});
		console.log(`inputString: ${inputString}`);
		console.log(`workspace: ${workspace}`);
		console.log(`email: ${email}`);
		console.log(`jql: ${jql}`);
		const results = await resp.json();
		return callback(null,  !!results.issues?.length);
	}
}
