/*
Velo - Developer Portoflio Template
Author: © Ciuca Cristian (Criatix)
Author URL: https://www.ciucacristi.tk/
Version: 2.0
Framework: Bootstrap v4.5
Demo: https://ciucacristi.tk/velo/
*/

/* Navbar Shrink Scroll Effect */
$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
  }
});

/* Text typing effect */

var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 7) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 150 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
  /* End Text typing effect */

  /* Portfolio filter buttons */
  $(document).ready(function(){

     $(".filter-button").click(function(){
         var value = $(this).attr('data-filter');

         if(value == "all")
         {
             //$('.filter').removeClass('hidden');
             $('.filter').show('1000');
         }
         else
         {
  //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
  //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
             $(".filter").not('.'+value).hide('3000');
             $('.filter').filter('.'+value).show('3000');

         }
     });

     $('.portfolio-nav a').on('click', function (e) {
      e.preventDefault()
      $(this).tab('show')
    })
  });

  /* End Portfolio filter buttons */
