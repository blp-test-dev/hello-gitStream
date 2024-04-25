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

	// Configure this for your Jira instance and the email associated with your API key.
	// You can safely use these values because only your API key is sensitive. 
    const jiraSpaceName = `jiraSpaceName`;
	const email = `emailhere@example.com`;
	// If you're concerned about exposing this information,
	// we recommend using environment variables for your production environment.
		
    const resp = await fetch('https://${jiraSpaceName}.atlassian.net/rest/api/2/search', {
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

		const results = await resp.json();
		return callback(null,  !!results.issues?.length);
	}
}
