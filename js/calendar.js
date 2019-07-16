let locale = 'Belo Horizonte';
let state = "MG";
let initial = 'http://apiadvisor.climatempo.com.br';

//function - axios.get(initialLink+secondLink+'?limit=50&apikey='+key).then(function(response)

// api key weather prediction b08f2d138c8c92fba15efc2031a4e0df
const key = 'b08f2d138c8c92fba15efc2031a4e0df';
let temperatura = 0;
//FIND ID
let id = '';
// search for id /api/v1/locale/city?name=CityName&state=StateAbbr&token=your-app-token
let idLocale = axios.get(initial+'/api/v1/locale/city?name='+locale+'&state='+state+'&token='+key).then(function(response){

    let id= response.data[0].id;
//FIND THE WEATHER
const clima = '/api/v1/weather/locale/'
// weather - real time get/  /api/v1/weather/locale/:id/current?token=your-app-token
//ex. curl -i http://apiadvisor.climatempo.com.br/api/v1/weather/locale/3477/current?token=your-app-token
let weather = axios.get(initial+clima+id+'/current?token='+key).then(function(response){

let sensacao = (response.data.data.sensation);
let temperatura = (response.data.data.temperature);
let humidade = (response.data.data.humidity);
//já com dados de temperatura, humdade e sensação termica


let dateToday = new Date();

const yearsMonth = ["January", "February", "March","April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

new Vue({
    el: "#calendar",
        data:{
            date: dateToday.getDate()+"/"+dateToday.getMonth()+"/"+dateToday.getFullYear(),     //DD/MM/YYYY
            day: dateToday.getDate(),                                                           //DD
            month: yearsMonth[dateToday.getMonth()],                                            //MMMM
            year: dateToday.getFullYear(),                                                      //YYYY
            actualMonth: yearsMonth[new Date().getMonth()].toUpperCase(),                       //MMMM TO UPPERCASE
            lastDay: new Date(2019, dateToday.getMonth()+1, 0).getDate(),                       //DD LAST DAY OF THE MONTH
            HH:new Date().getHours(),                                                           //HH
            MM:new Date().getMinutes(),                                                         //MM
            SS:new Date().getSeconds(),                                                         //SS
            DDDD: weekDay[dateToday.getDay()].toUpperCase(),                                   //WEEK DAY UPPERCASE
            months: [{mes: "January", id: "0"},{mes: "February", id: "1"},{mes: "March", id: "2"},{mes:"April", id: "3"},{mes: "May", id: "4"},{mes: "June", id: "5"},{mes: "July", id: "6"},{mes: "August", id: "7"},{mes: "September", id: "8"},{mes: "October", id: "9"},{mes: "November", id: "10"},{mes: "December", id: "11"}],
            weekDia: weekDay[dateToday.getDate()],
            show: true,
            se: false,                                            //WEEK DAY
            weather: temperatura,
            humidity: humidade,
            sensation: sensacao,
            city: locale,
        },
        watch:{
            //ATUALIZA HORA - NÃO ESTÁ FUNCIONANDO automaticamente
            hourUpdate: function(){
                this.HH = new Date().getHours();    
            },
            minutesUpdate: function(){                                                //HH
                this.MM = new Date().getMinutes();  
            },
            secondsUpdate: function (){                                             //MM
                this.SS = new Date().getSeconds(); 
            },
  
        },

        

        methods:{
                
            monthUpdate: function(newMonth){

                    //this.se == false ? (this.se = true) : (this.se = false) ;

                    //this.show = false;
                    //setTimeout(function(){this.show = true;
                    //console.log("mudou também");},5000);

                    this.month = yearsMonth[newMonth];
                    //UPDATE FOR THE NEXT MONTH
                    let newDate= new Date(this.month + ","+ 01  +",2019"); //dateToday1 = new Date("03,03,2019");
                    let lastDay = new Date(2019, newDate.getMonth()+1, 0).getDate();
                    let firstDay = weekDay[newDate.getDay()];
                    //CLEANING THE FULL TABLE
                    for(let dd = 1; dd <= lastDay; dd++){
                        $("#"+dd).remove();
                    }
                    for(dd=0;dd<7;dd++){ 
                        $("#"+weekDay[dd]).remove();
                    }
                    //SET ACTUAL DAY AND CREATE WEEK
                    let actualDay = dateToday.getDate();
                    let actualMonth = dateToday.getMonth();
                    console.log(newMonth);
                    this.createWeek();

                    //CREATE EMPTY SLOT
                    let ajustFirstDay =0;
                    firstDay != "Sunday"?  ajustFirstDay = 0 : ajustFirstDay = newDate.getDay();

                    while(ajustFirstDay<newDate.getDay()){
                        let insertDay = "<ul>&nbsp</ul>";
                        $("#"+ weekDay[ajustFirstDay]).append(insertDay);
                        ajustFirstDay++;
                    }  
                    //INSERT NUMBERS IN THE TABLE
                    for(let dd = 1; dd <= lastDay; dd++){
                        let insertDay ='';
                        newDate = new Date(this.month + ","+ dd  +",2019");
                        (dd == actualDay)&&(actualMonth==newDate.getMonth())? insertDay = "<ul class= today " + weekDay[newDate.getDay()] +" id="+dd+">"+dd+"</ul>": insertDay = "<ul class= " + weekDay[newDate.getDay()] +" id="+dd+">"+dd+"</ul>";
                            $("#"+ weekDay[newDate.getDay()]).append(insertDay)
                    }
            },
            createWeek: function(){
                console.log("criei semana");
                for(let dd=0;dd<7;dd++){ //create table title
                    $(".table-month").append("<ul id="+weekDay[dd]+" class='week-days'>"+weekDay[dd]+"</ul>");
                }
            },
/*            beforeEnter: function (el) {
                el.style.opacity = 1
            },
            enter: function (el, done) {
            //    console.log("tentativa");
             //   this.createWeek;
                //Velocity(el, { opacity: 1, fontSize: '1em', display: "flex" }, { duration: 300 })
                Velocity(el, { fontSize: '1em' }, { complete: done })
            },
            leave: function (el, done) {
                Velocity(el, { translateX: '0px', rotateZ: '90deg', transformOrigin: ["X Y Z","00% 00% 200px"] }, { duration: 300 })
                Velocity(el, {
                    translateY: '30px',
                    translateX: '30px',
                    opacity: 0
                })
                Velocity(el, { translateX: '0px',translateY: '00px', rotateZ: '0deg', transformOrigin: ["X Y Z","00% 00% 00px"] }, { complete: done })
            },
*/
            updateTime: function(){
                console.log("The time was updated!");
                this.HH = new Date().getHours();                                                         //HH
                this.MM = new Date().getMinutes();                                                         //MM
                this.SS = new Date().getSeconds();
            },
            
        },
        mounted: () => {
                        let actualDay = dateToday.getDate();
                        let actualMonth = dateToday.getMonth();
                        let ajuste = new Date((actualMonth+1) + ","+ 01  +",2019").getDay();
        
                        for(let dd=0;dd<7;dd++){ //create table title
                            $(".table-month").append("<ul id="+weekDay[dd]+" class='week-days'>"+weekDay[dd]+"</ul>");
                        }
        
                        //create table title
                        let lastDay = new Date(2019, new Date(actualMonth + ","+ 01  +",2019").getMonth(), 0).getDate();
                        let firstDay = weekDay[new Date((actualMonth+1) + ","+ 01  +",2019").getDay()]; 
        
        
                        let ajustFirstDay =0;
        
                        firstDay != "Sunday"?  ajustFirstDay = 0 : ajustFirstDay = ajuste;
                        //empty slot

                        while(ajustFirstDay<ajuste){
                            let insertDay = "<ul>&nbsp</ul>";
                            $("#"+ weekDay[ajustFirstDay]).append(insertDay);
                            ajustFirstDay++;
                        }  
        
                     //create the real table
                        for(let dd = 1; dd <= lastDay; dd++){
                            let insertDay ='';
                            newDate = new Date(actualMonth+1 + ","+ dd  +",2019");
                            (dd == actualDay)&&(actualMonth==newDate.getMonth())? insertDay = "<ul class= today " + weekDay[newDate.getDay()] +" id="+dd+">"+dd+"</ul>": insertDay = "<ul class= " + weekDay[newDate.getDay()] +" id="+dd+">"+dd+"</ul>";
                                //let insertDay = "<ul class= " + weekDay[newDate.getDay()] +">"+dd+"</ul>";
                                $("#"+ weekDay[newDate.getDay()]).append(insertDay);
                        }
    
        },

});

//fim de dados.
});
});
