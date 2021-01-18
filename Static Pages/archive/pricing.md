---
layout: page
permalink: /pricing
title: Pricing
description: An affordable and considerate model. Trial class anytime. Please see program for more information on each course type.
link: [Program Info, '/program']
---

<br>
<div id='pricing'>
    <div>
        <img src='./assets/enroll/write.png'>
        <h2>Homework Help</h2>
        <h1>$ 8 - 15 <span> / hr</span></h1>
        <button onclick='window.location.href = "enroll"'>Try it Free</button>
        <ul>
            <li>Tutors help with extracurricular or school based homework</li>
        </ul>
    </div>
    <div>
        <img src='./assets/enroll/book.png'>
        <h2>Standard Courses</h2>
        <h1>$ 12 - 20 <span> / hr</span></h1>
        <button onclick='window.location.href = "enroll"'>Try it Free</button>
        <ul>
            <li>School subject lessons</li>
            <li>Notes, resources, and homework provided</li>
        </ul>
    </div>
    <div>
        <img src='./assets/enroll/books.png'>
        <h2>Premium Courses</h2>
        <h1>$ 12 - 25 <span> / hr</span></h1>
        <button onclick='window.location.href = "enroll"'>Try it Free</button>
        <ul>
            <li>Skilled courses or difficult extracurricular couses</li>
            <li>After-class support by tutors between lessons</li>
        </ul>
    </div>
    <div>
        <img src='./assets/enroll/work.png'>
        <h2>Workshop</h2>
        <h1>$ 25 <span>session</span></h1>
        <button onclick='window.location.href = "enroll"'>Enroll Now</button>
        <ul>
            <li>Test, high school, program entrence prep or Q&A</li>
        </ul>
    </div>
</div>

\* Note all rates are calculated on an hourly basis.



<style>
    #pricing {
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
    }
    #pricing div{
        display:flex;
        flex-direction:column;
        width: 200px;
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
        width:200px;
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

    @media only screen and (max-width: 600px) {
        #pricing{
            width:100%;
        }
        #pricing div{
            width:300px;
            margin:auto;
            display:flex;
            justify-content:space-around;
            border: 3px solid var(--main-light);
            border-radius:10px;
            padding: 25px 15px;
            margin-bottom:50px;
        }
        #pricing div img, #pricing div button, #pricing div li, #pricing div h2, #pricing div h1{
            margin:0px auto;
            text-align:center;
        }
        #pricing div h1 {
            margin:10px auto;
            margin-bottom:20px;
        }
    }



</style>