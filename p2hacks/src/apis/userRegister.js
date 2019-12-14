import * as request from "superagent";

export const userRegister = (mail, address) => {
    return request.post(`http://localhost:5000/user`)
        .set("Content-Type", "application/json")
        .send({ mail,address })
        .then((res) => {
            return { res: res.body }
        })
        .catch(err => {
            console.log(err)
            return { err }
        })
}