# coding:utf-8

import flask
from flask import jsonify,request,abort,render_template
from main import app,db
from main.models import User,Result,Shop
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
        users=db.session.query(User).filter(User.mail==registerInfo["mail"]).all()
        if len(users)<=0:
            abort(500)
        user=users[0]
        return jsonify({"id":user.id})
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
            abort(404)
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

@app.route("/shop/<ans>")
def renderShopSamplePage(ans):
    tagList = {'A1': 'アクセサリー（衣服）', 'A2': '衣服', 'A3': '消耗品', 'A4': '小物', 'A5': '文具', 'A6': '珍品', 'A7': '食品', 'A8': '家電', 'A9': '趣味電化製品', 'A10': '生活用品', 'A11': '手作りの品', 'B1': 'ネックレス', 'B2': '靴', 'B3': 'キャンドル', 'B4': 'スマホケース', 'B5': '筆箱', 'B6': 'ドリームキャッチャー', 'B7': 'コーヒー', 'B8': '空気清浄機', 'B9': 'モバイルバッテリー', 'B10': 'ピアス・イヤリング', 'B11': 'ソファ', 'B12': 'フォトスタンド', 'B13': '髪留め', 'B14': 'マフラ ー', 'B15': 'アロマエッセンス', 'B16': 'プリザーブドフラワー', 'B17': '万年筆', 'B18': 'トーテムポール', 'B19': 'ワイン ・シャンパン', 'B20': 'スチーマー', 'B21': 'イヤホン', 'B22': '手袋', 'B23': 'マイボトル', 'B24': '入浴剤',
    'B25': '指輪', 'B26': '帽子', 'B27': 'ボディークリーム', 'B28': 'ぬいぐるみ', 'B29': '本', 'B30': '腕時計', 'B31': '紅茶パック', 'B32': 'ガラスペン', 'B33': 'バンカーリング', 'B34': 'スピーカー', 'B35': '食器', 'B36': '圧量鍋', 'B37': 'ブレスレット', 'B38': 'ブランケット', 'B39': 'ハンドクリーム', 'B40': 'アクセサリー', 'B41': '手帳', 'B42': 'レイコップ', 'B43': 'タブレット', 'B44': 'バスタオル', 'B45': 'バッグ', 'B46': 'ディフューザー', 'B47': 'カードケース', 'B48': 'しおり', 'B49': 'マグカップ', 'B50': 'ネクタイ', 'B51': 'インテリアライト', 'B52': '財布', 'B53': 'マッサージ器', 'B54': 'コーヒーメーカー', 'B55': 'ドライヤー', 'B56': '置物', 'B57': 'ティーセット', 'B58': 'バッグ', 'B59': 'フェイクグリーン'}
    if ans in tagList:
        urls=db.session.query(Shop).filter(Shop.tag==ans).all()
        urlList=[i.url for i in urls]
        return render_template("shop.html", ans=tagList[ans], urls=urlList)
    abort(404)

