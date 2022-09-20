import jwt_decode from 'jwt-decode';

export default function validateToken(){
    const token=localStorage.getItem('token');
    if(!token){
        return false;
    }
    else{
        console.log(JSON.stringify(jwt_decode(token)))
        const exp=JSON.parse(JSON.stringify(jwt_decode(token)));

        if(exp<Date.now()){
            return true;
        }
        else{
            return false;
        }
    }
}