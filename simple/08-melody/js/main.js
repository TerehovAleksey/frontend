$(document).ready(function () {

    let currentFloor = 2;
    let counterUp = $('.counter-up');
    let counterDown = $('.counter-down');
    let floorPath = $('.home-image path');
    floorPath.on('mouseover', function () {
        currentFloor = $(this).attr('data-floor');
        floorPath.removeClass('current-floor');
        $('.counter').text(currentFloor);
    });
    let setCurrentFloor = () =>  {
        let usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
        $('.counter').text(usCurrentFloor);
        floorPath.removeClass('current-floor');
        $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
    };
    counterUp.on('click', function (){
        if (currentFloor < 18){
            currentFloor++;
            setCurrentFloor();
        }
    });
    counterDown.on('click',function (){
       if (currentFloor > 2){
           currentFloor--;
           setCurrentFloor();
       }
    });
});
