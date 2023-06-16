function Bul(){
let gun=document.getElementById('input1').value;
switch(gun){
    case 1:
        document.getElementById('demo').innerHTML="pazartesi";
        break;
    case 2:
        document.getElementById('demo').innerHTML="Sali";
        break;
    case 3:
        document.getElementById('demo').innerHTML="Carsamba"
        break;
    default:
        document.getElementById('demo').innerHTML="lutfen 1-7 arasi bir rakam girinizi";
        document.getElementById('demo').style.color='red';
}
}

