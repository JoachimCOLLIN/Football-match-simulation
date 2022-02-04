import os
from ssl import SSL_ERROR_SSL

import flask
import flask_cors

from .entities.match import Match

from . import db
from . import matchs
from .entities.base import Base
from .data import response 

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
        session.query(Match).delete()
        session.commit()
        for match in response["matches"]:
            new_match = Match(
                homeTeam = match["homeTeam"]["name"],
                awayTeam = match["awayTeam"]["name"],
                Season = match["season"]["endDate"] ,
                Date =  match["utcDate"],
                Status = match["status"],
                Winner = match["score"]["winner"],
                Goal_Away = match["score"]["fullTime"]["awayTeam"],
                Goal_Home = match["score"]["fullTime"]["homeTeam"],
            )
            session.add(new_match)


        session.commit()
        print(1)
        session.close()

    app.register_blueprint(matchs.blueprint)


    return app
