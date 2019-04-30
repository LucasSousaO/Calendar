let dateToday = new Date();

let dateMonth = dateToday.getMonth()+1;

let dateDay = dateToday.getDay(); // Sunday - Saturday : 0 - 6
let dateDayNumber = dateToday.getDate();
let dateYear = dateToday.getFullYear();
let lastDay = new Date(2019, dateMonth, 0).getDate();

const yearsMonth = ["January", "February", "March","April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let monthName = yearsMonth[dateMonth-1];
let testeDate = "DD/MM/YYYY";
const $weekDays = $(".week-days");
let day = "";

new Vue({
    el: "#calendar",
    data:{
        date: dateDayNumber+"/"+dateMonth+"/"+dateYear, //DD/MM/YYYY
        day: dateDayNumber,                             //DD
        month: monthName,                               //MMMM
        year: dateYear,                                 //YYYY
        weekDay: dateDay,                               //Sunday - Saturday : 0 - 6
        months: [{mes: "January", id: "1"},{mes: "February", id: "2"},{mes: "March", id: "3"},{mes:"April", id: "4"},{mes: "May", id: "5"},{mes: "June", id: "6"},{mes: "July", id: "7"},{mes: "August", id: "8"},{mes: "September", id: "9"},{mes: "October", id: "10"},{mes: "November", id: "11"},{mes: "December", id: "12"}],
        weekDia: weekDay[dateDayNumber],
        weeks: [{dia: "Sunday"},{dia: "Monday"},{dia: "Tuesday"},{dia: "Wednesday"},{dia: "Thursday"},{dia: "Friday"},{dia: "Saturday"}],
    },
    computed:{
        
    },
    methods:{
        firstUpdate: () => {
            let doSomething = (diasVazios) =>{
                let i =0;
                alert("the first day of the month would be "+dateDayNumber);
                for(diasVazios= testeDate.getDay();diasVazios>0;diasVazios--){
                    $("."+weekDay[i]).append("<br><br>&nbsp"); 
                    i++;
                };
                
            };

            for(let dia =1;dia<=lastDay;dia++){                                         //for to fill the table
                testeDate = new Date(dateYear + "," + dateMonth + "," + dia) ;          //Date(1962, 6, 7);
    
                    weekDay[testeDate.getDay()] != "Sunday" && dia == 1 ? doSomething(testeDate.getDay()): "";
                    console.log(yearsMonth[dateMonth-1] + " "+ dia + "th - /" + weekDay[testeDate.getDay()] );
    
                  
            };
        
            
        },
        monthUpdate: (month) =>{
            alert("the next update will be for "+month);
            //UPDATE FOR THE NEXT MONTH
            let dateToday= new Date("," + month + ","+ 01  +",2019"); //dateToday1 = new Date("03,03,2019");
            console.log(dateToday);
        },

        
    },
})




/*

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

*/