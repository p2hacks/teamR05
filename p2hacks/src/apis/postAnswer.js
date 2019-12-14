import * as request from "superagent";

export const postAnswer=(id,result)=>{
    return request.post(`http://localhost:5000/answer`)
        .set("Content-Type", "application/json")
        .send({ id, result })
        .then((res)=>{
            return {res:res.body}
        })
        .catch(err=>{
            console.log(err)
            return {err}
        })
}