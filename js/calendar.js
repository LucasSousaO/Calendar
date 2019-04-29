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

let doSomething = (diasVazios) =>{
    let i =0;
    for(diasVazios= testeDate.getDay();diasVazios>0;diasVazios--){
        $("."+weekDay[i]).append("<br><br>&nbsp"); 
        i++;
    };
}

        $("#title").text(yearsMonth[dateMonth-1]);                                  //Just title

        for(i=0; i < weekDay.length; i++){                                          
            day = ("<ul class="+weekDay[i]+">"+ weekDay[i] + "</ul><br>");          
            $weekDays.append(day);
        };

        for(let dia =1;dia<=lastDay;dia++){                                         //for to fill the table
            testeDate = new Date(dateYear + "," + dateMonth + "," + dia) ;          //Date(1962, 6, 7);

                weekDay[testeDate.getDay()] != "Sunday" && dia == 1 ? doSomething(testeDate.getDay()): "";
                //console.log(yearsMonth[dateMonth-1] + " "+ dia + "th - /" + weekDay[testeDate.getDay()] );

                $("."+ weekDay[testeDate.getDay()]).append("<br><ul>"+dia+"</ul>");
        };

