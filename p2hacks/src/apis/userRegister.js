import * as request from "superagent";

export const userRegister = (mail, address) => {
    return request.post(`http://localhost:5000/user`)
        .set("Content-Type", "application/json")
        .send({ mail,address })
        .then((res) => {
            return { res: res.body.id }
        })
        .catch(err => {
            console.log(err.status)
            if(err.status>=500){
                alert("既に登録されたアドレスです")
            }
            return { err }
        })
}