let search_subtitle = document.getElementById('search-subtitle')
search_subtitle.style.display = 'block'
search_subtitle.innerText = ('Здесь будет список преподавателей...')
document.getElementById('search-input').addEventListener('input', function(event) {
    let block_id = document.getElementById('search')
    let searchValue = event.target.value.toLowerCase(); 
    let teachers = ['Абдрахманова Зульфия Амуровна','Абдулин Артур Ахмадулович','Алешина Вероника Валерьевна',' Андронова Маргарита Наилевна',' Архипова Марина Николаевна',' Ахмадеева Виктория Олеговна',' Ахметова Анжела Эдуардовна',' Балдина Евгения Анатольевна','Басенко Дмитрий Сергеевич',' Булатов Александр Сергеевич','Веркина Юлия Алексеевна',' Войстрикова Ирина Александровна',' Голубьевская Дарья Олеговна','Дубровина Ольга Сергеевна',' Елисеев Егор Дмитриевич',' Еремин Алексей Александрович',' Жукова Кристина Ивановна','Жукова Наталья Вячеславовна',' Иванова Наталья Михайловна',' Карпенко Татьяна Николаевна',' Кичуткин Владимир Александрович',' Кондуров Евгений Васильевич','Корсун Лариса Борисовна','Костомаров Данил Вадимович',' Криванов Александр Аркадьевич','Литке Марина Игоревна','Микрюков Алексей Александрович',]; 
    let matchingTeachers = teachers.filter(function(teacher) { 
      return teacher.toLowerCase().includes(searchValue); 
    }); 
     
    let resultsDiv = document.querySelector('.results');
    
    if(resultsDiv) {
      resultsDiv.innerHTML = '';
      search_subtitle.style.display = 'none'
    } else {
    
      resultsDiv = document.createElement('div'); 
      resultsDiv.classList.add('results'); 
    }
    
    matchingTeachers.forEach(function(teacher) { 
      let teacherElem = document.createElement('p'); 
      teacherElem.textContent = teacher; 
      resultsDiv.appendChild(teacherElem); 
    }); 
      
    search.appendChild(resultsDiv); 
  });