let groupe_list = document.getElementById('groupe-list');
let select_arrow = document.getElementById('groupe-select-list')
select_arrow.addEventListener("click", function(){
          if (groupe_list.style.display == 'flex'){
            groupe_list.style.display = 'none'
            select_arrow.style.transition = 'all, .2s'
            select_arrow.style.rotate = '0deg'
        }
          
          else {
            groupe_list.style.display = 'flex'
            select_arrow.style.transition = 'all, .2s'
            select_arrow.style.rotate = '-90deg'
        }   
       
  })
