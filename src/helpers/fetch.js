import { environment } from "../environment/environment";

export const LoginFetch = async (rut, password) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJSdXQiOiIxMTExMTExMS0xIiwiVXNlcklkIjoiMSIsImV4cCI6MTY4OTM0NjQ5OH0.BRHKU2zhAuBpEII_v1-0bPHJRuxxbYxV-vL7qR_22fs");
  myHeaders.append("access-control-allow-origin", "*")

  var raw = JSON.stringify({
    "rut": rut,
    "password": password
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  return fetch(environment[0].Authentication, requestOptions)
}

export const RecoverPasswordFetch = async(rut) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJSdXQiOiIxMTExMTExMS0xIiwiVXNlcklkIjoiMSIsImV4cCI6MTY4OTM0NjQ5OH0.BRHKU2zhAuBpEII_v1-0bPHJRuxxbYxV-vL7qR_22fs");
  myHeaders.append("access-control-allow-origin", "*")

  var raw = JSON.stringify({
    "rut": rut
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  return fetch(environment[0].Password + "/Recover", requestOptions)
}

export const UnlockUserFetch = async(rut) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJSdXQiOiIxMTExMTExMS0xIiwiVXNlcklkIjoiMSIsImV4cCI6MTY4OTM0NjQ5OH0.BRHKU2zhAuBpEII_v1-0bPHJRuxxbYxV-vL7qR_22fs");
  myHeaders.append("access-control-allow-origin", "*")

  var raw = JSON.stringify({
    rut
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  return fetch(environment[0].Password + "/UnlockUser", requestOptions)
}

export const GetPassword = async(rut) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJSdXQiOiIxMTExMTExMS0xIiwiVXNlcklkIjoiMSIsImV4cCI6MTY4OTM0NjQ5OH0.BRHKU2zhAuBpEII_v1-0bPHJRuxxbYxV-vL7qR_22fs");
  myHeaders.append("access-control-allow-origin", "*")

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
  };

  return fetch(environment[0].Password + "/GetPassword?rut=" + rut, requestOptions)
}

export const ChangePasswordFetch = async(auditUserId, rut, currentPassword, newPassword, repeatNewPassword) => {
  var myHeaders = new Headers();
  const token = localStorage.getItem("token");
  if(token) {
    const Authorization = "Bearer " + JSON.parse(localStorage.getItem("token")).token;
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", Authorization);
    myHeaders.append("access-control-allow-origin", "*")
  
    var raw = JSON.stringify({
      auditUserId,
      rut,
      currentPassword,
      newPassword,
      repeatNewPassword
    });
  
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };
  
    return fetch(environment[0].Password + "/ChangePassword", requestOptions)
  }
}
export const getPremiunHistorial = async(rut,token) => {
  var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Authorization", `Bearer ${token}`);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

  return fetch(environment[0].Policy + `/GetPremiumHistorial?rut=${rut}`, requestOptions)
}

export const GetContactData = async(id) => {
  var myHeaders = new Headers();
  const token = localStorage.getItem("token");
  if(token) {
    const Authorization = "Bearer " + JSON.parse(localStorage.getItem("token")).token;
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", Authorization);
    myHeaders.append("access-control-allow-origin", "*")
  
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
    };
  
    return fetch(environment[0].base + "/User/" + id, requestOptions)
  }
}

// export const fetchProvidedData = (url, data, method = 'POST') => {
//   const urlFinded = Object.entries(configUrls).filter(
//     item => item[0] == url,
//   )[0][1];
//   const urlFinal = `${urlFinded}/`;
//   if (method === 'GET') {
//     return fetch(urlFinal);
//   } else {
//     const form = new FormData();
//     form.append('data', JSON.stringify(data));
//     console.log(urlFinal)
//     return (
//       fetch(urlFinal, {method, body: form,})
//     )
//   }
// };


