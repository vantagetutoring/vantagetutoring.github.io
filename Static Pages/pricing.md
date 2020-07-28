---
layout: page
permalink: /pricing
title: Pricing
description: An affordable and considerate model. Trial classes anytime.
---

<br>
<div id='pricing'>
    <div>
        <img src='./assets/pricing-p.png'>
        <h2>Homework Help</h2>
        <h1>$15 <span> / hr</span></h1>
        <button>Try it Free</button>
        <ul>
            <li>Tutors help with extracurricular or school based homework</li>
        </ul>
    </div>
    <div>
        <img src='./assets/pricing-1.png'>
        <h2>Standard Courses</h2>
        <h1>$20 <span> / hr</span></h1>
        <button>Try it Free</button>
        <ul>
            <li>Tutors help with extracurricular or school based homework</li>
        </ul>
    </div>
    <div>
        <img src='./assets/pricing-p.png'>
        <h2>Select Premium Courses</h2>
        <h1>$25 <span> / hr</span></h1>
        <button>Enroll Now</button>
        <ul>
            <li>Tutors help with extracurricular or school based homework</li>
        </ul>
    </div>
    <div>
        <img src='./assets/pricing-p.png'>
        <h2>8 Class Bundle</h2>
        <h1>85% <span>Off</span></h1>
        <button>Enroll Now</button>
        <ul>
            <p>Helo</p>
            <li>Tutors help with extracurricular or school based homework</li>
        </ul>
    </div>
</div>

\* Note all rates are calculated on an hourly basis.



<style>
    #pricing {
        display:flex;
        justify-content:space-between;
    }
    #pricing div{
        display:flex;
        flex-direction:column;
        width: 23%;
    }

    #pricing div img{
        width:120px;
    }
    #pricing div h2{
        font-size:15pt;
    }
    #pricing div h1{
        font-size:30pt;
        font-weight:200;
        margin-top:10px;
    }
    #pricing div span{
        font-size:12pt;
        font-weight:400;
        color:rgba(0,0,0,0.4);
    }
    #pricing div ul{
        list-style: none;
        margin-left:-40px;
    }
    #pricing p{
        color:rgba(0,0,0,0.45);
        margin:0px;
        margin-bottom:5px;
    }
    #pricing div li{
        color:rgba(0,0,0,0.45);
        position: relative;
        padding-left: 1.5em;
    }
     #pricing div li:before{
        content: '✓';
        position: absolute;
        left: 0;  /* place the SVG at the start of the padding */
        width: 1em;
        height: 1em;
    }

    #pricing div button{
        color:#ec6f5b;
        font-weight:bold;
        background-color:#fceada;
        border:none;
        font-size: 12pt;
        padding: 13.5px 10px;
        width:180px;
        border-radius: 50px;
        margin-top:15px;
        cursor:pointer;
    }


</style>