import flask

from .db import get_session
from .entities.season_end import SeasonEnd, SeasonEndSchema

blueprint = flask.Blueprint('seasonends', __name__)

@blueprint.route('/seasonends',methods = ['Get'])

def get_the_end_of_the_season():
    session = get_session()
    seasonEnd_objects = session.query(SeasonEnd).all()

    schema = SeasonEndSchema(many=True)
    seasonEnds = schema.dump(seasonEnd_objects)

    session.close()
    return flask.jsonify(seasonEnds)




