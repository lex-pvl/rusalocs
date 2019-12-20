$(document).ready(function() {
        $(".power-slider").ionRangeSlider({
                type: "double",
                min: 0,
                max: 100,
                from: 20,
                to: 60,
                grid: false
        });

        $(".light-slider").ionRangeSlider({
                type: "double",
                min: 0,
                max: 5000,
                from: 600,
                to: 3000,
                grid: false
        });
        var firstTitle = $('#sort').find('optgroup').eq(0).attr('label');
        $('#sort').selectize();
        $('.selectize-input').prepend('<div class="tit">'+firstTitle+'</div>')
        $('.sort-select').find('input').attr('disabled', 'true');
        $('#sort').on('change', function(){
               var curentVal = $(this).val();
               var title = $('.option[data-value="'+curentVal+'"]').parent().attr('data-group')
               $('.selectize-input').prepend('<div class="tit">'+title+'</div>')
        })  
});