
function authenticate(){
    var token = localStorage.getItem('token');
    if (token==null){
        return false;
    }
    else {
      return true;
    }
}

export {authenticate}
