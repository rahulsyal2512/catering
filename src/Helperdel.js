import 'whatwg-fetch';

const BaseUrl = "http://192.168.43.14:3001/v1/";


const Helperdel = (url, method) => {
  return(
    fetch(BaseUrl + url, {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: {}
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        return err;
      })
    );
};

export default Helperdel;

