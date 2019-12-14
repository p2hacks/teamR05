import * as request from "superagent";

export const getAnswerRequest = (mail) => {
    return request.get(`http://localhost:5000/answer/${mail}`)
        .then((res) => {
            return { res: res.body }
        })
        .catch(err => {
            console.log(err)
            return { err }
        })
}