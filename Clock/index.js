
let ampm=document.getElementById('ampm');
function displayTime(){
    let dateTime=new Date();

    document.getElementById('date').innerHTML=paddZero(dateTime.getDate());
    document.getElementById('mon').innerHTML=paddZero(dateTime.getMonth());
    document.getElementById('year').innerHTML=dateTime.getFullYear();
    let hr=(dateTime.getHours());
    let min=paddZero(dateTime.getMinutes());
    let sec=paddZero(dateTime.getSeconds());
    if(hr>12){
        hr=hr-12;
        ampm.innerHTML='PM';
    }
    document.getElementById('hours').innerHTML=paddZero(hr);
    document.getElementById('min').innerHTML=min;
    document.getElementById('sec').innerHTML=sec;

}
function paddZero(num){
    return num<10?"0"+num:num
}
setInterval(displayTime,500);

