let dateToday = new Date();
let dateMonth = dateToday.getMonth()+1;
let dateDay = dateToday.getDay(); // Sunday - Saturday : 0 - 6
let dateDayNumber = dateToday.getDate();
let dateYear = dateToday.getFullYear();
let lastDay = new Date(2019, dateMonth, 0).getDate();
const yearsMonth = ["January", "February", "March","April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let testeDate = "DD/MM/YYYY";
const $weekDays = $(".week-days");
let day = "";

        $("#title").text(yearsMonth[dateMonth-1]);
        for(i=0; i < weekDay.length; i++){
            day = ("<ul class="+weekDay[i]+">"+ weekDay[i] + "</ul><br>");
            $weekDays.append(day);//.find("ul").attr("class", weekDay[i]);
        }

        for(let i =1;i<=lastDay;i++){
            testeDate = new Date(dateYear + "," + dateMonth + "," + i) ; //Date(1962, 6, 7);
                console.log(yearsMonth[dateMonth-1] + " "+ i + "th - /" + weekDay[testeDate.getDay()] );

                $("."+ weekDay[testeDate.getDay()]).append("<br><ul>"+i+"</ul>");
            

        }

