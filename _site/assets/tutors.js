



$.getJSON('https://sheet.best/api/sheets/c82f0581-abd9-4b43-ba80-f0237a5656a5', (data)=>{
    (data.rows).forEach(t => {
        var c = $('<div>').addClass('tutor').appendTo('#tutor-con');
        if (t.image != ''){
            $('<img>').attr('src',t.image).appendTo(c);
        } else {$('<img>').attr('src','https://immedilet-invest.com/wp-content/uploads/2016/01/user-placeholder.jpg').appendTo(c);}
        $('<h2>').text(t.name).appendTo(c);
        $('<p>').text(t.school).appendTo(c);

    });
})