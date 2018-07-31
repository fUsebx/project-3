import Cookies from 'universal-cookie';
 
const cookies = new Cookies();
 

export default function onLoadHandler(){
var user = cookies.get('username');
    return user; 
} 

