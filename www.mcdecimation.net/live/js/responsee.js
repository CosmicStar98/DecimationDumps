<!DOCTYPE html>
<html lang="en-US">
<head>
<title>Welcome - Decimation</title>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link rel="stylesheet" href="https://www.mcdecimation.net/css/components.css">
<link rel="stylesheet" href="https://www.mcdecimation.net/css/icons.css">
<link rel="stylesheet" href="https://www.mcdecimation.net/css/responsee.css">
<link rel="stylesheet" href="https://www.mcdecimation.net/owl-carousel/owl.carousel.css">
<link rel="stylesheet" href="https://www.mcdecimation.net/owl-carousel/owl.theme.css">
<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800&subset=latin,latin-ext' rel='stylesheet' type='text/css'>
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.3.0/jquery.min.js"></script>
<script type="text/javascript" src="https://www.mcdecimation.net/js/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="https://www.mcdecimation.net/js/jquery-ui.min.js"></script>
</head>
<body class="size-960">
<style>
    
    div.boehmodnav{
    
        background: rgba(0,0,0,0.5);
        height:45px;
        line-height: 40px;
        text-align: right;
        font-size: .75rem;
        border: 2px rgba(0,0,0,1);
        box-shadow: inset 0 0 10px #000000;
        -moz-box-shadow: inset 0 0 10px #000000;
        -webkit-box-shadow: inset 0 0 10px #000000;
    
    }
    
    img.boehmodnav{
    
        display: block;
        margin-left: auto;
        margin-right: auto;
        height: 75%;
        transform: translate(0px, 5px);
    
    }
    
    </style>
<div class="boehmodnav">
<a href="https://www.boehmod.com/">
<img class="boehmodnav" src="/img/boehmodlogo.png" alt="BoehMod Logo">
</a>
</div>

<div class="top-bar background">
<div class="line">
<div class="s-12 m-6 l-6">
<div class="top-bar-contact">
<p class="text-size-12">
Join our
<a class="text-orange-hover" href="http://discord.gg/BoehMod">
Discord Server
</a>
 and interact with our community!
</p>
</div>
</div>
<div class="s-12 m-6 l-6">
<div class="right optional-stuff">
<ul class="top-bar-social right">
<li>
<a href="http://www.twitter.com/BoehMod" target="_blank">
<img src="/img/icon_twitter.png" alt="Twitter Icon">
</a>
</li>
<li>
<a href="http://www.youtube.com/BoehMod" target="_blank">
<img src="/img/icon_youtube.png" alt="YouTube Icon">
</a>
</li>
<li>
<a href="https://discord.gg/BoehMod" target="_blank">
<img src="/img/icon_discord.png" alt="Discord Icon">
</a>
</li>
</ul>
</div>
</div>
</div>
</div>
<style>
.stats-container {
    float: right;
    margin-right: 30px;
    padding: 0px;
    margin-top: 15px;
    text-align: center;;
}
</style>
<header>
<div class="line">
<div class="box bannertop1 setrel">
<div class="s-12 l-5">
<a href="/">
<img src="https://www.mcdecimation.net/img/logo.png">
</a>
</div>
<div class="s-4 r-5 stats-container optional-stuff">
<div class="box">
<span id="globalStats">Loading Statistics...</span>
</div>
</div>
</div>
</div>

<div class="line">
<nav class="margin-bottom">
<p class="nav-text">Decimation - Navigation</p>
<div class="top-nav s-12 l-10">
<ul>
<li>
<a href="https://www.mcdecimation.net/">Home</a>
</li>
<li>
<a href="https://www.mcdecimation.net/download/">Download</a>
</li>
<li>
<a target="_blank" href="https://www.boehmod.com">Forums</a>
</li>
<li>
<a href="https://www.mcdecimation.net/live/">Live Maps</a>
</li>
<li>
<a target="_blank" href="https://store.boehmod.com/">Donate</a>
</li>
<li>
<a target="_blank" href="https://discord.gg/BoehMod">Discord</a>
</li>
</ul>
</div>
<div class="hide-s hide-m l-2">
<a href="https://twitter.com/BoehMod">
<i class="icon-twitter_circle icon2x right padding"></i>
</a>
</div>
</nav>
</div>
</header>
<script>

function updateStats(){
    $("#globalStats").load("https://www.mcdecimation.net/globalstats.php",function () {
         $(this);
    });
}

updateStats();
setInterval(function(){
    updateStats()
}, 2000);

</script>
<section>

<div class="line">
<div class="box margin-bottom welcomecorner1">
<div class="margin">

<article class="s-12 m-7 l-12">
<h1>Welcome to Decimation</h1>
<p>
Decimation is a scary, realistic and open-world zombie survival Mod, in which players (or
Survivors) have one
task: Survive in this zombie-ridden world for as long as possible! Over time, players will
experience powerful
moments and events whilst emerging in this mods gameplay. You will make friends and foe, join as
a team or betray
your squad over greed. Every descision made in Decimation counts towards your survival.
</p>
</article>
</div>
</div>
</div>

<div class="line">
<div id="header-carousel" class="owl-carousel owl-theme margin-bottom">
<div class="item"><img src="img/header-1.png" alt="Header Image 1"></div>
<div class="item"><img src="img/header-2.png" alt="Header Image 2"></div>
<div class="item"><img src="img/header-3.png" alt="Header Image 3"></div>
<div class="item"><img src="img/header-4.png" alt="Header Image 4"></div>
<div class="item"><img src="img/header-5.png" alt="Header Image 5"></div>
</div>
</div>

<div class="line">
<div class="margin">
<div class="s-12 m-6 l-4 margin-bottom">
<div class="box boximage1">
<h4>Play Now</h4>
<p>
What are you waiting for?! Download the mod now and join thousands of other players in-game!
<a href="download/index.php">Play Now!</a>
</p>
</div>
</div>
<div class="s-12 m-6 l-4 margin-bottom">
<div class="box boximage2">
<h4>Official Discord</h4>
<p>
Feeling lonely? Join our Official Discord where thousands of players discuss everything
decimation-related!
<a href="https://discord.gg/BoehMod" target="_blank">discord.gg/BoehMod</a>
</p>
</div>
</div>
<div class="s-12 m-6 l-4 margin-bottom">
<div class="box boximage3">
<h4>⭐ Supporter Cape</h4>
<p>
Feel like supporting the Decimation development and hosting? For just $1/m, you can get an
awesome in-game Supporter status!
<a href="https://store.boehmod.com" target="_blank">Buy Now!</a>
</p>
</div>
</div>
</div>
</div>
</section>

<footer class="line">
<div class="box">
<div class="s-12 l-6">
<p>
<a target="_blank" href="http://www.boehmod.com/">
<img style="width:25%; margin-bottom:3px;" src="https://www.mcdecimation.net/img/loading/logo-nohead.png" alt="BoehMod Logo">
</a>
Copyright © <a target="_blank" href="https://www.boehmod.com/"><b>BoehMod</b></a> 2020 All Rights Reserved
</p>
</div>
<div class="s-12 l-6">
<a class="right" target="_blank" href="https://store.boehmod.com/" title="Decimation - Become a Supporter">⭐ Become a Supporter!</a>
</div>
</div>
</footer>
<br>
<script type="text/javascript" src="js/responsee.js"></script>
<script type="text/javascript" src="owl-carousel/owl.carousel.js"></script>
<script type="text/javascript">
    jQuery(document).ready(function ($) {
        var owl = $('#header-carousel');
        owl.owlCarousel({
            nav: true,
            dots: true,
            items: 1,
            loop: true,
            navText: ["&#xf007", "&#xf006"],
            autoplay: true,
            autoplayTimeout: 3000
        });
        var owl = $('#gallery-carousel');
        owl.owlCarousel({
            nav: false,
            dots: true,
            loop: true,
            navText: ["&#xf007", "&#xf006"],
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