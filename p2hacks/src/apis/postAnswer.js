import * as request from "superagent";

export const postAnswer=(id,result)=>{
    return request.post(`http://localhost:5000/answer`)
        .set("Content-Type", "application/json")
        .send({ id, result })
        .then((res)=>{
            return {res:res.body}
        })
        .catch(err=>{
            console.log(err.status)
            if(err.status===400){
                alert("不適切な入力値です")
            }
            return {err}
        })
}