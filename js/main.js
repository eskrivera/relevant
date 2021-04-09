
$(document).ready(function(){

///////////////////////////////////////Slider//

      $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,

      });

///////////////////////////////////////Posts//

        
        var one = 
          [{
            title: 'Myanmar have maintained a largely peaceful',
            date: moment().calendar(),
            content: 'Protesters in Myanmar have maintained a largely peaceful resistance to dictatorship since the Feb. 1 coup. But as the military continues to terrorize the public, frustrations have been mounting and the country veers dangerously toward an all-out civil war',
          }];

        var two = 
          [{
            title: 'COVID-19 Vaccine Tracker',
            date: moment().subtract(1, 'days').calendar(),
            content: 'Nearly three months into the U.S. COVID-19 vaccine rollout, only 19.4% of Americans have received both doses of the two-shot Pfizer-BioNTech and Moderna drugs or a single injection of the recently authorized one-dose Johnson & Johnson version. Since the first vaccine was given to the first patient on Dec. 14, the U.S. has delivered 225.3 million doses of the cutting-edge inoculations, of which 171.5 million (76.1%) have been administered.',
          }];

        var three =
          [{
            title: 'How the U.S. Vaccine Rollout Looks Right Now',
            date: moment().subtract(3, 'days').calendar(),
            content: 'While this dashboard initially tracked first and second doses separately, with the introduction of J&Js one-shot vaccine, we now report "completed" treatments—representing either two shots of the Pfizer and Moderna vaccines  or a single shot of the J&J vaccine, as well as "initial" treatments, representing those who have received just one dose of the two-dose vaccines.',
          }];

        
        one.forEach((item, index) => {

          var post =  `
                <div class="info">
                    <h3> ${item.title}</h3>
                    <span>${item.date}</span>
                    <p>${item.content}</p>
                    <button class="button-read"><a href="#"> Read More</a></button>
                </div> `;

          $("#one").append(post);

        });

        two.forEach((item, index) => {

          var post =  `
                <div class="info">
                    <h3> ${item.title}</h3>
                    <span>${item.date}</span>
                    <p>${item.content}</p>
                    <button class="button-read"><a href="#"> Read More</a></button>
                </div> `;

          $("#two").append(post);

        });

        
        three.forEach((item, index) => {

          var post =  `
                <div class="info">
                    <h3> ${item.title}</h3>
                    <span>${item.date}</span>
                    <p>${item.content}</p>
                    <button class="button-read"><a href="#"> Read More</a></button>
                </div> `;

          $("#three").append(post);

        });

        /////////////////////////////////////// Theme-Selector///////////////////////////////

        var theme = $("#theme");
        var whiteIcon = $(".icon-white");
        var change = $("#changeLogo");

        $(".button-day").hide();

        $(".button-day").click(function(){
            theme.attr("href", "../css/Light.css");
            whiteIcon.attr("color", "black");
            change.attr("src", "../img/relevant.png");
            $(this).hide();
            $(".button-night").show();

        });
        
        $(".button-night").click(function(){
            theme.attr("href", "../css/Dark.css");
            whiteIcon.attr("color", "white");
            change.attr("src", "../img/relevant-white.png");
            $(this).hide();
            $(".button-day").show();
      });


  });

