# coding:utf-8

import flask
from flask import jsonify,request,abort
from main import app,db
from main.models import User,Result
from main.util import calcResultData,checkInputData


@app.route("/")
def show():
    return "Hello"

@app.route("/user",methods=["POST"])
def registerUser():
    registerInfo=request.get_json()
    if "mail" in registerInfo and "address" in registerInfo:
        user=User(mail=registerInfo["mail"],address=registerInfo["address"])
        db.session.add(user)
        db.session.commit()
        return jsonify(registerInfo)
    abort(400)

@app.route("/user/<user_mail>",methods=["GET"])
def getUserID(user_mail):
    users=db.session.query(User).filter(User.mail==user_mail).all()
    if len(users)<=0:
        abort(400)
    user=users[0]
    return jsonify({"id":user.id})

@app.route("/answer",methods=["POST"])
def addAnswer():
    answer=request.get_json()
    if "id" in answer and "result" in answer:
        inputData = answer["result"]
        if not checkInputData(inputData):
            abort(400)

        datas = calcResultData(inputData)
        results = {}
        results["result"]=datas
        tmp_ans=",".join(datas)
        users = db.session.query(User).filter(User.id == answer["id"]).all()
        if len(users) <= 0:
            abort(400)
        user=users[0]
        mail=user.mail
        ans = Result(user_mail=mail, answer=tmp_ans)
        db.session.add(ans)
        db.session.commit()
        return jsonify(results)

@app.route("/answer/<user_mail>",methods=["GET"])
def getResult(user_mail):
    results=db.session.query(Result).filter(Result.user_mail==user_mail).all()
    if len(results)<=0:
        abort(404)
    result=[i.answer.split(",") for i in results]
    res={}
    res["results"]=result
    return jsonify(res)

@app.route("/all_users",methods=["GET"])
def unsafe_getAllUsers():
    users = db.session.query(User).all()
    user_list=[{"id":i.id,"mail":i.mail,"address":i.address} for i in users]
    return jsonify(user_list)

