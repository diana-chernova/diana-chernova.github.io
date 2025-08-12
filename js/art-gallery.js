/*!
The solution from http://jsfiddle.net/Tassak/2ve4hbmm/
*/
//
// Scripts
// 

$(function() {
        $('.pop').on('click', function() {
            $('.imagepreview').attr('src', $(this).find('img').attr('src'));
            $('#imagemodal').modal('show');   
        });     
});