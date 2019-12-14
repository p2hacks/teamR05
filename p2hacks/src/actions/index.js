// actioncreator

export const EDITANSWER ="EDITANSWER"

export const editAnswer=(targetID,answer)=>{ 
  return {type:EDITANSWER,targetID,answer};
}

export const USERREGSTER_REQUEST = "USERREGSTER_REQUEST"
export const USERREGSTER_SUCCESS = "USERREGSTER_SUCCESS"
export const USERREGSTER_FAILED = "USERREGSTER_FAILED"

export const USERID_REQUEST = "USERID_REQUEST"
export const USERID_SUCCESS = "USERID_SUCCESS"
export const USERID_FAILED = "USERID_FAILED"

export const POSTANSWER_REQUEST = "POSTANSWER_REQUEST"
export const POSTANSWER_SUCCESS = "POSTANSWER_SUCCESS"
export const POSTANSWER_FAILED = "POSTANSWER_FAILED"

export const GETANSWER_REQUEST = "GETANSWER_REQUEST"
export const GETANSWER_SUCCESS = "GETANSWER_SUCCESS"
export const GETANSWER_FAILED = "GETANSWER_FAILED"


export const userRegister=(mail,address)=>{
  return {
    type: USERREGSTER_REQUEST,
    payload:{mail,address}
  }
}

export const userRegisterSuccess=(info)=>{
  return {
    type: USERREGSTER_SUCCESS,
    payload:info
  }
}

export const userRegisterFailed=(err)=>{
  return {
    type:USERREGSTER_FAILED,
    payload:err
  }
}

export const getUserID=(mail)=>{
  return {
    type:USERID_REQUEST,
    payload:mail
  }
}

export const getUserIDSuccess=(res)=>{
  return {
    type:USERID_SUCCESS,
    payload:res
  }
}

export const getUserIDFailed=(err)=>{
  return {
    type:USERID_FAILED,
    payload:err
  }
}

export const postAnswer=(id,result)=>{
  return {
    type:POSTANSWER_REQUEST,
    payload:{id,result}
  }
}

export const postAnswerSuccess=(res)=>{
  return {
    type:POSTANSWER_SUCCESS,
    payload:res
  }
}

export const postAnswerFailed=(err)=>{
  return {
    type:POSTANSWER_FAILED,
    payload:err
  }
}

export const getAnswerRequest=(mail)=>{
  return {
    type:GETANSWER_REQUEST,
    payload:mail
  }
}

export const getAnswerSuccess=(res)=>{
  return {
    type:GETANSWER_SUCCESS,
    payload:res
  }
}

export const getAnswerFailed=(err)=>{
  return {
    type:GETANSWER_FAILED,
    payload:err
  }
}