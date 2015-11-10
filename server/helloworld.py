from flask import Flask
from flask_restful import Resource, Api
import sqlite3

#Setup
app = Flask(__name__)
api = Api(app)
db = sqlite3.connect('data/db', check_same_thread=False)
db.row_factory = sqlite3.Row
cursor = db.cursor()

#Allow CORS
@app.after_request
def after_request(response):
	response.headers.add('Access-Control-Allow-Origin', '*')
	response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
	response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
	return response

class Index(Resource):
	def get(self):
		cursor.execute('''SELECT * FROM tracks''')
		tracks = cursor.fetchall()
		data = dict()
		for track in tracks:
			data[track[0]] = {
				'artist': track[1],
				'title': track[2],
				'soundcloud_id': track[3],
				'genres': track[4],
				'posted_by': track[5],
				'created': track[6],
				'duration': track[7],
				'artwork': track[8],
				'soundcloud_url': track[9]
			}
		return data, 200

#Routes
api.add_resource(Index, '/')

if __name__ == '__main__':
	app.run(host='0.0.0.0', debug=True)
