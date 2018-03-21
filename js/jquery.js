$(document).ready(function(){
    
    $('#intro-touch').click(function(){
        $('#screensaver').fadeOut(1000);
    });

    $('.ceres, .ceres-gylden, .toersleff').click(function(){
        $(this).css({
            'width' : '90%',
            'position' : 'absolute',
            'margin' : '5%',
            'margin-top' : '7.5%',
            'z-index' : '2'
        });
        
        $('#bg-overlay').css({
            'display' : 'inherit'
        });
    });
    
    // Ceres Øl Plakat
    $('.ceres').click(function(){
        $('#ceres-touch').css({
            'display' : 'inherit',
            'z-index' : '2',
        });
        
        $('.a').css({
            'display' : 'inherit',
        });
    });
    
        // Ceres Øl Textbox
        // Textbox A
        $('.ceres-a').click(function(){
            $('.ceres').css({
                'z-index' : '1'
            });
            
            $('.frame-a, .return-a, .txtbox-a').css({
                'display' : 'inherit'
            });
            
            $('.close').css({
                'display' : 'none'
            });
            
            $('#bg-overlay').css({
                'background-color' : 'rgba(0, 0, 0, 0.7)'
            });
            
            $('.rotation').css({
                'display' : 'none'
            });
        });
    
        // Textbox B
        $('.ceres-b').click(function(){
            $('.ceres').css({
                'z-index' : '1'
            });
            
            $('.frame-b, .return-b, .txtbox-b').css({
                'display' : 'inherit'
            });
            
            $('.close').css({
                'display' : 'none'
            });
            
            $('#bg-overlay').css({
                'background-color' : 'rgba(0, 0, 0, 0.7)'
            });
            
            $('.rotation').css({
                'display' : 'none'
            });
        });
    
        // Textbox C
        $('.ceres-c').click(function(){
            $('.ceres').css({
                'z-index' : '1'
            });
            
            $('.frame-c, .return-c, .txtbox-c').css({
                'display' : 'inherit'
            });
            
            $('.close').css({
                'display' : 'none'
            });
            
            $('#bg-overlay').css({
                'background-color' : 'rgba(0, 0, 0, 0.7)'
            });
            
            $('.rotation').css({
                'display' : 'none'
            });
        });
    
        // Textbox D
        $('.ceres-d').click(function(){
            $('.ceres').css({
                'z-index' : '1'
            });
            
            $('.frame-d, .return-d, .txtbox-d').css({
                'display' : 'inherit'
            });
            
            $('.close').css({
                'display' : 'none'
            });
            
            $('#bg-overlay').css({
                'background-color' : 'rgba(0, 0, 0, 0.7)'
            });
            
            $('.rotation').css({
                'display' : 'none'
            });
        });
        
    
    // Ceres Gylnde Drik PLakat
    $('.ceres-gylden').click(function(){
        $('#gylden-touch').css({
            'display' : 'inherit',
            'z-index' : '2',
        });
        
        $('.b').css({
            'display' : 'inherit',
        });
    });
    
        // Ceres Gyldne Drik Textbox
        // Textbox D
        $('.gylden-a').click(function(){
            $('.ceres-gylden').css({
                'z-index' : '1'
            });
            
            $('.frame-e, .return-e, .txtbox-e').css({
                'display' : 'inherit'
            });
            
            $('.close').css({
                'display' : 'none'
            });
            
            $('#bg-overlay').css({
                'background-color' : 'rgba(0, 0, 0, 0.7)'
            });
            
            $('.rotation').css({
                'display' : 'none'
            });
        });
    
        // Textbox E
        $('.gylden-b').click(function(){
            $('.ceres-gylden').css({
                'z-index' : '1'
            });
            
            $('.frame-f, .return-f, .txtbox-f').css({
                'display' : 'inherit'
            });
            
            $('.close').css({
                'display' : 'none'
            });
            
            $('#bg-overlay').css({
                'background-color' : 'rgba(0, 0, 0, 0.7)'
            });
            
            $('.rotation').css({
                'display' : 'none'
            });
        });
    
        // Textbox F
        $('.gylden-c').click(function(){
            $('.ceres-gylden').css({
                'z-index' : '1'
            });
            
            $('.frame-g, .return-g, .txtbox-g').css({
                'display' : 'inherit'
            });
            
            $('.close').css({
                'display' : 'none'
            });
            
            $('#bg-overlay').css({
                'background-color' : 'rgba(0, 0, 0, 0.7)'
            });
            
            $('.rotation').css({
                'display' : 'none'
            });
        });
    
    // Tørsleff Vanilie Plakat
    $('.toersleff').click(function(){
        $('#toersleff-touch').css({
            'display' : 'inherit',
            'z-index' : '2',
        });
        
        $('.c').css({
            'display' : 'inherit',
        });
    });
    
        // Tørsleff Vanilie Textbox
        // Textbox G
        $('.toersleff-a').click(function(){
            $('.toersleff').css({
                'z-index' : '1'
            });
            
            $('.frame-h, .return-h, .txtbox-h').css({
                'display' : 'inherit'
            });
            
            $('.close').css({
                'display' : 'none'
            });
            
            $('#bg-overlay').css({
                'background-color' : 'rgba(0, 0, 0, 0.7)'
            });
            
            $('.rotation').css({
                'display' : 'none'
            });
        });
    
        // Textbox H
        $('.toersleff-b').click(function(){
            $('.toersleff').css({
                'z-index' : '1'
            });
            
            $('.frame-i, .return-i, .txtbox-i').css({
                'display' : 'inherit'
            });
            
            $('.close').css({
                'display' : 'none'
            });
            
            $('#bg-overlay').css({
                'background-color' : 'rgba(0, 0, 0, 0.7)'
            });
            
            $('.rotation').css({
                'display' : 'none'
            });
        });
    
        // Textbox I
        $('.toersleff-c').click(function(){
            $('.toersleff').css({
                'z-index' : '1'
            });
            
            $('.frame-j, .return-j, .txtbox-j').css({
                'display' : 'inherit'
            });
            
            $('.close').css({
                'display' : 'none'
            });
            
            $('#bg-overlay').css({
                'background-color' : 'rgba(0, 0, 0, 0.7)'
            });
            
            $('.rotation').css({
                'display' : 'none'
            });
        });
    
        // Textbox J
        $('.toersleff-d').click(function(){
            $('.toersleff').css({
                'z-index' : '1'
            });
            
            $('.frame-k, .return-k, .txtbox-k').css({
                'display' : 'inherit'
            });
            
            $('.close').css({
                'display' : 'none'
            });
            
            $('#bg-overlay').css({
                'background-color' : 'rgba(0, 0, 0, 0.7)'
            });
            
            $('.rotation').css({
                'display' : 'none'
            });
        });

    // Close Button
    $('.close').click(function(){
        $('.ceres, .ceres-gylden, .toersleff, #ceres-touch, #gylden-touch, #toersleff-touch, #bg-overlay, .close').removeAttr('style')
    });
    
    // Return Button
    $('.return').click(function(){
        $('.close, .rotation').css({
            'display' : 'inherit',
            'z-index' : '2'
        });
        
        $('#bg-overlay').css({
            'background-color' : 'rgba(0, 0, 0, 0.5)'
        });
        
        $('.frame, .return, .txtbox').css({
            'display' : 'none'
        });
    });
    
    $('.return-a, .return-b, .return-c, .return-d').click(function(){
        $('.ceres').css({
            'display' : 'inherit',
            'z-index' : '2'
        });
    });
    
    $('.return-e, .return-f, .return-g').click(function(){
        $('.ceres-gylden').css({
            'display' : 'inherit',
            'z-index' : '2'
        });
    });
    
    $('.return-h, .return-i, .return-j, .return-k').click(function(){
        $('.toersleff').css({
            'display' : 'inherit',
            'z-index' : '2'
        });
    });
    
    // Idle Timer
    $(document).bind("idle.idleTimer", function(){
    // function you want to fire when the user goes idle
        $(location).attr('href', 'index.html');
    });
    $.idleTimer(3*60000);
});