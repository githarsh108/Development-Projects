/*let httpRequest=new XMLHttpRequest();
let el=document.getElementById("abc");
el.onclick=function(){
        //alert("deletion in progress");
        el.innerHTML="thetar hi paida hue ho tum matlab...";
        el.style.color="red";

}
const getTodos=()=>{
        const request =new XMLHttpRequest();
request.addEventListener('readystatechange',()=>{
        if(request.readystate === 4 && request.status===200){
                callback(undefined, request.responseText);
        }
        else if(request.readystate === 4){
                callback('could not fetch data',undefined);
        }
});

request.open('GET','https://jsonplaceholder.typicode.com/todos/');
request.send();
}
getTodos((err,data)=> {
        console.log('callback fired');
});
*/
