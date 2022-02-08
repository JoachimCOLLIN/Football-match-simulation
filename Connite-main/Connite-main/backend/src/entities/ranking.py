import marshmallow
import sqlalchemy

from .base import Base


class Ranking(Base):
    __tablename__ = 'ranking'
    Team = sqlalchemy.Column(sqlalchemy.String,primary_key=True)   
    One = sqlalchemy.Column(sqlalchemy.Integer)
    Two = sqlalchemy.Column(sqlalchemy.Integer)
    Three = sqlalchemy.Column(sqlalchemy.Integer)
    Four = sqlalchemy.Column(sqlalchemy.Integer)
    Five = sqlalchemy.Column(sqlalchemy.Integer)
    Six = sqlalchemy.Column(sqlalchemy.Integer)
    Seven = sqlalchemy.Column(sqlalchemy.Integer)
    Eight = sqlalchemy.Column(sqlalchemy.Integer)
    Nine = sqlalchemy.Column(sqlalchemy.Integer)
    Ten = sqlalchemy.Column(sqlalchemy.Integer)
    Eleven = sqlalchemy.Column(sqlalchemy.Integer)
    Twelve = sqlalchemy.Column(sqlalchemy.Integer)
    Thirteen = sqlalchemy.Column(sqlalchemy.Integer)
    Fourteen = sqlalchemy.Column(sqlalchemy.Integer)
    Fifteen = sqlalchemy.Column(sqlalchemy.Integer)
    Sixteen = sqlalchemy.Column(sqlalchemy.Integer)
    Seventeen = sqlalchemy.Column(sqlalchemy.Integer)
    Eighteen = sqlalchemy.Column(sqlalchemy.Integer)
    Nineteen = sqlalchemy.Column(sqlalchemy.Integer)
    Twenty = sqlalchemy.Column(sqlalchemy.Integer)


    def __init__(self,Team, One,Two,Three,Four,Five,Six,Seven,Eight,Nine,Ten,Eleven,Twelve,Thirteen,Fourteen,Fifteen,Sixteen,Seventeen,Eighteen,Nineteen,Twenty):
        self.Team = Team
        self.One = One
        self.Two = Two
        self.Three = Three
        self.Four = Four
        self.Five = Five
        self.Six = Six
        self.Seven = Seven
        self.Eight = Eight
        self.Nine = Nine
        self.Ten = Ten
        self.Eleven = Eleven
        self.Twelve = Twelve
        self.Thirteen = Thirteen
        self.Fourteen = Fourteen
        self.Fifteen = Fifteen
        self.Sixteen = Sixteen
        self.Seventeen = Seventeen
        self.Eighteen = Eighteen
        self.Nineteen = Nineteen
        self.Twenty = Twenty

    


class RankingSchema(marshmallow.Schema):
    Team = marshmallow.fields.Str()
    One = marshmallow.fields.Number()
    Two = marshmallow.fields.Number()
    Three = marshmallow.fields.Number()
    Four = marshmallow.fields.Number()
    Five = marshmallow.fields.Number()
    Six = marshmallow.fields.Number()
    Seven = marshmallow.fields.Number()
    Eight = marshmallow.fields.Number()
    Nine = marshmallow.fields.Number()
    Ten = marshmallow.fields.Number()
    Eleven = marshmallow.fields.Number()
    Twelve = marshmallow.fields.Number()
    Thirteen = marshmallow.fields.Number()
    Fourteen = marshmallow.fields.Number()
    Fifteen = marshmallow.fields.Number()
    Sixteen = marshmallow.fields.Number()
    Seventeen = marshmallow.fields.Number()
    Eighteen = marshmallow.fields.Number()
    Nineteen = marshmallow.fields.Number()
    Twenty = marshmallow.fields.Number()


