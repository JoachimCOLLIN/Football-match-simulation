import flask

from .db import get_session
from .entities.ranking import Ranking, RankingSchema

blueprint = flask.Blueprint('rankings', __name__)

@blueprint.route('/rankings/<team>',methods = ['Get'])
def getEndSeason(team):
    print(team)
    session = get_session()
    ranking_objects = session.query(Ranking).filter(Ranking.Team == team)
    schema = RankingSchema(many=True)
    rankings = schema.dump(ranking_objects)
    session.close()
    return flask.jsonify(rankings)

