
new Vue({
el: "#personal",
    template: `
    <div class="pages">
    <div class="page personal">
    <label class="title" for="surname">ФАМИЛИЯ</label>
    <input v-model.trim="surname" name="surname" placeholder="Фамилия">


    <label for="name">Имя</label>
    <input v-model.trim="name" name="name" placeholder="Имя">
   

    <label for="SecondName">Отчество</label>
    <input v-model.trim="secondName" name="secondName" placeholder="Отчество">
    

    <label for="birthday">Дата рождения</label>
    <input name="birthday" type="date" :value="myDate && myDate.toISOString().split('T')[0]"
                     @input="myDate = getDateClean($event.target.valueAsDate)">
                   
    <label for="phone">Номер телефона</label>
    <span class="input-group-addon"><span>+7</span></span>
    <input type="tel" name="phone" id="phone" placeholder="(555) 555-5555" autocomplete="tel" maxlength="14" class="form-control" pattern="[(][0-9]{3}[)] [0-9]{3}-[0-9]{4}" required />
  

    <form class="male">
      <span>Пол: {{ picked }}</span>
      <input type="radio" id="male" value="Мужской" v-model="picked">
      <label for="male">Мужской</label>
 
      <input type="radio" id="female" value="Женский" v-model="picked">
      <label for="female">Женский</label>
   <form>


   <span>Группа клиентов: {{ clientGr }}</span>
    <select v-model="clientGr" multiple>
    <option  v-for="group in groups" v-bind:value="group.value">
       {{ group.text }}
    </option>
    </select>
    

    <span>Лечащий врач: {{ doctor }}</span>
    <select v-model="doctor">
      <option  v-for="doctor in doctors" v-bind:value="doctor.value">
      {{ doctor.text }}
    </option>
    </select>


    <label for="sms">Не отправлять СМС</label>
    <input name="sms" type="checkbox" value="sms" v-model="isChecked" />


    </div>
</div>
 
     `,
    data: {
    name:"",
    surname:"",
    secondName:"",
    phone:"",
    picked:"",
    clientGr: 'ОМС',
    groups: [
      { text: 'VIP', value: 'VIP' },
      { text: 'Проблемные', value: 'Проблемные' },
      { text: 'ОМС', value: 'ОМС' }
    ],
    doctor: 'Иванов',
    doctors: [
      { text: 'Иванов', value: 'Иванов' },
      { text: 'Захаров', value: 'Захаров' },
      { text: 'Чернышева', value: 'Чернышева' }
    ],
    myDate: new Date('2011-04-11T10:20:30Z')
    },
    methods: {
    
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

  

  
new Vue({
    el: "#adress",
    template: `
    <div class="adress">
       
    <label for="index">Индекс</label>
    <input v-model.number="index" name="index" placeholder="Индекс">

   
    <label for="country">Страна</label>
    <input list="country" value="" type="text" />
    <datalist id="country">
 <option selected="selected" data-id="10414533690" value="+7">Россия</option><option data-id="26334910464" value="+7">Абхазия</option><option data-id="10400654407" value="+61">Австралия</option><option data-id="10426428818" value="+43">Австрия</option><option data-id="10410450732" value="+994">Азербайджан</option><option data-id="10410522537" value="+355">Албания</option><option data-id="10419531540" value="+213">Алжир</option><option data-id="10395022134" value="+1264">Ангилья</option><option data-id="10400909101" value="+244">Ангола</option><option data-id="10396157513" value="+376">Андорра</option><option data-id="10401935333" value="+1268">Антигуа и Барбуда</option><option data-id="10425952826" value="+599">Антильские острова</option><option data-id="10401434079" value="+54">Аргентина</option><option data-id="10417232037" value="+374">Армения</option><option data-id="10410310303" value="+93">Афганистан</option><option data-id="10407551720" value="+1242">Багамские острова</option><option data-id="10396352095" value="+880">Бангладеш</option><option data-id="10411706009" value="+1246">Барбадос</option><option data-id="10406995556" value="+973">Бахрейн</option><option data-id="10423319006" value="+375">Беларусь</option><option data-id="10394079228" value="+501">Белиз</option><option data-id="10408272261" value="+32">Бельгия</option><option data-id="10423428619" value="+229">Бенин</option><option data-id="10414686106" value="+1441">Бермуды</option><option data-id="10393631600" value="+359">Болгария</option><option data-id="10409174087" value="+591">Боливия</option><option data-id="10396139862" value="+387">Босния/Герцеговина</option><option data-id="10401213745" value="+267">Ботсвана</option><option data-id="10394346015" value="+55">Бразилия</option><option data-id="10409651721" value="+1284">Британские Виргинские о-ва</option><option data-id="10419484235" value="+673">Бруней</option><option data-id="10404060904" value="+226">Буркина Фасо</option><option data-id="10404374905" value="+257">Бурунди</option><option data-id="10404540364" value="+975">Бутан</option><option data-id="10412870819" value="+678">Вануату</option><option data-id="10411136417" value="+379">Ватикан</option><option data-id="10406170538" value="+44">Великобритания</option><option data-id="10409956165" value="+36">Венгрия</option><option data-id="10396486463" value="+58">Венесуэла</option><option data-id="10415852578" value="+84">Вьетнам</option><option data-id="10393450888" value="+241">Габон</option><option data-id="10417683703" value="+509">Гаити</option><option data-id="10403255122" value="+592">Гайана</option><option data-id="10399865285" value="+220">Гамбия</option><option data-id="10397676008" value="+233">Гана</option><option data-id="10414930207" value="+590">Гваделупа</option><option data-id="10419428643" value="+502">Гватемала</option><option data-id="10413226540" value="+224">Гвинея</option><option data-id="10403555674" value="+245">Гвинея-Бисау</option><option data-id="10397571399" value="+49">Германия</option><option data-id="10399224101" value="+441481">Гернси остров</option><option data-id="10406295560" value="+350">Гибралтар</option><option data-id="10399351736" value="+504">Гондурас</option><option data-id="10412717530" value="+852">Гонконг</option><option data-id="12850988277547" value="+970">Государство Палестина</option><option data-id="10395467357" value="+1473">Гренада</option><option data-id="10408186696" value="+299">Гренландия</option><option data-id="10410192803" value="+30">Греция</option><option data-id="10411801535" value="+995">Грузия</option><option data-id="10414151425" value="+243">ДР Конго</option><option data-id="10398024550" value="+45">Дания</option><option data-id="10392982119" value="+447">Джерси остров</option><option data-id="10423910652" value="+253">Джибути</option><option data-id="10392890835" value="+18">Доминиканская Республика</option><option data-id="10402537077" value="+20">Египет</option><option data-id="10422229795" value="+260">Замбия</option><option data-id="10405794288" value="+212">Западная Сахара</option><option data-id="10410213419" value="+263">Зимбабве</option><option data-id="10424542073" value="+972">Израиль</option><option data-id="10415489530" value="+91">Индия</option><option data-id="10394991378" value="+62">Индонезия</option><option data-id="10412777633" value="+962">Иордания</option><option data-id="10405044887" value="+964">Ирак</option><option data-id="10419405993" value="+98">Иран</option><option data-id="10421760139" value="+353">Ирландия</option><option data-id="10420187771" value="+354">Исландия</option><option data-id="10423450359" value="+34">Испания</option><option data-id="10414775922" value="+39">Италия</option><option data-id="10418754394" value="+967">Йемен</option><option data-id="10396069806" value="+238">Кабо-Верде</option><option data-id="10415971874" value="+7">Казахстан</option><option data-id="10410376034" value="+855">Камбоджа</option><option data-id="10417801476" value="+237">Камерун</option><option data-id="10393621238" value="+1">Канада</option><option data-id="10424568667" value="+974">Катар</option><option data-id="10421430373" value="+254">Кения</option><option data-id="10401168591" value="+357">Кипр</option><option data-id="10397251386" value="+86">Китай</option><option data-id="10398961528" value="+57">Колумбия</option><option data-id="100398334301" value="+269">Коморы (Сою́з Комо́рских Острово́в)</option><option data-id="10415000877" value="+506">Коста-Рика</option><option data-id="10397441630" value="+225">Кот-д'Ивуар</option><option data-id="10400805253" value="+53">Куба</option><option data-id="10425905274" value="+965">Кувейт</option><option data-id="10417619125" value="+682">Кука острова</option><option data-id="10405644775" value="+996">Кыргызстан</option><option data-id="10422182119" value="+856">Лаос</option><option data-id="10405172143" value="+371">Латвия</option><option data-id="10404932758" value="+266">Лесото</option><option data-id="10426378265" value="+231">Либерия</option><option data-id="10394492001" value="+961">Ливан</option><option data-id="10396193388" value="+218">Ливия</option><option data-id="10408982062" value="+370">Литва</option><option data-id="10402377389" value="+423">Лихтенштейн</option><option data-id="10417321877" value="+352">Люксембург</option><option data-id="10421455265" value="+230">Маврикий</option><option data-id="10402331337" value="+222">Мавритания</option><option data-id="10395008003" value="+261">Мадагаскар</option><option data-id="10403452946" value="+389">Македония</option><option data-id="100398411098" value="+265">Малави</option><option data-id="10424318428" value="+60">Малайзия</option><option data-id="10392808561" value="+223">Мали</option><option data-id="10419625380" value="+960">Мальдивские острова</option><option data-id="10418580649" value="+356">Мальта</option><option data-id="10398888997" value="+212">Марокко</option><option data-id="10405114643" value="+52">Мексика</option><option data-id="10395900020" value="+258">Мозамбик</option><option data-id="10397135919" value="+373">Молдова</option><option data-id="10406156316" value="+377">Монако</option><option data-id="10400052977" value="+976">Монголия</option><option data-id="10397507309" value="+95">Мьянма (Бирма)</option><option data-id="10425274320" value="+441624">Мэн остров</option><option data-id="10398918582" value="+264">Намибия</option><option data-id="10395547483" value="+977">Непал</option><option data-id="10403897067" value="+227">Нигер</option><option data-id="10403906713" value="+234">Нигерия</option><option data-id="10416691196" value="+31">Нидерланды (Голландия)</option><option data-id="10415455264" value="+505">Никарагуа</option><option data-id="10416927951" value="+64">Новая Зеландия</option><option data-id="10417478473" value="+687">Новая Каледония</option><option data-id="10403907946" value="+47">Норвегия</option><option data-id="10407515868" value="+971">О.А.Э.</option><option data-id="10413735381" value="+968">Оман</option><option data-id="10407624473" value="+92">Пакистан</option><option data-id="32108942709" value="+441624">Палау</option><option data-id="10417127108" value="+507">Панама</option><option data-id="10414119671" value="+675">Папуа Новая Гвинея</option><option data-id="10397730315" value="+595">Парагвай</option><option data-id="10397453891" value="+51">Перу</option><option data-id="10420475109" value="+64">Питкэрн остров</option><option data-id="10414896014" value="+48">Польша</option><option data-id="10396879941" value="+351">Португалия</option><option data-id="10413603686" value="+1787">Пуэрто Рико</option><option data-id="10410395082" value="+242">Республика Конго</option><option data-id="10395017596" value="+262">Реюньон</option><option data-id="10421210322" value="+250">Руанда</option><option data-id="10416439221" value="+40">Румыния</option><option data-id="10395431810" value="+1">США</option><option data-id="10401272160" value="+503">Сальвадор</option><option data-id="10418117522" value="+685">Самоа</option><option data-id="10425587057" value="+378">Сан-Марино</option><option data-id="10402425385" value="+239">Сан-Томе и Принсипи</option><option data-id="10410580805" value="+966">Саудовская Аравия</option><option data-id="10408209383" value="+268">Свазиленд</option><option data-id="10411324250" value="+1758">Святая Люсия</option><option data-id="10394159876" value="+850">Северная Корея</option><option data-id="10392716690" value="+248">Сейшеллы</option><option data-id="10415402038" value="+508">Сен-Пьер и Микелон</option><option data-id="10399264429" value="+221">Сенегал</option><option data-id="10413542523" value="+1869">Сент Китс и Невис</option><option data-id="10397340738" value="+1784">Сент-Винсент и Гренадины</option><option data-id="10403797723" value="+381">Сербия</option><option data-id="10403882021" value="+65">Сингапур</option><option data-id="10421914141" value="+963">Сирия</option><option data-id="10394488739" value="+421">Словакия</option><option data-id="10412478477" value="+386">Словения</option><option data-id="10399243721" value="+677">Соломоновы острова</option><option data-id="10402270246" value="+252">Сомали</option><option data-id="10422456146" value="+249">Судан</option><option data-id="10399143993" value="+597">Суринам</option><option data-id="10419209718" value="+232">Сьерра-Леоне</option><option data-id="10426480621" value="+992">Таджикистан</option><option data-id="10420570186" value="+66">Таиланд</option><option data-id="10394605145" value="+886">Тайвань</option><option data-id="10412575230" value="+255">Танзания</option><option data-id="10396777362" value="+1649">Теркс и Кейкос</option><option data-id="10406981529" value="+228">Того</option><option data-id="10394734441" value="+690">Токелау острова</option><option data-id="10417023658" value="+676">Тонга</option><option data-id="10424065948" value="+1868">Тринидад и Тобаго</option><option data-id="10400207372" value="+688">Тувалу</option><option data-id="10399201022" value="+216">Тунис</option><option data-id="10396721959" value="+993">Туркменистан</option><option data-id="10406909768" value="+90">Турция</option><option data-id="10410627224" value="+256">Уганда</option><option data-id="10423529949" value="+998">Узбекистан</option><option data-id="10424076448" value="+380">Украина</option><option data-id="10395074682" value="+681">Уоллис и Футуна о-ва</option><option data-id="10426234429" value="+598">Уругвай</option><option data-id="10395058357" value="+298">Фарерские острова</option><option data-id="10423400059" value="+679">Фиджи</option><option data-id="10423933302" value="+63">Филиппины</option><option data-id="10405620585" value="+358">Финляндия</option><option data-id="10394185598" value="+33">Франция</option><option data-id="10395243227" value="+689">Французская Полинезия</option><option data-id="10421079332" value="+385">Хорватия</option><option data-id="10393424473" value="+235">Чад</option><option data-id="26287387136" value="+382">Черногория</option><option data-id="10395033214" value="+420">Чехия</option><option data-id="10397429545" value="+56">Чили</option><option data-id="10401982134" value="+41">Швейцария</option><option data-id="10393232409" value="+46">Швеция</option><option data-id="10400772860" value="+94">Шри-Ланка</option><option data-id="10408281200" value="+593">Эквадор</option><option data-id="10413994177" value="+240">Экваториальная Гвинея</option><option data-id="10422842223" value="+291">Эритрея</option><option data-id="10399393757" value="+372">Эстония</option><option data-id="10404948045" value="+251">Эфиопия</option><option data-id="10396767805" value="+27">ЮАР</option><option data-id="10409076784" value="+82">Южная Корея</option><option data-id="26334910720" value="+7">Южная Осетия</option><option data-id="10415454380" value="+1876">Ямайка</option><option data-id="10404808625" value="+81">Япония</option>
 </datalist>

  
 <label for="region">Область</label>
 <input list="region" value="" type="text" />
 <datalist id="region">
 <option id="RU-AD">Республика Адыгея</option>
 <option id="RU-AL">Республика Алтай </option>
 <option id="RU-BA">Республика Башкортостан </option>
 <option id="RU-BU" value="RU-BU">Республика Бурятия </option>
 <option id="RU-DA" value="RU-DA">Республика Дагестан </option>
 <option id="RU-IN" value="RU-IN">Республика Ингушетия </option>
 <option id="RU-KB" value="RU-KB">Кабардино-Балкарская Республика</option>
 <option id="RU-KL" value="RU-KL">Республика Калмыкия </option>
 <option id="RU-KC" value="RU-KC">Карачаево-Черкесская Республика</option>
 <option id="RU-KR" value="RU-KR">Республика Карелия </option>
 <option id="RU-KO" value="RU-KO">Республика Коми </option>
 <option id="RU-ME" value="RU-ME">Республика Марий Эл </option>
 <option id="RU-MO" value="RU-MO">Республика Мордовия </option>
 <option id="RU-SA" value="RU-SA">Республика Саха (Якутия) </option>
 <option id="RU-SE" value="RU-SE">Республика Северная Осетия - Алания </option>
 <option id="RU-TA" value="RU-TA">Республика Татарстан</option>
 <option id="RU-TY" value="RU-TY">Республика Тыва </option>
 <option id="RU-UD" value="RU-UD">Удмуртская Республика </option>
 <option id="RU-KK" value="RU-KK">Республика Хакасия </option>
 <option id="RU-CE" value="RU-CE">Чеченская Республика</option>
 <option id="RU-CU" value="RU-CU">Чувашская Республика</option>
 <option id="RU-ALT" value="RU-ALT">Алтайский край</option>
 <option id="RU-ZAB" value="RU-ZAB">Забайкальский край</option>
 <option id="RU-KAM" value="RU-KAM">Камчатский край</option>
 <option id="RU-KDA" value="RU-KDA">Краснодарский край</option>
 <option id="RU-KYA" value="RU-KYA">Красноярский край</option>
 <option id="RU-PER" value="RU-PER">Пермский край</option>
 <option id="RU-PRI" value="RU-PRI">Приморский край</option>
 <option id="RU-STA" value="RU-STA">Ставропольский край</option>
 <option id="RU-KHA" value="RU-KHA">Хабаровский край</option>
 <option id="RU-AMU" value="RU-AMU">Амурская область </option>
 <option id="RU-ARK" value="RU-ARK">Архангельская область</option>
 <option id="RU-AST" value="RU-AST">Астраханская область </option>
 <option id="RU-BEL" value="RU-BEL">Белгородская область</option>
 <option id="RU-BRY" value="RU-BRY">Брянская область </option>
 <option id="RU-VLA" value="RU-VLA">Владимирская область </option>
 <option id="RU-VGG" value="RU-VGG">Волгоградская область </option>
 <option id="RU-VLG" value="RU-VLG">Вологодская область </option>
 <option id="RU-VOR" value="RU-VOR">Воронежская область </option>
 <option id="RU-IVA" value="RU-IVA">Ивановская область </option>
 <option id="RU-IRK" value="RU-IRK">Иркутская область </option>
 <option id="RU-KGD" value="RU-KGD">Калининградская область</option>
 <option id="RU-KLU" value="RU-KLU">Калужская область </option>
 <option id="RU-KEM" value="RU-KEM">Кемеровская область </option>
 <option id="RU-KIR" value="RU-KIR">Кировская область </option>
 <option id="RU-KOS" value="RU-KOS">Костромская область </option>
 <option id="RU-KGN" value="RU-KGN">Курганская область </option>
 <option id="RU-KRS" value="RU-KRS">Курская область </option>
 <option id="RU-LEN" value="RU-LEN">Ленинградская область </option>
 <option id="RU-LIP" value="RU-LIP">Липецкая область </option>
 <option id="RU-MAG" value="RU-MAG">Магаданская область</option>
 <option id="RU-MOS" value="RU-MOS">Московская область </option>
 <option id="RU-MUR" value="RU-MUR">Мурманская область </option>
 <option id="RU-NIZ" value="RU-NIZ">Нижегородская область </option>
 <option id="RU-NGR" value="RU-NGR">Новгородская область </option>
 <option id="RU-NVS" value="RU-NVS">Новосибирская область </option>
 <option id="RU-OMS" value="RU-OMS">Омская область</option>
 <option id="RU-ORE" value="RU-ORE">Оренбургская область </option>
 <option id="RU-ORL" value="RU-ORL">Орловская область </option>
 <option id="RU-PNZ" value="RU-PNZ">Пензенская область </option>
 <option id="RU-PSK" value="RU-PSK">Псковская область </option>
 <option id="RU-ROS" value="RU-ROS">Ростовская область </option>
 <option id="RU-RYA" value="RU-RYA">Рязанская область </option>
 <option id="RU-SAM" value="RU-SAM">Самарская область </option>
 <option id="RU-SAR" value="RU-SAR">Саратовская область </option>
 <option id="RU-SAK" value="RU-SAK">Сахалинская область </option>
 <option id="RU-SVE" value="RU-SVE">Свердловская область </option>
 <option id="RU-SMO" value="RU-SMO">Смоленская область </option>
 <option id="RU-TAM" value="RU-TAM">Тамбовская область </option>
 <option id="RU-TVE" value="RU-TVE">Тверская область </option>
 <option id="RU-TOM" value="RU-TOM">Томская область </option>
 <option id="RU-TUL" value="RU-TUL">Тульская область</option>
 <option id="RU-TYU" value="RU-TYU">Тюменская область </option>
 <option id="RU-ULY" value="RU-ULY">Ульяновская область </option>
 <option id="RU-CHE" value="RU-CHE">Челябинская область </option>
 <option id="RU-YAR" value="RU-YAR">Ярославская область</option>
 <option id="RU-MOW" value="RU-MOW">Москва</option>
 <option id="RU-SPE" value="RU-SPE">Санкт-Петербург</option>
 <option id="RU-YEV" value="RU-YEV">Еврейская АО</option>
 <option id="RU-NEN" value="RU-NEN">Ненецкий АО</option>
 <option id="RU-KHM" value="RU-KHM">Ханты-Мансийский АО</option>
 <option id="RU-CHU" value="RU-CHU">Чукотский АО</option>
 <option id="RU-YAN" value="RU-YAN">Ямало-Ненецкий АО</option>
 </datalist>



 <label for="city">Город</label>
 <input list="city" value="" type="text" />
 <datalist id="city">
 <option id="RU-MOS">Москва</option>
 <option id="RU-Peterburg">Санкт-Петербург</option>
 <option id="RU-Nov">Новосибирск</option>
 <option id="RU-Ekaterenburg">Екатеринбург</option>
 <option id="RU-kaz">Казань</option>
 <option id="RU-nov">Нижний новгород</option>
 <option id="RU-chel">Челябинск</option>
 <option id="RU-sam">Самара</option>
 <option id="RU-omsk">Омск</option>
 <option id="RU-ros">Ростов-на-дону</option>
 <option id="RU-ufa">Уфа</option>
 <option id="RU-kra">Красноярск</option>
 <option id="RU-vor">Воронеж</option>
 <option id="RU-per">Пермь</option>
 <option id="RU-vol">Волгоград</option>
 <option id="RU-kra">Краснодар</option>
 <option id="RU-sar">Саратов</option>
 <option id="RU-tum">Тюмень</option>
 <option id="RU-tol">Тьльятти</option>
 <option id="RU-ige">Ижевск</option>

 </datalist>

 <label for="str">Улица</label>
<input v-model.trim="str" name="str" placeholder="улица">

<label for="house">Дом</label>
<input v-model.number="house" name="house" placeholder="Дом">

</div>
   
`,
data: {
    index:"",
    country:"",
    region:"",
    city:"",
    house:""
 
    },
  

   
       
})
    




new Vue({
el: "#passport",
    template: `
 <div class="passport">

 <span>тип документа: {{ doc }}</span>
 <select v-model="doc">
   <option  v-for="doc in docs" v-bind:value="doc.value">
   {{ doc.text }}
 </option>
 </select>

 <label for="ser">Серия</label>
 <input v-model.number="ser" name="ser" placeholder="Серия">

 <label for="num">Номер</label>
 <input v-model.number="ser" name="num" placeholder="Номер">

 <label for="by">Кем выдан</label>
 <input type="by" id="by" value="Кем выдан" v-model="by">

 <label for="dataOf">Дата выдачи</label>
 <input name="dataOf" type="date" :value="myDate && myDate.toISOString().split('T')[0]"
                  @input="myDate = getDateClean($event.target.valueAsDate)">
                
    </div>

     `,
    data: {
ser:"",
num:"",
by:"",
    docs: [
      { text: 'Паспорт', value: 'Паспорт' },
      { text: 'Свидетельство о рождении', value: 'Свидетельство о рождении' },
      { text: 'Вод. удостоверение', value: 'Вод. удостоверение' }
    ],
  

    myDate: new Date('2011-04-11T10:20:30Z')
    },
    methods: {
    
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
