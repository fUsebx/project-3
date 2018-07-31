import Cookies from 'universal-cookie';
 
// export default function onLoadHandler(){
// var user = cookies.get('username');
//     if (user === "undefined"){

//     }
// } 
export const hideDisplay =() => {
let maybe = new Cookies().get('username')
    if (maybe === undefined){
        var returnClass = "hide-btn"
        return returnClass.toString()
    } else {
        var returnClass2 = "btn-nav"
        return returnClass2.toString()
    }
}



// const hideDisplay({

// })
  
//     export default hideDisplay;

