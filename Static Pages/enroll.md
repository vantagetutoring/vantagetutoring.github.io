---
layout: page
permalink: enroll
title: Course Enrollment
description: Thank you for your interest! <br> There are a variety of ways in which you can enroll your child, please select your preferred method below. Once enrolled, you and your child will automatically gain access to the course dashboard.
---

<div id='enroll'>
    <div>
        <i class="fa fa-envelope" aria-hidden="true"></i>
        <p>Email</p>
    </div>
    <div>
        <i class="fa fa-globe-americas" aria-hidden="true"></i>
        <p>Online</p>
    </div>
    <div>
        <i class="fa fa-weixin" aria-hidden="true"></i>
        <p>Wechat</p>
    </div>
</div>

<style>
    #enroll {
        display:flex;
        justify-content:space-around;
        margin-top:60px;
    }
    #enroll .fa-weixin{
        color: #66b05d;
    }
    #enroll .fa-envelope{
        color: #ed8e6d;
    }
    #enroll .fa-globe-americas{
        color: #6399e0;
    }
    #enroll div{
        width:200px;
        height:200px;
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        border-radius:20px;
        transition: all 0.1s ease-in-out
    }

    #enroll div:hover {
        background-color:#ebebeb;
        cursor:pointer;
    }
    #enroll i{
        font-size:80pt;
        margin:auto;
        margin-tOp:30px;
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