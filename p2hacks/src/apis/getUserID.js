import * as request from "superagent";

export const getUserID = (mail) => {
    return request.get(`http://localhost:5000/user/${mail}`)
        .then((res) => {
            return { res: res.body.id }
        })
        .catch(err => {
            console.log(err.status)
            if(err.status===404){
                alert("メールアドレスが登録されていません")
            }
            return { err }
        })
}