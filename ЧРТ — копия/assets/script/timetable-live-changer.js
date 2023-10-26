fetch('https://chrtbackend.ravonzz.repl.co/api/timetable')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Ошибка:', error);
  });