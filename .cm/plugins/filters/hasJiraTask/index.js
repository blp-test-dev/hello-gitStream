module.exports = {
	filter: async (inputString, jiraSpaceName, email, password) => {
		const jql = `cf[10036] = '${inputString}'`;
		
        try {
            const resp = await fetch(`https://${jiraSpaceName}.atlassian.net/rest/api/2/search`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + Buffer.from(`${email}:${password}`).toString('base64')
                },
                body: JSON.stringify({
                    'jql': jql,
                    'maxResults': 1,
                    "fieldsByKeys": true,
                    'fields': [ 'assignee' ]
                })
            });

            if (!resp.ok) {
                throw new Error(`HTTP error! status: ${resp.status}`);
            }

            const results = await resp.json();
            return !!results.issues?.length;
        } catch (error) {
            console.error('Failed to fetch Jira data:', error);
            return false;  // or handle errors as needed
        }
	}
}
