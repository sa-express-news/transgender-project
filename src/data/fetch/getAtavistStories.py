import os
import urllib2
import json

authUrl = 'https://atavist.com/api/v2/oauth/access_token.php'
listUrl = 'https://atavist.com/api/v2/project/?fields=title,subtitle,excerpt,cover_partial,byline,slug' # not currently in use
projectUrl = ['https://atavist.com/api/v2/project/', '/retrieve']

projectIds = ['1290051', '1254175']

accessToken = ''
storyList = []

outfile = '../story-list.json'

with open(os.path.expanduser('~/.atavist_tokens.json')) as json_data:
		tokens = json.load(json_data)
		authRequest = authUrl + '?grant_type=client_credentials&client_id=' + tokens['client'] + '&client_secret=' + tokens['secret']
		authResponse = urllib2.urlopen(authRequest)
		accessToken = json.load(authResponse)["access_token"]

headers = {
		"Authorization": "Bearer " + accessToken
}

for projectId in projectIds:
	projectQuery = urllib2.Request(projectUrl[0] + projectId + projectUrl[1], headers=headers)
	projectResponse = urllib2.urlopen(projectQuery)
	story = json.load(projectResponse)
	storyList.append(story)

output = open(outfile, 'w')
json.dump(storyList, output)

print storyList
