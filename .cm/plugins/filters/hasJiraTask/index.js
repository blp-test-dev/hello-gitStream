/**
 * @module hasJiraTicket
 * @description Check to see if the input string matches the title of a Jira task.
 * @param {string} Input - The string to search for a Jira task title.
 * @param {string} Password - Your Jira API token
 * @returns {boolean} Returns true if the input string matches a Jira task title. 
 * @example {{ pr.title | hasJiraTicket }}
 * @license MIT
 */
module.exports = {
	async: true,
	filter: async (inputString, password, key, jiraSpaceName, email, callback) => {
		const jql = `"${key}" = "${inputString}"`;
		
    const resp = await fetch(`https://${jiraSpaceName}.atlassian.net/rest/api/2/search`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Basic ' + btoa(`${email}:${password}`)
			},
			body: JSON.stringify({
				'jql': jql,
				'maxResults': 1,
				"fieldsByKeys": true,
				'fields': [ 'assignee' ]
			})
		});
		const results = await resp.json();
		return callback(null,  !!results.issues?.length);
	}
}
