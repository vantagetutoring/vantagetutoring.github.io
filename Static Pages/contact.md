---
layout: page
permalink: contact
title: Contact Us
description: If you would like to schedule a free trial class, or have any questions, please contact us directly!
---

<div id='enroll'>
    <div>
        <i class="fa fa-phone" aria-hidden="true"></i>
        <p>(647)-588-6288</p>
    </div>
    <div>
        <i class="fa fa-envelope" aria-hidden="true"></i>
        <p><a onclick='window.location.href="mailto:tutoring.vantage@gmail.com"'>tutoring.vantage@gmail.com</a></p>
    </div>
</div>



<style>
    #enroll {
        display:flex;
        justify-content:space-around;
        margin-top:0px;
    }
    #enroll div{
        height:200px;
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        border-radius:20px;
        transition: all 0.1s ease-in-out
    }
    #enroll a {
        cursor:pointer;
    }
    #enroll i{
        color:var(--text-dark);
        font-size:70pt;
        margin:auto;
    }
    #enroll p{
        font-size:20pt;
        font-weight:bold;
        text-align:center;
        margin-top:20px;
    }
    @media only screen and (max-width: 600px) {
        #enroll {
            flex-direction:column;
        }
        #enroll div {
            margin:auto;
            margin-bottom:50px;
        }
        #enroll p{
            width: 100%;
        }
    }
</style>