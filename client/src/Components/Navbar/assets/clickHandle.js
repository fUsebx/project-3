import Cookies from 'universal-cookie';
 
const cookies = new Cookies();
 

export default function clickHandle(location){
cookies.remove('username');
location.reload(true)
}

