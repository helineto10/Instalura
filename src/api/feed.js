const lerFotos = async (callback) =>{
  const fotosHTTP = await fetch("http://0.0.0.0:3030/feed");
  const fotosJson = await fotosHTTP.json();
  callback(fotosJson);
}

export default lerFotos;