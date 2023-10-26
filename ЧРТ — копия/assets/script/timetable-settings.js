const studentBtn = document.getElementById("timetable-settings-student-btn");
const teacherBtn = document.getElementById("timetable-settings-teacher-btn");
const teacherDisabler = document.getElementById("timtable-settings-page-disabler");
const studentDisabler = document.querySelectorAll("#menu-page-disabler");
studentBtn.nextElementSibling.style.background = "#4D4C4C";
function updateButtonStyles() {
    if (studentBtn.checked) {
        studentBtn.nextElementSibling.style.background = "#4D4C4C";
        teacherDisabler.style.display = "none"
    }
    else {
        studentBtn.nextElementSibling.style.background = "#272727";
        teacherDisabler.style.display = "block"
    }
    if (teacherBtn.checked) {
        for (let i = 0; i < studentDisabler.length; i++){
            studentDisabler[i].style.display = "none"
        }
        teacherBtn.nextElementSibling.style.background = "#4D4C4C";
    }
    else {
        teacherBtn.nextElementSibling.style.background = "#272727";
        for (let i = 0; i < studentDisabler.length; i++){
            studentDisabler[i].style.display = "flex"
        }
    }
}

studentBtn.addEventListener("change", updateButtonStyles);
teacherBtn.addEventListener("change", updateButtonStyles);

const firstCourseBtn = document.getElementById("timetable-settings-1st-course-btn")
const secondCourseBtn = document.getElementById("timetable-settings-2nd-course-btn")
const thirdCourseBtn = document.getElementById("timetable-settings-3rd-course-btn")
const fourthCourseBtn = document.getElementById("timetable-settings-4th-course-btn")
const fifthCourseBtn = document.getElementById("timetable-settings-5th-course-btn")
function courseSelect(){
    switch (true){
        case firstCourseBtn.checked:
            firstCourseBtn.nextElementSibling.style.color = "#fff";
            secondCourseBtn.nextElementSibling.style.color = "rgba(255, 255, 255, 0.50)"; 
            thirdCourseBtn.nextElementSibling.style.color = "rgba(255, 255, 255, 0.50)"; 
            fourthCourseBtn.nextElementSibling.style.color = "rgba(255, 255, 255, 0.50)"; 
            fifthCourseBtn.nextElementSibling.style.color = "rgba(255, 255, 255, 0.50)";  
            break;
        case secondCourseBtn.checked:
            secondCourseBtn.nextElementSibling.style.color = "#fff";
            firstCourseBtn.nextElementSibling.style.color = "rgba(255, 255, 255, 0.50)"; 
            thirdCourseBtn.nextElementSibling.style.color = "rgba(255, 255, 255, 0.50)"; 
            fourthCourseBtn.nextElementSibling.style.color = "rgba(255, 255, 255, 0.50)"; 
            fifthCourseBtn.nextElementSibling.style.color = "rgba(255, 255, 255, 0.50)";  
            break;
        case thirdCourseBtn.checked:
            firstCourseBtn.nextElementSibling.style.color = "rgba(255, 255, 255, 0.50)"; 
            secondCourseBtn.nextElementSibling.style.color = "rgba(255, 255, 255, 0.50)";
            fourthCourseBtn.nextElementSibling.style.color = "rgba(255, 255, 255, 0.50)"; 
            fifthCourseBtn.nextElementSibling.style.color = "rgba(255, 255, 255, 0.50)"; 
            thirdCourseBtn.nextElementSibling.style.color = "#fff"; 
            break; 
        case fourthCourseBtn.checked:
            firstCourseBtn.nextElementSibling.style.color = "rgba(255, 255, 255, 0.50)"; 
            secondCourseBtn.nextElementSibling.style.color = "rgba(255, 255, 255, 0.50)"; 
            thirdCourseBtn.nextElementSibling.style.color = "rgba(255, 255, 255, 0.50)"; 
            fifthCourseBtn.nextElementSibling.style.color = "rgba(255, 255, 255, 0.50)"; 
            fourthCourseBtn.nextElementSibling.style.color = "#fff"; 
            break;   
        case fifthCourseBtn.checked:
            fifthCourseBtn.nextElementSibling.style.color = "#fff"; 
            firstCourseBtn.nextElementSibling.style.color = "rgba(255, 255, 255, 0.50)"; 
            secondCourseBtn.nextElementSibling.style.color = "rgba(255, 255, 255, 0.50)"; 
            thirdCourseBtn.nextElementSibling.style.color = "rgba(255, 255, 255, 0.50)"; 
            fourthCourseBtn.nextElementSibling.style.color = "rgba(255, 255, 255, 0.50)"; 
            break; 
        default:
            firstCourseBtn.nextElementSibling.style.color = "rgba(255, 255, 255, 0.50)"; 
            secondCourseBtn.nextElementSibling.style.color = "rgba(255, 255, 255, 0.50)"; 
            thirdCourseBtn.nextElementSibling.style.color = "rgba(255, 255, 255, 0.50)"; 
            fourthCourseBtn.nextElementSibling.style.color = "rgba(255, 255, 255, 0.50)"; 
            fifthCourseBtn.nextElementSibling.style.color = "rgba(255, 255, 255, 0.50)"; 
            break;        
    }
    
}

firstCourseBtn.addEventListener("change", courseSelect);
secondCourseBtn.addEventListener("change",courseSelect);
thirdCourseBtn.addEventListener("change", courseSelect);
fourthCourseBtn.addEventListener("change",courseSelect);
fifthCourseBtn.addEventListener("change", courseSelect);

document.addEventListener("DOMContentLoaded", function() {
    const timetableSettings1stCourseBtn = document.getElementById("timetable-settings-1st-course-btn");
    const timetableSettings2ndCourseBtn = document.getElementById("timetable-settings-2nd-course-btn");
    const timetableSettings3rdCourseBtn = document.getElementById("timetable-settings-3rd-course-btn");
    const timetableSettings4thCourseBtn = document.getElementById("timetable-settings-4th-course-btn");
    const timetableSettings5thCourseBtn = document.getElementById("timetable-settings-5th-course-btn");
    const timetableSettingsItem = document.querySelector(".groupe__list");
    
    timetableSettings1stCourseBtn.addEventListener("change", function() {
    if (timetableSettings1stCourseBtn.checked) {
        timetableSettingsItem.innerHTML = `
                    <p>Ис-172</p>
                    <p>Ис-177</p>
                    <p>Кб-175</p>
                    <p>Кб-178</p>
                    <p>Пр-173</p>
                    <p>Рк-174</p>
                    <p>Рт-170</p>
                    <p>Рт-176</p>
                    <p>Са-171</p>`;
                }
            });
            
    timetableSettings2ndCourseBtn.addEventListener("change", function() {
    if (timetableSettings2ndCourseBtn.checked) {
        timetableSettingsItem.innerHTML = `
                    <p>Ис-264</p>
                    <p>Кб-267</p>
                    <p>Кб-269</p>
                    <p>Пр-265</p>
                    <p>Рк-266</p>
                    <p>Рт-262</p>
                    <p>Рт-268</p>
                    <p>Са-263</p>`;
        }
    });
    timetableSettings3rdCourseBtn.addEventListener("change", function() {
    if (timetableSettings3rdCourseBtn.checked) {
            timetableSettingsItem.innerHTML = `
                        <p>Ис-356</p>
                        <p>Ис-361</p>
                        <p>Кб-358</p>
                        <p>Кб-359</p>
                        <p>Рк-357</p>
                        <p>Рт-354</p>
                        <p>Рт-360</p>
                        <p>Са-355</p>`;
        }
    });
    
    timetableSettings4thCourseBtn.addEventListener("change", function() {
        if (timetableSettings4thCourseBtn.checked) {
            timetableSettingsItem.innerHTML = `
                        <p>Ис-449</p>
                        <p>Ис-453</p>
                        <p>Кб-451</p>
                        <p>Рк-450</p>
                        <p>Са-448</p>`;
          }
        });
    
        timetableSettings5thCourseBtn.addEventListener("change", function() {
            if (timetableSettings5thCourseBtn.checked) {
                timetableSettingsItem.innerHTML = `
                            <p></p>`;
              }
            });

});





