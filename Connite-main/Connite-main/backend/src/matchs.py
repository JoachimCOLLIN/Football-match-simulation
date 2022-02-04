import flask

from .db import get_session
from .entities.match import Match, MatchSchema




blueprint = flask.Blueprint('matchs', __name__)


# @blueprint.route('/matchs/<date>')

# def get_today_matchs():
#     session = get_session()
#     match_objects = session.query(Match).all()

#     # transforming into JSON-serializable objects
#     schema = MatchSchema(many=True)
#     matchs = schema.dump(match_objects)

#     # serializing as JSON
#     session.close()
#     return flask.jsonify(matchs)



