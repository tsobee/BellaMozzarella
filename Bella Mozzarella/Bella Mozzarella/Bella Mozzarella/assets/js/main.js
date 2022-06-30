
$( document ).ready(function() {
  renderNavigation();
  renderInfo();
  renderServices();
  renderComments();
  renderMeals();
  renderTeam();
  renderQuestions();
  renderFooter();
  renderAuthor();
  renderForm();

  // Funkcija za renderovanje navigacije
  function renderNavigation(){
    let nizMeni = [
      ["index.html", "Home"],
      ["index.html#about", "About"],
      [ "index.html#services", "Services"],
      ["index.html#meals", "Portfolio"],
      ["index.html#team", 'Team'],
      ["index.html#contact", 'Contact']
    ];

    var Nav = document.getElementsByTagName('nav');
    let ispis = "<ul>"
      for(let i=0;i<nizMeni.length;i++){
        ispis+=` <li><a href="${nizMeni[i][0]}">${ nizMeni[i][1]}</a></li>`
      }
      ispis += "</ul>"
      for (let i =0; i< Nav.length;i++) {
        Nav[i].innerHTML+=ispis;
      }
    if ($('.nav-menu').length) {
      var mobile_nav =$('.nav-menu').clone();

      mobile_nav.removeClass('nav-menu d-none d-lg-block').addClass('mobile-nav d-lg-none');
      $('.head').append(mobile_nav);
      $('.head').prepend(`<button type="button" class="mobile-nav-toggle d-lg-none"> <i class="icofont-navigation-menu"></i></button>`);
      $('.head').append('<div class="mobile-nav-overly"></div>');
      $(document).on('click', '.mobile-nav-toggle', function(e) {
        $('.head').toggleClass('mobile-nav-active');
        $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
        $('.mobile-nav-overly').toggle();
      });
    } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
      $(".mobile-nav, .mobile-nav-toggle").hide();
    }
  }

  // Funkcija za prikaz sekcije koja govori vise o restoranu
  function renderInfo(){
    let Naslov = ["Here is Something About us"];
    let Opisnaslova  = ["Bella Mozzarella is a Italian Marketplace offering a unique culinary experience with opportunities for both retail and dining"];

    let TextAbout=[
      ["What we offer","Their market of bustling districts is comprised of culinary specific stations, three exciting restaurants and a fresh grocery."],
      ["Dedication","You can enjoy classic Italian dishes, cocktails and wine in the heart of Venice."],
      ["Special offer","The hidden gem of Bella Mozzarella is Michelin Star L’Appart that offers the experience of an intimate dinner party at a chef’s apartment."]
    ];

    let divabout= document.createElement('div');
    divabout.classList.add('container');
    let divred=document.createElement('div');
    divred.classList.add('row');


    let divslike=document.createElement('div');
    divslike.classList.add('col-xl-6','col-lg-7');
    divslike.innerHTML=`<img src="assets/img/about-img.jpg" class="img-fluid" alt="aboutslika">`

    let divpodaci=document.createElement('div');
    divpodaci.classList.add('col-xl-6','col-lg-5','pt-5','pt-lg-0');

    divpodaci.innerHTML=`<h3>${Naslov}</h3> <p>${Opisnaslova}</p>`

    for (let i = 0; i < TextAbout.length; i++) {
      divpodaci.innerHTML+=` 
        <div class="icon-box" >
          <i class="bx bx-restaurant"></i>
          <h4>${TextAbout[i][0]}</h4>
          <p>${TextAbout[i][1]}</p>
        </div>`
    }           
    divred.append(divpodaci);
    divred.prepend(divslike);
    divabout.append(divred);

    if($('.about').length){
      let Divaboutmain = document.querySelector('.about');
      Divaboutmain.append(divabout);
    }    
  }

  // Funkcija za prikaz usluga koje se pruzaju
  function renderServices(){
    let Naslov = ["Services"];

    let TextAbout=[ 
      ['Dining','Spent some time with your friends and family in our luxurious restaurant.'],
      ['Delivery','We can always delivery your meal on your doorstep.'],
      ['Take out','Take out warm meal on your way home.'],
      ['Rent for party','You can always rent a luxurious space for your special occasions.']
    ];
    let Bojaicone=['pink','cyan','green','blue'];
    let Nazivicone=['dish','package','shopping-bag','cake'];

    let divred=document.createElement('div');
    divred.classList.add('row');

    let divnaslov=document.createElement('div');
    divnaslov.classList.add('section-title');
    divnaslov.innerHTML=` <h2>${Naslov}</h2>`
    
    for (let i = 0; i < TextAbout.length; i++) {
      divred.innerHTML+=`
        <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" >
          <div class="icon-box icon-box-${Bojaicone[i]}">
            <div class="icon"><i class="bx bx-${Nazivicone[i]}"></i></div>
            <h4 class="title"><a href="">${TextAbout[i][0]}</a></h4>
            <p class="description">${TextAbout[i][1]}</p>
          </div>
        </div>`
    }  
    if($('.services').length){
      let Divservisi = document.querySelector('.services >.container');
      Divservisi.append(divnaslov);
      Divservisi.append(divred);
    }
  }

  // Funkcija koja prikazuje utiske nasih korisnika
  function renderComments(){
    if($('#testimonials').length){
      let Naslov = ["Rewievs"];
      let Opisnaslova  = [" What our costomers say about us we take as pride and openig to new improvements..."];
      let KomentariDesc=[
        `This cozy restaurant has left the best impressions! Hospitable hosts, delicious dishes, beautiful presentation, wide wine list and wonderful dessert.`,
        `It’s a great experience. The ambiance is very welcoming and charming. Amazing wines, food and service. Staff are extremely knowledgeable.`,
        `This spot gives excelent service and yummy meals. One of my favourite restaurants around town. The meals served rapidly and the rates were reasonable.`,
        `The food was fresh, properly prepared and a great value for the price. We highly recommend it. The breakfast buffet on Sunday was equally as good.`,
      ];

      let ImeKorisnika=['Tiffany Riley','Mike Harper','Carl Spencer','Aarzoo Vasquez'];
      let ZanimanjeKorisnika=['Pharmacist','Travel agent','Stockbroker','Diplomat']

      let divnaslov=document.querySelector('#testimonials .section-title')
      divnaslov.innerHTML+=` <h2>${Naslov}</h2> <p>${Opisnaslova}</p>`
    
      let divcontrols=document.querySelector('.controls');
      divcontrols.innerHTML+=`
      <div class="controls-top d-flex justify-content-center">
        <a class="btn-floating btn-lg" href="#multi-item-example" data-slide="prev"><i class="bx bx-left-arrow"></i></a>
        <a class="btn-floating btn-lg" href="#multi-item-example" data-slide="next"><i class="bx bx-right-arrow"></i></a>
      </div>`

      let divindicators=document.querySelector('.indicators');
      divindicators.innerHTML+=` 
      <ol class="carousel-indicators">
        <li data-target="#multi-item-example" data-slide-to="0" class="active"></li>
        <li data-target="#multi-item-example" data-slide-to="1"></li>
        <li data-target="#multi-item-example" data-slide-to="2"></li>
      </ol>`

      let divprviRed=document.querySelector('.divprvi .row');
      for (let index = 0; index < 3; index++) {
        divprviRed.innerHTML+=`
          <div class="col-md-4">
            <div class="card mb-2">
              <div class="testimonial-item">
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>${KomentariDesc[index]}
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="assets/img/testimonials/testimonials-${index}.jpg" class="testimonial-img" alt="">
                <h3>${ImeKorisnika[index]}</h3>
                <h4>${ZanimanjeKorisnika[index]}</h4>
              </div>
            </div>
          </div>`
      }

      let divdrugiRed=document.querySelector('.divdrugi .row');

      for (let index = 3; index <4; index++) {
        divdrugiRed.innerHTML+=`
          <div class="col-md-4">
            <div class="card mb-2">
              <div class="testimonial-item">
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>${KomentariDesc[index]}<i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="assets/img/testimonials/testimonials-${index}.jpg" class="testimonial-img" alt="">
                <h3>${ImeKorisnika[index]}</h3>
                <h4>${ZanimanjeKorisnika[index]}</h4>
              </div>
            </div>
          </div>`
      }
    }
  }

  // Funkcija koja prikazuje neka od nasih jela
  function renderMeals() {
    let Naslov = ["Our meals"];
    let Opisnaslova  = [
      `Here is our collection of meals that we prepared and deliver to our customers.
      Working just on this service helped us improve into better organization
       group and made us official income along the way..`
    ];

    let OpisSlike=['Pasta','Pizza','Grill','Pancakes','Sushi','Lobster','Donuts','Lasagna','Cake'];
    let NazivSlike=['Dinner','Dinner','Lunch','Desert','Lunch','Lunch','Desert','Dinner','Desert'];
    let Fliterw=['app', 'app', 'card', 'web', 'card','card', 'web', 'app','web'];

    let divnaslov=document.createElement('div');
    divnaslov.classList.add('section-title');
    divnaslov.innerHTML=` <h2>${Naslov}</h2> <p>${Opisnaslova}</p>`

    let Buttons=document.createElement('div');
    Buttons.classList.add('row');
    Buttons.innerHTML+=`
      <div class="col-lg-12 d-flex justify-content-center">
        <ul id="portfolio-flters">
          <li data-filter="all" class="filter-active">All</li>
          <li data-filter="app">Dinner</li>
          <li data-filter="card">Lunch</li>
          <li data-filter="web">Desert</li>
        </ul>
      </div>`

    let Portfoliomain=document.createElement('div');
    Portfoliomain.classList.add('row');
    Portfoliomain.classList.add('portfolio-container');
    for (let index = 0; index < Fliterw.length; index++) {  
      Portfoliomain.innerHTML+=`
        <div class="col-lg-4 col-md-6 portfolio-item ${Fliterw[index]} ">
          <div class="portfolio-wrap">
            <img src="assets/img/portfolio/portfolio-${index+1}.jpg" class="img-fluid"
            alt="port.slika${index+1}">
            <div class="portfolio-info">
              <h4>${NazivSlike[index]}</h4>
              <p>${OpisSlike[index]}</p>
              <div class="portfolio-links">
                <a href="assets/img/portfolio/portfolio-${index+1}.jpg" data-gall="portfolioGallery" class="venobox" title="${NazivSlike[index]}"><i class="bx bx-zoom-in"></i></a>
              </div>
            </div>
          </div>
        </div>` 
    }
    if($('.portfolio').length){
      let Portfoliocontainer=document.querySelector('.portfolio >.container');
      Portfoliocontainer.appendChild(divnaslov);
      Portfoliocontainer.appendChild(Buttons);
      Portfoliocontainer.appendChild(Portfoliomain);
    }
  }
  
  // Funkcija za prikaz clanova naseg tima
  function renderTeam(){
    if($('.team').length){    
      let Naslov= ["Meet our team "];
      let Opisnaslova = ["Yours truly are here.."];
      let TeamImena=['Uberto Parenti','Gemma Nucci','Loris Boccio','Nicolò Busa'];
      let TeamZanimanja=['Chef','Bartender','Waiter','Assistant cook'];
      let NaslovTeam = document.querySelector('.team>.container>.section-title');
      for (let i= 0; i < Naslov.length; i++) {
        NaslovTeam.innerHTML+=`<h2>${Naslov[i]}</h2> <p>${Opisnaslova[i]}</p>`
      }
      let Teamred = document.querySelector('.team>.container>.row');
      for (let i = 0; i < TeamImena.length; i++) {
        Teamred.innerHTML+=`
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="member">
              <img src="assets/img/team/team-${i+1}.jpg" class="img-fluid" alt="member${i+1}">
              <div class="member-info">
                <div class="member-info-content">
                  <h4>${TeamImena[i]}</h4>
                  <span>${TeamZanimanja[i]}</span>
                </div>
                <div class="social">
                  <a href="https://twitter.com/?lang=sr"><i class="icofont-twitter"></i></a>
                  <a href="https://www.facebook.com"><i class="icofont-facebook"></i></a>
                  <a href="https://www.instagram.com"><i class="icofont-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>`
      }
    }
  }

  // Funkcija za prikaz cesto postavljanih pitanja
  function renderQuestions(){
    if($('.faq').length){
    
      let Naslov= "F.A.Q";
      let Opisnaslova = "Here are some  asked questions..";
      let Pitanje=[
        `How much do I have to pay for my reservation?`,
        `What happens if I'm running late?`,
        `I have particular food restriction, am I able to have a meal?`,
        `Should I make a table reservation?`,
        `Is there parking available?`
      ];
      let Odgovornapitanje=[
        `Absolutely nothing! All bookings made in our restaurant are free to the consumer.`,
        `Call the restaurant. Every restaurant is different, but most will hold a booking for at least twenty minutes before reassigning your table.`,
        `Our culinary team is able to accommodate certain food allergies and dietary restrictions with 72 hours notice but is not able to do so with less time. 
          Accommodations for dietary restrictions and allergies are not guaranteed. In order to ensure that our team can accommodate your or your guest’s request, 
          please call us on +39 0322 8114 530, or contact us at email@example.com at least 72 hours in advance.`,
        `We strongly advise to book a table although it is not compulsory, especially on Week-ends which are more busy days.`,
        `Yes, we have a spacious car park so getting parked should be very straightforward.`
      ];
      let Dnaslov = document.querySelector('.faq>.container>.section-title');
      Dnaslov.innerHTML=`<h3>${Naslov}</h3><p>${Opisnaslova}</p>`
      let Dlista =document.querySelector('.faq>.container>.faq-list');
      let ul =document.createElement('ul');
      for (let i = 0; i < Pitanje.length; i++) {
        ul.innerHTML+=` 
          <li>
            <i class="bx bx-help-circle icon-help"></i> 
            <a data-toggle="collapse" class="collapse" href="#faq-list-${i}">
              ${Pitanje[i]}
              <i class="bx bx-chevron-down icon-show"></i>
              <i class="bx bx-chevron-up icon-close"></i>
            </a>
            <div id="faq-list-${i}" class="collapse" data-parent=".faq-list">
              <p>${Odgovornapitanje[i]}</p>
            </div>
          </li>`
      }
      Dlista.appendChild(ul);
      let Prvi=document.querySelector('#faq-list-0');
      Prvi.classList.add("show");  
    }
  }

  // Funkcija za prikazivanje futera
  function renderFooter(){
    if($('#footer').length){
      let Smedia=['twitter','facebook','instagram','linkedin'];
      let SmediaLinks=['https://twitter.com/', 'https://www.facebook.com', 'https://www.instagram.com', 'https://www.facebook.com']
      let Links1=['About','Services','Meals'];
      let Links2=['Dining','Delivery','Take out','Rent for party'];
      let sociallinks=document.querySelector('.footer-info>.social-links');
      for (let index = 0; index < Smedia.length; index++) {
        sociallinks.innerHTML+=`
          <a href="${SmediaLinks[index]}" class="${Smedia[index]}"><i class="bx bxl-${Smedia[index]}"></i></a>`
      }

      let usefullinks=document.querySelector('.useful-links>ul');
      for (let index = 0; index < Links1.length; index++) {
        usefullinks.innerHTML+=`<li><i class="bx bx-chevron-right"></i> <a href="index.html#${Links1[index].toLowerCase()}">${Links1[index]}</a></li>`
      }
      usefullinks.innerHTML+=` <li><i class="bx bx-chevron-right"></i> <a href="author.html">Author-page</a></li> <li><i class="bx bx-chevron-right"></i> <a href="Dokumentacija.pdf">Documentation-link</a></li>`
      let flinks=document.querySelector('.flinks>ul');
      for (let index = 0; index < Links2.length; index++) {
        flinks.innerHTML+=`<li><i class="bx bx-chevron-right"></i>${Links2[index]}</a></li>`
      }
    }
  }

  // Sekcija o autoru sajta
  function renderAuthor(){
    if($('.author').length){
      let Opis=[
        `My name is Aleksa. I am 21 years old. I am from Gornji Milanovac, Serbia.
        I am an aspiring student currently attending ICT College, final year.
        Starting my career as a web developer, I still have a lot to learn, but I think I can finish certain jobs.
        I am always trying to make a friendly relationship with my clients, because that way we can all work more efficiently and make faster and flawless results.
        Feel free to contact me !`
      ];

      var Divautor= $('.author-inner');
      var divslike =document.createElement('div');
      divslike.classList.add('col-lg-5','col-sm-12','d-flex','justify-content-center');
      divslike.innerHTML=`<img class="img-fluid w-50  " src="assets/img/author.jpg" alt="Author picture"/>`
      Divautor.append(divslike);
      var divopis =document.createElement('div');
      divopis.classList.add('col-lg-5','col-sm-12');
      divopis.innerHTML=`<p>${Opis}</p>`
      Divautor.append(divopis);
    }
  }
    
  $('#portfolio-flters>li').click(function(){
    $("#portfolio-flters>li").removeClass('filter-active');
    $(this).addClass('filter-active');

    let filter = $(this).attr('data-filter');
    if(filter =='all'){
      $('.portfolio-item').show('1000');
    }
    else{
      $('.portfolio-item').hide('1000');
      $('.' +filter).show('1000');
    }
  });

  $(document).scroll(function() {
    if ($(document).scrollTop() > 200) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500);
    return false;
  });

  // Funkcija za prikaz forme
  function renderForm(){
    let podaciForme = [];
    let Dugme = $('#dugme');
    let Subscribe = $('#Subscribe');

    Dugme.on('click',function() {
      let ime = $('#name');
      let email = $('#email');
      let subject = $('#subject');
      let message = $('#message');

      let imeRe=/^[A-Z]\w{1,9}$/; // Regularni izraz za ime
      let emailRe = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; // Regularni izraz za mejl
      let subjectRe=/^\w{2,15}(\s\w{2,20})*$/; // Regularni izraz za temu
      if(ime.val() == '') { 	        
        ime.val("");
        ime.next().text('The name can not be empty.');
      }
      else if(!imeRe.test( ime.val() ) ) {
        ime.val("");
        ime.next().text('Eg: Nathaniel');
      } else { 
        podaciForme.push(ime.val());
        ime.val("");
        ime.next().text('');
      }
      if(email.val() == '') { 	       
        email.val("");
        email.next().text('The email can not be empty.');
      }
      else if(!emailRe.test( email.val() ) ) {    
        email.val("");
        email.next().text('Eg: test@gmail.edu.com');
      } else { 
        podaciForme.push(email.val());
        email.val("");
        email.next().text('');
      }
      if(subject.val() == '') { 	          
        subject.val("");
        subject.next().text('Please enter at least 8 chars of subject.');
      }
      else if(!subjectRe.test( subject.val() ) ) {    
        subject.val("");
        subject.next().text('Eg: Product Request ');
      } else { 
        podaciForme.push(subject.val());
        subject.val("");
        subject.next().text('');
      }
      if(message.val() == '') { 	        
        message.val("");
        message.next().text('Please write something for us.');
      } 
      else {
        podaciForme.push(message.val());
        message.val("");
        message.next().text('');
      }
    });
    Subscribe.on('click',function(){
      let email = $('#smail');
      let emailRe = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; // Regularni izraz za mejl

      if(email.val() == '') { 	       
        email.val("");
        email.next().text('The email can not be empty.');
      } else if(!emailRe.test( email.val() ) ) {
        email.val("");
        email.next().text('Eg: test@gmail.edu.com');
      } else {
        podaciForme.push(email.val());
        email.val("");
        email.next().text('');
      }
    }) 
  }

  $('.tlt').textillate({
    loop: true,
    in: {
      effect: 'tada',
      delayScale: 2.0,
      delay: 50,
      sync: false,
      shuffle: false,
      reverse: false,
      callback: function () {}
    },

    out: {
      effect: 'flash',
      delayScale: 1.5,
      delay: 200,
      sync: false,
      shuffle: false,
      reverse: false,
      callback: function () {}
    } 
  });
  $('.weltext').textillate({
    in:{
      effect: 'flash',
      delayScale: 1.5,
      delay: 50,
      sync: false,
      shuffle: false,
      reverse: false,
      callback: function () {}
    }
  });  
});

