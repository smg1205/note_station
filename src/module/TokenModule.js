import Cookies from 'js-cookie';

function getToken(){
    return Cookies.get('token');
}
function setToken(token){
    return Cookies.set('token', token, {expires: 1});
}

export {getToken, setToken}