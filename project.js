import scrollbar from 'smooth-scrollbar';

var option = {
    'dampting':0.05,
    'alwaysShowTracks':True
}

scrollbar.init(document.querySelector('#my-scrollbar').option);
/**var x=document.getElementById('Lets Start');

 var modal= Document.getElementById('Lets Start');
 window.onclick= function(event)
 {
     if (even.target == modal)
     {
         modal.style.display="none";
     }
 } */ 

 $('.navbar a').on('click', function(e) {
     if (this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top
            },
            800
        );
    }
});
