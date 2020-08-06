



$.getJSON('https://sheet.best/api/sheets/c82f0581-abd9-4b43-ba80-f0237a5656a5', (data)=>{
    (data).forEach(t => {
        var con = $('<div>').addClass('tutor').appendTo('#tutor-con');
        var c = $('<div>').attr('id','first').appendTo(con);
        if (t.Image != ""){
            $('<img>').attr('src',t.Image).appendTo(c);
        } else {$('<img>').attr('src','https://immedilet-invest.com/wp-content/uploads/2016/01/user-placeholder.jpg').appendTo(c);}
        $('<h2>').text(t.Name).appendTo(c);
        $('<p>').text(t.School).appendTo(c);


        

        

        con.click(()=>{
            var d = $('<div>').attr('id','second').appendTo('main');
            var e = $('<div>').attr('id','second-con').appendTo(d);
            var e1 = $('<div>').appendTo(e).attr('id','second-con-1');
            $('<img>').appendTo(e1).attr('src',t.Image);
            $('<h2>').text(t.Name).appendTo(e1);
            $('<button>').appendTo(e1).text('Close').click(()=>{
                d.remove();
            });
            var e2 = $('<div>').attr('id','second-con-2').appendTo(e);
            $('<p>').html('<b>Grade </b> - ' + t.Grade).appendTo(e2);
            $('<p>').html('<b>School </b> - ' + t.School).appendTo(e2);
            $('<p>').html('<b>Teaches </b> - ' + t.Subjects).appendTo(e2);
            $('<p>').html(t.Bio).appendTo(e2);
            d.click(e=>{
                if (e.target.id == 'second'){
                    d.remove();
                }
            })
        });
        
    });
})