from main import db
from flask_sqlalchemy import SQLAlchemy


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    mail = db.Column(db.Text,nullable=False,unique=True)
    address = db.Column(db.Text)
    results=db.relationship("Result",backref="user",lazy=True)

    def __repr__(self):
        return "<User id={} mail={!r} address={!r}>".format(self.id,self.mail,self.address)

class Result(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    user_mail=db.Column(db.Text,db.ForeignKey("user.mail"),nullable=False)
    answer=db.Column(db.String(50))

    def __repr__(self):
        return "<Result id={} user_mail={!r} answer={!r}>".format(self.id,self.user_mail,self.answer)

class Shop(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    tag=db.Column(db.Text)
    url=db.Column(db.Text)

    def __repr__(self):
        return "<Shop id={} tag={!r} url={!r}>".format(self.id,self.tag,self.url)

def init():
    db.create_all()

def registerShops():
    pass
