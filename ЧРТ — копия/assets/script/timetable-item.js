let list_disable_mon = document.getElementById('timetable-disable-mon');
list_disable_mon.addEventListener("click", function(disable_mon){
    let list_all = document.querySelectorAll('#timetable-list-mon');
    let list = document.querySelector('#timetable-list-mon');
        if (list.style.display == 'flex'){
            list_disable_mon.style.transition = 'all, .2s'
            list_disable_mon.style.rotate = '0deg'
            for (let i = 0 ; i <list_all.length; i++){
                list_all[i].style.display = 'none';
                
            } 
        }
        
        else {
            list_disable_mon.style.transition = 'all, .2s'
            list_disable_mon.style.rotate = '90deg'
            for (let i = 0 ; i <list_all.length; i++){
                list_all[i].style.display = 'flex';
            } 
        }   
     
})


let list_disable_tue = document.getElementById('timetable-disable-tue');
list_disable_tue.addEventListener("click", function(disable_tue){
    let list_all = document.querySelectorAll('#timetable-list-tue');
    let list = document.querySelector('#timetable-list-tue');
        if (list.style.display == 'flex'){
            list_disable_tue.style.transition = 'all, .2s'
            list_disable_tue.style.rotate = '0deg'
            for (let i = 0 ; i <list_all.length; i++){
                list_all[i].style.display = 'none';
                
            } 
        }
        
        else {
            list_disable_tue.style.transition = 'all, .2s'
            list_disable_tue.style.rotate = '90deg'
            for (let i = 0 ; i <list_all.length; i++){
                list_all[i].style.display = 'flex';
            } 
        }   
     
})
        
let list_disable_wed = document.getElementById('timetable-disable-wed');
list_disable_wed.addEventListener("click", function(disable_wed){
    let list_all = document.querySelectorAll('#timetable-list-wed');
    let list = document.querySelector('#timetable-list-wed');
        if (list.style.display == 'flex'){
            list_disable_wed.style.transition = 'all, .2s'
            list_disable_wed.style.rotate = '0deg'
            for (let i = 0 ; i <list_all.length; i++){
                list_all[i].style.display = 'none';
                
            } 
        }
        
        else {
            list_disable_wed.style.transition = 'all, .2s'
            list_disable_wed.style.rotate = '90deg'
            for (let i = 0 ; i <list_all.length; i++){
                list_all[i].style.display = 'flex';
            } 
        }   
     
})

let list_disable_thu = document.getElementById('timetable-disable-thu');
list_disable_thu.addEventListener("click", function(disable_thu){
    let list_all = document.querySelectorAll('#timetable-list-thu');
    let list = document.querySelector('#timetable-list-thu');
        if (list.style.display == 'flex'){
            list_disable_thu.style.transition = 'all, .2s'
            list_disable_thu.style.rotate = '0deg'
            for (let i = 0 ; i <list_all.length; i++){
                list_all[i].style.display = 'none';
                
            } 
        }
        
        else {
            list_disable_thu.style.transition = 'all, .2s'
            list_disable_thu.style.rotate = '90deg'
            for (let i = 0 ; i <list_all.length; i++){
                list_all[i].style.display = 'flex';
            } 
        }   
     
})

let list_disable_fri = document.getElementById('timetable-disable-fri');
list_disable_fri.addEventListener("click", function(disable_fri){
    let list_active = document.getElementById('timetable-item-fri');
    let list_all = document.querySelectorAll('#timetable-list-fri');
    let list = document.querySelector('#timetable-list-fri');
        if (list.style.display == 'flex'){
            list_disable_fri.style.transition = 'all, .2s'
            list_disable_fri.style.rotate = '0deg'
            for (let i = 0 ; i <list_all.length; i++){
                list_all[i].style.display = 'none';
                
            } 
        }
        
        else {
            list_disable_fri.style.transition = 'all, .2s'
            list_disable_fri.style.rotate = '90deg'
            for (let i = 0 ; i <list_all.length; i++){
                list_all[i].style.display = 'flex';
            } 
        }   
     
})

let list_disable_sat = document.getElementById('timetable-disable-sat');
list_disable_sat.addEventListener("click", function(disable_sat){
    let list_all = document.querySelectorAll('#timetable-list-sat');
    let list = document.querySelector('#timetable-list-sat');
        if (list.style.display == 'flex'){
            list_disable_sat.style.transition = 'all, .2s'
            list_disable_sat.style.rotate = '0deg'
            for (let i = 0 ; i <list_all.length; i++){
                list_all[i].style.display = 'none';
                
            } 
        }
        
        else {
            list_disable_sat.style.transition = 'all, .2s'
            list_disable_sat.style.rotate = '90deg'
            for (let i = 0 ; i <list_all.length; i++){
                list_all[i].style.display = 'flex';
            } 
        }   
     
})


let date_day = function(){
    let day = new Date() 
    switch (day.getDay()){
        case 1: 
            document.getElementById('date-mon').innerHTML ='(Cегодня)'
            document.getElementById('date-tue').innerHTML = '(Завтра)'
        break;
        case 2: 
            document.getElementById('date-tue').innerHTML = '(Cегодня)'
            document.getElementById('date-wed').innerHTML = '(Завтра)'
        break;
        case 3: 
            document.getElementById('date-wed').innerHTML = '(Cегодня)'
            document.getElementById('date-thu').innerHTML ='(Завтра)'
        break;
        case 4: 
            document.getElementById('date-thu').innerHTML = '(Cегодня)'
            document.getElementById('date-fri').innerHTML = '(Завтра)'
        break;
        case 5: 
            document.getElementById('date-fri').innerHTML = '(Cегодня)'
            document.getElementById('date-sat').innerHTML = '(Завтра)'
        break;

        case 6: 
            document.getElementById('date-sat').innerHTML = '(Cегодня)'
        break;
        default:
            document.getElementById('date-mon').innerHTML = '(Завтра)'
        break;
    }
        
}

date_day()

