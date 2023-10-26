


let news_bg = document.querySelectorAll('#news-bg')

let bg_changer = function(){
    for (let i = 0 ; i < news_bg.length; i++){
        switch(i){
            case 0:
                news_bg[i].style.background = 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.50) 100%), url("assets/img/digital-dictionary-news-cover.svg"), lightgray 50%'
                news_bg[i].style.backgroundRepeat = 'no-repeat'
                news_bg[i].style.backgroundSize = 'cover'
                continue;
            case 1:
                news_bg[i].style.background = 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.50) 100%), url("assets/img/seminar-news-cover.svg"), lightgray 50%'
                news_bg[i].style.backgroundRepeat = 'no-repeat'
                news_bg[i].style.backgroundSize = 'cover'
                continue;
            case 2:
                news_bg[i].style.background = 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.50) 100%), url("assets/img/student-of-year-news-cover.svg"), lightgray 50%'
                news_bg[i].style.backgroundRepeat = 'no-repeat'
                news_bg[i].style.backgroundSize = 'cover'
                continue;
            default:
                news_bg[i].style.background = 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.50) 100%), url(), lightgray 50%'
                news_bg[i].style.backgroundRepeat = 'no-repeat'
                news_bg[i].style.backgroundSize = 'cover'
                continue;
            }
    } 
} 

bg_changer()