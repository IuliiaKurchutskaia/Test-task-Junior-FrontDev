
new Vue({
el: "#app",
    template: `
    <div class="form form__name">
    <label for="surname">Фамилия</label>
    <input v-model="Surname" name="surname" placeholder="Фамилия">

    <label for="name">Имя</label>
    <input v-model="Name" name="name" placeholder="Имя">
   
    <label for="SecondName">Отчество</label>
    <input v-model="SecondName" name="SecondName" placeholder="Отчество">
    

    <input type="date" :value="myDate && myDate.toISOString().split('T')[0]"
                     @input="myDate = getDateClean($event.target.valueAsDate)">
                     <code>
                     myDate: {{ myDate }}</code>
                     <button @click="setMyDateToToday">Set date one to today</button>
                     <button @click="addADayToMyDate">Add a day to my date</button>
                     </div>
                     `,
    data: {
name:"",
myDate: new Date('2011-04-11T10:20:30Z')
    },
    methods: {
        setMyDateToToday() {
            this.myDate = new Date();
        },
        addADayToMyDate() {
          if (this.myDate) // as myDate can be null
            // you have to set the this.myDate again, so vue can detect it changed
            // this is not a caveat of this specific solution, but of any binding of dates
            this.myDate = new Date(this.myDate.setDate(this.myDate.getDate() + 1));
        },
        getDateClean(currDate) {
            // need to convert to UTC to get working input filter
            console.log(currDate);
            let month = currDate.getUTCMonth() + 1;
            if (month < 10) month = "0" + month;
            let day = currDate.getUTCDate();
            if (day < 10) day = "0" + day;
            const dateStr =
                currDate.getUTCFullYear() + "-" + month + "-" + day + "T00:00:00";
            console.log(dateStr);
            const d = new Date(dateStr);
            console.log(d);
            return d;
        }
      }
  })

  
