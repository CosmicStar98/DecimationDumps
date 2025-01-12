<!DOCTYPE html>
<html lang="en-US">
   <head>
	<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Decimation - The Unofficial Minecraft Zombie Mod</title>
      <link rel="stylesheet" href="https://www.mcdecimation.net/css/components.css">
      <link rel="stylesheet" href="https://www.mcdecimation.net/css/icons.css">
      <link rel="stylesheet" href="https://www.mcdecimation.net/css/responsee.css">
      <link rel="stylesheet" href="https://www.mcdecimation.net/owl-carousel/owl.carousel.css">
      <link rel="stylesheet" href="https://www.mcdecimation.net/owl-carousel/owl.theme.css">
      <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800&subset=latin,latin-ext' rel='stylesheet' type='text/css'>
      <script type="text/javascript" src="https://www.mcdecimation.net/js/jquery-1.8.3.min.js"></script>
      <script type="text/javascript" src="https://www.mcdecimation.net/js/jquery-ui.min.js"></script>
   </head>
   <body class="size-960">
   
       <!-- Universal Bar -->
		   
      <!-- HEADER -->
      <header>
         <div class="line">
            <div class="box bannertop1 bannertop2 setrel">
               <div class="s-12 l-5">
                  <img src="https://www.mcdecimation.net/img/logo.png">
               </div>
            </div>
         </div>
         <!-- TOP NAV -->  
         <div class="line">
            <nav class="margin-bottom">
               <p class="nav-text">Decimation - Navigation</p>
               <div class="top-nav s-12 l-10">
                  <ul>
                      <li><a href="https://www.mcdecimation.net/">Home</a></li>
                      <li>
                        <a href="https://www.mcdecimation.net/download/">Download</a>
                      </li>
                      <li>
                          <a href="https://www.mcdecimation.net/live/">Live Maps</a>
                      </li>
					  <li>
                          <a href="https://boehmod.buycraft.net/">Donate</a>
                      </li>
                  </ul>
               </div>
               <div class="hide-s hide-m l-2">
                  <a href="http://twitter.com/MCDecimation">
                     <i class="icon-twitter_circle icon2x right padding"></i>
                  </a>
               </div>
            </nav>
         </div>
      </header>
      <section>
         <!-- CAROUSEL -->  
         <div class="line">
            <div id="header-carousel" class="owl-carousel owl-theme margin-bottom">
               <div class="item"><img src="img/header-1.png" alt=""></div>
               <div class="item"><img src="img/header-2.png" alt=""></div>
               <div class="item"><img src="img/header-3.png" alt=""></div>
               <div class="item"><img src="img/header-4.png" alt=""></div>
               <div class="item"><img src="img/header-5.png" alt=""></div>
            </div>
         </div>
         <!-- ASIDE NAV AND CONTENT -->
         <div class="line">
            <div class="box margin-bottom welcomecorner1">
               <div class="margin">
                  <!-- CONTENT -->
                  <article class="s-12 m-7 l-12">
                     <h1>Welcome to Decimation</h1>
                     <p>
					 Decimation is a scary, realistic and open-world zombie survival Mod, in which players (or Survivors) have one 
					 task: Survive in this zombie-ridden world for as long as possible! Over time, players will experience powerful 
					 moments and events whilst emerging in this mods gameplay. You will make friends and foe, join as a team or betray 
					 your squad over greed. Every descision made in Decimation counts towards your survival.
                     </p>
                  </article>
               </div>
            </div>
         </div>
		          <!-- HOME PAGE BLOCK -->      
         <div class="line">
            <div class="margin">
               <div class="s-12 m-6 l-4 margin-bottom">
                  <div class="box boximage1">
                     <h4>Play Now</h4>
                     <p>
					    What are you waiting for?! Download the mod now and join thousands of other players in-game!
					    <a href="download" >Play Now!</a>
					 </p>
                  </div>
               </div>
               <div class="s-12 m-6 l-4 margin-bottom">
                  <div class="box boximage2">
                     <h4>Official Discord</h4>
                     <p>
					    Feeling lonely? Join our Official Discord where thousands of players discuss everything decimation-related!
					    <a href="https://discord.gg/Decimation" target="_blank">discord.gg/Decimation</a>
					 </p>
                  </div>
               </div>
               <div class="s-12 m-6 l-4 margin-bottom">
                  <div class="box boximage3">
                     <h4>⭐ Supporter Cape</h4>
                     <p>
					    Feel like supporting the Decimation development and hosting? For just $1/m, you can get an awesome in-game Supporter status!
					    <a href="http://boehmod.buycraft.net/" target="_blank">Become a Supporter</a>
					 </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <!-- FOOTER -->
      <footer class="line">
         <div class="box">
            <div class="s-12 l-6">
               <p>Copyright 2018, MCDecimation - Official Website</p>
            </div>
            <div class="s-12 l-6">
               <a class="right" target="_blank" href="http://boehmod.buycraft.net/" title="Decimation - Become a Supporter">⭐ Become a Supporter!</a>
            </div>
         </div>
      </footer>                                                                   
      <script type="text/javascript" src="js/responsee.js"></script>               
      <script type="text/javascript" src="owl-carousel/owl.carousel.js"></script>
      
      <script type="text/javascript">
        jQuery(document).ready(function($) {
          var owl = $('#header-carousel');
          owl.owlCarousel({
            nav: true,
            dots: true,
            items: 1,
            loop: true,
            navText: ["&#xf007","&#xf006"],
            autoplay: true,
            autoplayTimeout: 3000
          });
          var owl = $('#gallery-carousel');
          owl.owlCarousel({
            nav: false,
            dots: true,
            loop: true,
            navText: ["&#xf007","&#xf006"],
            autoplay: true,
            autoplayTimeout: 3000,
            responsive: {
              0: {
                items: 1
              },
              769: {
                items: 2
              },
              960: {
                items: 4
              }
            }
          });
        })
      </script>
   </body>
</html>