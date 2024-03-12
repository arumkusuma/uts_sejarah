// trigger to play music in the background with sweetalert
window.addEventListener('load', () => {
    Swal.fire({

        title: 'Do You Ready to Play',
        // text: "You won't be able to revert this!",
        
        showconfirmButton: true,
        confirmButtonColor: '#00E4ff',
        cancelButtonColor: '#00E4ff',
        confirmButtonText: 'Of Course,',
        cancelButtonText: '',
    }).then((result) => { 
        if(result.isConfirmed){
            document.querySelector('.song').play();
        }
        else {
            document.querySelector('.song').play();
        }
    });
});