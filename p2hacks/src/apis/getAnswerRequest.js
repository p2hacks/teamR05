import * as request from "superagent";

export const getAnswerRequest = (mail) => {
    return request.get(`http://localhost:5000/answer/${mail}`)
        .then((res) => {
            return { res: res.body }
        })
        .catch(err => {
            console.log(err.status)
            if (err.status === 404)
            {
                alert("メールアドレスが登録されていません")
            }
            return { err }
        })
}