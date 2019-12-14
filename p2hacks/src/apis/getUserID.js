import * as request from "superagent";

export const getUserID = (mail) => {
    return request.get(`http://localhost:5000/user/${mail}`)
        .then((res) => {
            return { res: res.body }
        })
        .catch(err => {
            console.log(err)
            return { err }
        })
}