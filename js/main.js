(function($){

    window.scrollTo(0, 0);

    setTimeout(function() { 
        $('body').addClass('is-visible');

        // setTimeout(function() { 
            openingTl.play();
        // }, 1000);

    }, 1000);


     

    // $( "p" ).on( "click", function() {
      
    //   chartBitcoin.render();
    //   chartDocmorris.render();
      // chart.hideSeries('Open');
      //chart.hideSeries('Low');
      // chart.hideSeries('High');
      // chart.hideSeries('Close');
      // setTimeout(function() { 
      //   chart.hideSeries('Low');
      //   chart.hideSeries('High');
      //   chart.hideSeries('Close');
      // }, 2000);
    // } );






    new jBox('Tooltip', {
        attach: '.tooltip',
        trigger: 'click',
        closeOnMouseleave: false,
        closeButton: true,
        maxWidth: 350,
        position: {x: 'center', y: 'bottom'},
        offset: {x: 0, y: 10},
        animation: 'move'
    });
    

  
	
    

    // INIT CONTROLLER
	  var controller = new ScrollMagic.Controller();

      ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    
    // OPENING
    var $opening = $('.img-hero');
    var $shape = $opening.find('.hero-shape');
    var $caps1 = $opening.find('.hero-caps1');
    var $caps2 = $opening.find('.hero-caps2');
    var $bean1 = $opening.find('.hero-bean1');
    var $bean2 = $opening.find('.hero-bean2');
   
    var openingTl = new TimelineMax({ paused: true })
        .to($shape, 1, { autoAlpha: 1, rotate: "-=25deg", ease: Power4.easeInOut })
        .to($caps1, 0.5, { autoAlpha: 1, x: "-=10px", ease: Power4.easeInOut }, "-=0.5s")
        .to($caps2, 0.5, { autoAlpha: 1, x: "-=10px", ease: Power4.easeInOut }, "-=0.250s");
        // .to($bean1, 0.5, { autoAlpha: 1, ease: Power4.easeInOut }, "-=0.750s")
        // .to($bean2, 0.5, { autoAlpha: 1, ease: Power4.easeInOut }, "-=0.5s");


    clearOpeningStage();
    function clearOpeningStage(){
        //alert('lol');
        var clearOpeningStageTl = new TimelineMax();
        clearOpeningStageTl
            .set($shape, { autoAlpha: 0, rotate: "+=25deg", transformOrigin: "center center" })
            .set($caps1, { autoAlpha: 0, x: "+=10px", transformOrigin: "center center" })
            .set($caps2, { autoAlpha: 0, x: "+=10px", transformOrigin: "center center" })
            .set($bean1, { autoAlpha: 0, transformOrigin: "center center" })
            .set($bean2, { autoAlpha: 0, transformOrigin: "center center" });
        return clearOpeningStageTl;
    }

	//   new ScrollMagic.Scene({triggerElement: "#title1"})
    // .on("enter", function (event) {
    //    openingTl.play();       
    // }).triggerHook(0.6).addTo(controller);

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    
    // TITLE 1
    var $title1 = $('#title1');
    var $title1Img1 = $title1.find('.title-1-img-1');
    var $title1Img2 = $title1.find('.title-1-img-2');
    var $title1Img3 = $title1.find('.title-1-img-3');
    var $title1Img4 = $title1.find('.title-1-img-4');
    var $title1Img5 = $title1.find('.title-1-img-5');
   
    var title1Tl = new TimelineMax({ paused: true })
        .to($title1Img5, 1, { autoAlpha: 1, x: "-=15px", ease: Power4.easeInOut })
        .to($title1Img4, 1, { autoAlpha: 1, x: "-=15px", ease: Power4.easeInOut }, "-=0.6s")
        .to($title1Img3, 1, { autoAlpha: 1, x: "-=15px", ease: Power4.easeInOut }, "-=0.6s")
        .to($title1Img2, 1, { autoAlpha: 1, x: "-=15px", ease: Power4.easeInOut }, "-=0.6s")
        .to($title1Img1, 1, { autoAlpha: 1, x: "-=15px", ease: Power4.easeInOut }, "-=0.6s");


    clearTitle1Stage();
    function clearTitle1Stage(){
        //alert('lol');
        var clearTitle1StageTl = new TimelineMax();
        clearTitle1StageTl
            .set($title1Img1, { autoAlpha: 0, x: "+=15px" })
            .set($title1Img2, { autoAlpha: 0, x: "+=15px" })
            .set($title1Img3, { autoAlpha: 0, x: "+=15px" })
            .set($title1Img4, { autoAlpha: 0, x: "+=15px" })
            .set($title1Img5, { autoAlpha: 0, x: "+=15px" });
        return clearTitle1StageTl;
    }

	  new ScrollMagic.Scene({triggerElement: "#title1"})
    .on("enter", function (event) {
       // alert('lol');
       title1Tl.play();       
    }).triggerHook(0.6).addTo(controller);

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    
    // CITATION 1
    var $quote1 = $('.quote1');
    var $q1LineTop = $quote1.find('.linetop');
    var $q1LineBottom = $quote1.find('.linebottom');
    var $q1Txt = $quote1.find('.quote-txt');
    var $q1Auth = $quote1.find('.auth');
   
    var quote1Tl = new TimelineMax({ paused: true })
        .to($q1LineTop, 0.5, { width: "100%", ease: Power4.easeInOut })
        .to($q1LineBottom, 0.5, { width: "100%", ease: Power4.easeInOut }, "-=0.5s")
        .to($q1Txt, 0.5, { autoAlpha: 1, x: "+=20px", ease: Power4.easeInOut }, "-=0.350s")
        .to($q1Auth, 0.5, { autoAlpha: 1, x: "+=20px", ease: Power4.easeInOut }, "-=0.350s");

    clearQuote1Stage();
    function clearQuote1Stage(){
        //alert('lol');
        var clearQuote1StageTl = new TimelineMax();
        clearQuote1StageTl
            .set($q1LineTop, { width: "0%" })
            .set($q1LineBottom, { width: "0%" })
            .set($q1Txt, { autoAlpha: 0, x: "-=20px" })
            .set($q1Auth, { autoAlpha: 0, x: "-=20px" });
        return clearQuote1StageTl;
    }

	  new ScrollMagic.Scene({triggerElement: ".quote1"})
    .on("enter", function (event) {
       // alert('lol');
       quote1Tl.play();       
    }).triggerHook(0.6).addTo(controller);

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    
    // DOUBLE CAPS
    // var $doubleCaps = $('.double-caps');
    // var $capsL = $doubleCaps.find('.caps-left');
    // var $capsR = $doubleCaps.find('.caps-right');
    
   
    // var doubleCapsTl = new TimelineMax({ paused: true })
    //     .to($capsL, 0.5, { autoAlpha: 1, x: "+=20px", ease: Power4.easeInOut })
    //     .to($capsR, 0.5, { autoAlpha: 1, x: "-=20px", ease: Power4.easeInOut }, "-=0.5s");

    // clearDoubleCapsStage();
    // function clearDoubleCapsStage(){
    //     var clearDoubleCapsStageTl = new TimelineMax();
    //     clearDoubleCapsStageTl
    //         .set($capsL, { autoAlpha: 0, x: "-20px" })
    //         .set($capsR, { autoAlpha: 0, x: "+20px" });
    //     return clearDoubleCapsStageTl;
    // }

	  // new ScrollMagic.Scene({triggerElement: ".double-caps"})
    // .on("enter", function (event) {
    //   doubleCapsTl.play();       
    // }).triggerHook(0.6).addTo(controller);

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    
    // TITLE 2
    var $title2 = $('#title2');
    var $title2Img1 = $title2.find('.title-2-img-1');
   
    var title2Tl = new TimelineMax({ paused: true })
        .to($title2Img1, 1, { autoAlpha: 1, x: "-=15px", ease: Power4.easeInOut });

    clearTitle2Stage();
    function clearTitle2Stage(){
        //alert('lol');
        var clearTitle2StageTl = new TimelineMax();
        clearTitle2StageTl
            .set($title2Img1, { autoAlpha: 0, x: "+=15px" });
        return clearTitle2StageTl;
    }

	  new ScrollMagic.Scene({triggerElement: "#title2"})
    .on("enter", function (event) {
       // alert('lol');
       title2Tl.play();       
    }).triggerHook(0.6).addTo(controller);

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    
    // BEST COFFEE LIST
    var $bestCoffee = $('.best-coffee');
    var $bestCoffeeImgs = $bestCoffee.find('img');
   
    var bestCoffeeTl = new TimelineMax({ paused: true })
        .staggerTo($bestCoffeeImgs, 2, { autoAlpha: 1, ease: Power4.easeInOut }, 0.2, "-=1");

    clearBestCoffeeStage();
    function clearBestCoffeeStage(){
        //alert('lol');
        var clearBestCoffeeStageTl = new TimelineMax();
        clearBestCoffeeStageTl
            .set($bestCoffeeImgs, { autoAlpha: 0 });
        return clearBestCoffeeStageTl;
    }

	  new ScrollMagic.Scene({triggerElement: ".best-coffee"})
    .on("enter", function (event) {
       // alert('lol');
       bestCoffeeTl.play();       
    }).triggerHook(0.6).addTo(controller);

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    
    // TITLE 3
    var $title3 = $('#title3');
    var $title3Img1 = $title3.find('.title-3-img-1');
   
    var title3Tl = new TimelineMax({ paused: true })
        .to($title3Img1, 1, { autoAlpha: 1, x: "-=15px", ease: Power4.easeInOut });

    clearTitle3Stage();
    function clearTitle3Stage(){
        //alert('lol');
        var clearTitle3StageTl = new TimelineMax();
        clearTitle3StageTl
            .set($title3Img1, { autoAlpha: 0, x: "+=15px" });
        return clearTitle3StageTl;
    }

	  new ScrollMagic.Scene({triggerElement: "#title3"})
    .on("enter", function (event) {
       // alert('lol');
       title3Tl.play();       
    }).triggerHook(0.6).addTo(controller);

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    
    // COMPOST 3 STEPS
    var $composting = $('.composting');
    var $step1 = $composting.find('.step-1');
    var $step1Svg = $composting.find('.step-1-svg');
    var $step1Nbr = $step1Svg.find('#dot');
    var $step1Txt = $step1.find('.step-1-txt');
    var $banana1 = $step1.find('#banana1');
    var $orange1 = $step1.find('#orange1');
    var $orange2 = $step1.find('#orange2');
    var $caps1 = $step1.find('#caps1');
    var $caps2 = $step1.find('#caps2');
    var $caps3 = $step1.find('#caps3');
    var $mud1 = $step1.find('#mud');
    var $step2 = $composting.find('.step-2');
    var $step2Svg = $composting.find('.step-2-svg');
    var $step2Nbr = $step2Svg.find('#dot');
    var $step2Txt = $step2.find('.step-2-txt');
    var $water = $step2.find('#water');
    var $stick = $step2.find('#stick');
    var $step3 = $composting.find('.step-3');
    var $step3Svg = $composting.find('.step-3-svg');
    var $step3Nbr = $step3Svg.find('#dot');
    var $step3Txt = $step3.find('.step-3-txt');
    var $shine = $step3.find('#shine')
    var $mud3 = $step3.find('#mud');

    var compostingP1Tl = new TimelineMax({ paused: true })
        .to([$step1Nbr, $step1Svg, $step1Txt], 0.5, { autoAlpha: 1, ease: Power4.easeInOut })
        .to($orange1, 0.5, { autoAlpha: 1, ease: Power4.easeInOut })
        .to($orange1, 0.5, { autoAlpha: 0, y: "+=40px", ease: Power4.easeInOut })
        .to($mud1, 0.5, { y: "-=33.33%", ease: Power4.easeInOut }, "-=0.5s")
        .to($orange2, 0.5, { autoAlpha: 1, ease: Power4.easeInOut })
        .to($orange2, 0.5, { autoAlpha: 0, y: "+=40px", ease: Power4.easeInOut })
        .to($mud1, 0.5, { y: "-=33.33%", ease: Power4.easeInOut }, "-=0.5s")
        .to($banana1, 0.5, { autoAlpha: 1, ease: Power4.easeInOut })
        .to($banana1, 0.5, { autoAlpha: 0, y: "+=40px", ease: Power4.easeInOut })
        .to($mud1, 0.5, { y: "-=33.33%", ease: Power4.easeInOut }, "-=0.5s");

    var compostingP2Tl = new TimelineMax({ paused: true })
        .to([$step1Nbr, $step1Svg, $step1Txt], 0.5, { autoAlpha: 0.3, ease: Power4.easeInOut })
        .to([$step2Nbr, $step2Svg, $step2Txt], 0.5, { autoAlpha: 1, ease: Power4.easeInOut }, "-=0.5s")
        .to($water, 0.5, { autoAlpha: 1, ease: Power4.easeInOut })
        .to($water, 0.5, { autoAlpha: 0, y: "+=40px", ease: Power4.easeInOut })
        .to($stick, 0.5, { autoAlpha: 1, ease: Power4.easeInOut })
        .to($stick, 0.5, {y: "+=70%", ease: Power4.easeInOut })
        .to($stick, 0.5, {x: "-=500%", rotate: "-20%", ease: Power4.easeInOut })
        .to($stick, 0.5, {x: "+=500%", rotate: "+20%", ease: Power4.easeInOut }, "-=0.2s")
        .to($stick, 0.5, {x: "-=500%", rotate: "-20%", ease: Power4.easeInOut }, "-=0.2s")
        .to($stick, 0.5, {x: "+=500%", rotate: "+20%", ease: Power4.easeInOut }, "-=0.2s")
        .to($stick, 0.5, {x: "-=500%", rotate: "-20%", ease: Power4.easeInOut }, "-=0.2s")
        .to($stick, 0.5, {x: "+=500%", rotate: "+20%", ease: Power4.easeInOut }, "-=0.2s")

    var compostingP3Tl = new TimelineMax({ paused: true })
        .to([$step2Nbr, $step2Svg, $step2Txt], 0.5, { autoAlpha: 0.3, ease: Power4.easeInOut })
        .to([$step3Nbr, $step3Svg, $step3Txt], 0.5, { autoAlpha: 1, ease: Power4.easeInOut }, "-=0.5s")

        .to($mud3, 2, { y: "+=100%", ease: Power4.easeInOut })
        .to($shine, 0.1, { autoAlpha: 1, ease: Power4.easeInOut })
        .to($shine, 0.1, { autoAlpha: 0, ease: Power4.easeInOut })
        .to($shine, 0.1, { autoAlpha: 1, ease: Power4.easeInOut })
        
        .to([$step1Nbr, $step1Svg, $step1Txt], 0.5, { autoAlpha: 1, ease: Power4.easeInOut }, "+=0.5s")
        .to([$step2Nbr, $step2Svg, $step2Txt], 0.5, { autoAlpha: 1, ease: Power4.easeInOut }, "-=0.5s");
   
    var compostingTl = new TimelineMax({ paused: true })
        .to([$step1Nbr, $step1Svg, $step1Txt], 0.5, { autoAlpha: 1, ease: Power4.easeInOut })
        .to($orange1, 0.5, { autoAlpha: 1, ease: Power4.easeInOut })
        .to($orange1, 0.5, { autoAlpha: 0, y: "+=40px", ease: Power4.easeInOut })
        .to($mud1, 0.5, { y: "-=33.33%", ease: Power4.easeInOut }, "-=0.5s")
        .to($orange2, 0.5, { autoAlpha: 1, ease: Power4.easeInOut })
        .to($orange2, 0.5, { autoAlpha: 0, y: "+=40px", ease: Power4.easeInOut })
        .to($mud1, 0.5, { y: "-=33.33%", ease: Power4.easeInOut }, "-=0.5s")
        .to($banana1, 0.5, { autoAlpha: 1, ease: Power4.easeInOut })
        .to($banana1, 0.5, { autoAlpha: 0, y: "+=40px", ease: Power4.easeInOut })
        .to($mud1, 0.5, { y: "-=33.33%", ease: Power4.easeInOut }, "-=0.5s")
        
        .to([$step1Nbr, $step1Svg, $step1Txt], 0.5, { autoAlpha: 0.3, ease: Power4.easeInOut }, "+=0.5s")
        .to([$step2Nbr, $step2Svg, $step2Txt], 0.5, { autoAlpha: 1, ease: Power4.easeInOut }, "-=0.5s")
        
        .to($water, 0.5, { autoAlpha: 1, ease: Power4.easeInOut })
        .to($water, 0.5, { autoAlpha: 0, y: "+=40px", ease: Power4.easeInOut })
        .to($stick, 0.5, { autoAlpha: 1, ease: Power4.easeInOut })
        .to($stick, 0.5, {y: "+=70%", ease: Power4.easeInOut })
        .to($stick, 0.5, {x: "-=500%", rotate: "-20%", ease: Power4.easeInOut })
        .to($stick, 0.5, {x: "+=500%", rotate: "+20%", ease: Power4.easeInOut }, "-=0.2s")
        .to($stick, 0.5, {x: "-=500%", rotate: "-20%", ease: Power4.easeInOut }, "-=0.2s")
        .to($stick, 0.5, {x: "+=500%", rotate: "+20%", ease: Power4.easeInOut }, "-=0.2s")
        .to($stick, 0.5, {x: "-=500%", rotate: "-20%", ease: Power4.easeInOut }, "-=0.2s")
        .to($stick, 0.5, {x: "+=500%", rotate: "+20%", ease: Power4.easeInOut }, "-=0.2s")

        .to([$step2Nbr, $step2Svg, $step2Txt], 0.5, { autoAlpha: 0.3, ease: Power4.easeInOut }, "+=0.5s")
        .to([$step3Nbr, $step3Svg, $step3Txt], 0.5, { autoAlpha: 1, ease: Power4.easeInOut }, "-=0.5s")

        .to($mud3, 2, { y: "+=100%", ease: Power4.easeInOut })
        .to($shine, 0.1, { autoAlpha: 1, ease: Power4.easeInOut })
        .to($shine, 0.1, { autoAlpha: 0, ease: Power4.easeInOut })
        .to($shine, 0.1, { autoAlpha: 1, ease: Power4.easeInOut })
        
        .to([$step1Nbr, $step1Svg, $step1Txt], 0.5, { autoAlpha: 1, ease: Power4.easeInOut }, "+=0.5s")
        .to([$step2Nbr, $step2Svg, $step2Txt], 0.5, { autoAlpha: 1, ease: Power4.easeInOut }, "-=0.5s");

    clearCompostingStage();
    function clearCompostingStage(){
        //alert('lol');
        var clearCompostingStageTl = new TimelineMax();
        clearCompostingStageTl
            .set([$step1Nbr, $step1Svg, $step1Txt], { autoAlpha: 0.3 })
            .set([$step2Nbr, $step2Svg, $step2Txt], { autoAlpha: 0.3 })
            .set([$step3Nbr, $step3Svg, $step3Txt], { autoAlpha: 0.3 })
            .set([$banana1, $orange1, $orange2, caps1, caps2, caps3], { autoAlpha: 0 })
            .set($mud1, { y: "+=100%" })
            .set($water, { autoAlpha: 0 })
            .set($stick, { autoAlpha: 0, y: "-=70%", transformOrigin: "center bottom" })
            .set($shine, { autoAlpha: 0 });
        return clearCompostingStageTl;
    }

	

    // alert('lol');
    if ( $(window).width() < 768 )
    {
        new ScrollMagic.Scene({triggerElement: ".step-1"})
            .on("enter", function (event) {
                compostingP1Tl.play();      
            }).triggerHook(0.6).addTo(controller);

        new ScrollMagic.Scene({triggerElement: ".step-2"})
            .on("enter", function (event) {
                compostingP2Tl.play();      
            }).triggerHook(0.6).addTo(controller);

        new ScrollMagic.Scene({triggerElement: ".step-3"})
            .on("enter", function (event) {
                compostingP3Tl.play();      
            }).triggerHook(0.6).addTo(controller);
    }
    else
    {
        new ScrollMagic.Scene({triggerElement: ".composting"})
            .on("enter", function (event) {
                compostingTl.play();      
            }).triggerHook(0.6).addTo(controller); 
    }

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    
    // CITATION 2
    var $quote2 = $('.quote2');
    var $q2LineTop = $quote2.find('.linetop');
    var $q2LineBottom = $quote2.find('.linebottom');
    var $q2Txt = $quote2.find('.quote-txt');
    var $q2Auth = $quote2.find('.auth');
   
    var quote2Tl = new TimelineMax({ paused: true })
        .to($q2LineTop, 0.5, { width: "100%", ease: Power4.easeInOut })
        .to($q2LineBottom, 0.5, { width: "100%", ease: Power4.easeInOut }, "-=0.5s")
        .to($q2Txt, 0.5, { autoAlpha: 1, x: "+=20px", ease: Power4.easeInOut }, "-=0.350s")
        .to($q2Auth, 0.5, { autoAlpha: 1, x: "+=20px", ease: Power4.easeInOut }, "-=0.350s");

    clearQuote2Stage();
    function clearQuote2Stage(){
        //alert('lol');
        var clearQuote2StageTl = new TimelineMax();
        clearQuote2StageTl
            .set($q2LineTop, { width: "0%" })
            .set($q2LineBottom, { width: "0%" })
            .set($q2Txt, { autoAlpha: 0, x: "-=20px" })
            .set($q2Auth, { autoAlpha: 0, x: "-=20px" });
        return clearQuote2StageTl;
    }

	  new ScrollMagic.Scene({triggerElement: ".quote2"})
    .on("enter", function (event) {
       // alert('lol');
       quote2Tl.play();       
    }).triggerHook(0.6).addTo(controller);

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    
    // OK COMPOST
    var $okCompost = $('.ok-compost');
    var $checks = $okCompost.find('img');
   
    var checks2Tl = new TimelineMax({ paused: true })
        .staggerTo($checks, 2, { autoAlpha: 1, scale: 1, ease: Power4.easeInOut }, 0.2, "-=1");

    clearChecksStage();
    function clearChecksStage(){
        //alert('lol');
        var clearChecksStageTl = new TimelineMax();
        clearChecksStageTl
            .set($checks, { autoAlpha: 0, scale: 2, transformOrigin: "center center" });
        return clearChecksStageTl;
    }

	  new ScrollMagic.Scene({triggerElement: ".ok-compost"})
    .on("enter", function (event) {
       // alert('lol');
       checks2Tl.play();       
    }).triggerHook(0.6).addTo(controller);

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    
    // COMPOSTAGE BIEN GERE
    var $goodCompost = $('.good-compost');
    var $air = $goodCompost.find('.good-compost-air');
    var $recyclable = $goodCompost.find('.good-compost-recyclable');
    var $grind = $goodCompost.find('.good-compost-grind');
    var $scale = $goodCompost.find('.good-compost-scale');
    var $www = $goodCompost.find('.good-compost-www');
   
    var goodCompostTl = new TimelineMax({ paused: true })
    .to($air, 1.5, { autoAlpha: 1, x: "+=15px", ease: Power4.easeInOut })
    .to($recyclable, 1.5, { autoAlpha: 1, rotate: "-=90deg", ease: Power4.easeInOut }, "-=1.5s")
    .to($grind, 1.5, { autoAlpha: 1, rotate: "-=90deg", ease: Power4.easeInOut }, "-=1.5s")
    .to($scale, 1.5, { autoAlpha: 1, y: "+=10px", ease: Power4.easeInOut }, "-=1.5s")
    .to($www, 1.5, { autoAlpha: 1, ease: Power4.easeInOut }, "-=1.5s");

    clearGoodCompostStage();
    function clearGoodCompostStage(){
        //alert('lol');
        var clearGoodCompostStageTl = new TimelineMax();
        clearGoodCompostStageTl
            .set($air, { autoAlpha: 0, x: "-=10px", transformOrigin: "center center" })
            .set($recyclable, { autoAlpha: 0, rotate: "+=90deg", transformOrigin: "center center" })
            .set($grind, { autoAlpha: 0, rotate: "+=90deg", transformOrigin: "center center" })
            .set($scale, { autoAlpha: 0, y: "-=10px", transformOrigin: "center center" })
            .set($www, { autoAlpha: 0, transformOrigin: "center center" });
        return clearGoodCompostStageTl;
    }

	  new ScrollMagic.Scene({triggerElement: ".good-compost"})
    .on("enter", function (event) {
       // alert('lol');
       goodCompostTl.play();       
    }).triggerHook(0.6).addTo(controller);
  
})(jQuery);

