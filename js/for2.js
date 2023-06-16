function foriki(){
    let cars=["BMW","Volvo","Ford"];
    let text="";
    for(let i=0;i<cars.length;i++){
      text+=cars[i] +"<br>";
    }
      let x=document.getElementsByClassName('demo');
     x[0].innerHTML=text;
}