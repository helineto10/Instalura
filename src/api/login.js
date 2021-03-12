const efetuarLogin = async (usuario, senha) => {
  const cabecalhoHTTP = {
    method: 'POST',
    body:JSON.stringify({
      userName: usuario,
      password: senha
    }),
    headers:{
      'Content-Type' : 'application/json'
    }
  }
  const resposta = await fetch("http://0.0.0.0:3030/users/login", cabecalhoHTTP);
  
  if(resposta.ok){
    return resposta.headers.get("x-access-token")
  }else{
    throw new Error("Não foi possível logar!")
  }
}

export default efetuarLogin;