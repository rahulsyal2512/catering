import 'whatwg-fetch';

const Header = (url, method, body) => {
  return(
    fetch(url, {
      method: method,
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
      body: body
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        return err;
      })
    );
};

export default Header;

