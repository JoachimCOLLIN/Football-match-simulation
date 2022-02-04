import os
from ssl import SSL_ERROR_SSL

import flask
import flask_cors

from backend.src import seasonends

from .entities.match import Match

from . import db
from . import matchs
from .entities.base import Base
from .data import response 
from .entities.season_end import SeasonEnd
from . import seasonends

def create_app(test_config=None):

    # creating the Flask application
    app = flask.Flask(__name__, instance_relative_config=True)
    flask_cors.CORS(app)

    # load configuration from config.py
    app.config.from_object('config')

    if test_config is None:
        # load the instance/config.py, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    # if needed, generate database schema
    with app.app_context():
        Base.metadata.create_all(db.get_engine())

    with app.app_context():
        session = db.get_session()  
        session.query(SeasonEnd).delete()
        session.commit()
        # for match in response["matches"]:
        #     new_match = Match(
        #         homeTeam = match["homeTeam"]["name"],
        #         awayTeam = match["awayTeam"]["name"],
        #         Season = match["season"]["endDate"] ,
        #         Date =  match["utcDate"][0:10],
        #         Status = match["status"],
        #         Winner = match["score"]["winner"],
        #         Goal_Away = match["score"]["fullTime"]["awayTeam"],
        #         Goal_Home = match["score"]["fullTime"]["homeTeam"],
        #         Time =  match["utcDate"][11:16]
        #     )
        #     session.add(new_match)

        # new_endSeason = SeasonEnd(Team="Manchester",Points=80,Wins=15,Draws=10,Losses=13,Goals_scored=85,Goals_conceded=65)
        # session.add(new_endSeason)
        # new_endSeason2 = SeasonEnd(Team="Arsenal",Points=86,Wins=17,Draws=10,Losses=11,Goals_scored=90,Goals_conceded=65)
        # session.add(new_endSeason2)
        # session.commit()
        session.close()
        print(1)

    app.register_blueprint(matchs.blueprint)
    app.register_blueprint(seasonends.blueprint)


    return app
