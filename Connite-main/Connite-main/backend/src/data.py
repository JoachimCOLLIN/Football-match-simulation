import http.client
import json


connection = http.client.HTTPConnection('api.football-data.org')
headers = { 'X-Auth-Token': 'd8e7492561bf49edbb652f367822715f' }
connection.request('GET', '/v2/competitions/PL/matches', None, headers )
response = json.loads(connection.getresponse().read().decode())
