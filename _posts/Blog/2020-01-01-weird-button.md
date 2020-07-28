---
layout: blogpost
title: Weird Button Challenge
date:   2020-07-27
categories: blog
author: Jayson Tian

---

Win this challenge by pressing the green button.


<button id='s1' onclick='greendie()'>HOVER OVER ME, don't click.</button>

<button id='s2' onclick='win()'>CLICK HERE TO WIN </button>

<style>
    button {
        position: fixed;
        font-size:20pt;
        padding:20px 30px;
    }
    #s1 {
        background-color: red;
        color:white;
        top:400px;
        left:50px;
    }
    #s2 {
        background-color: green;
        color:white;
        top:400px;
        right:50px;
    }

</style>

<script>
    $('#s2').hide();
    function greendie(){
        $('#s2').remove();
        $('#s1').text("You just killed the green button.");
    }
    $('#s1').mouseover(function(){
        $('#s2').show()   })
        $('#s1').mouseleave(function(){
        $('#s2').hide()   })

        function win(){
            alert('yay congrats you won.')
        }
    </script>
