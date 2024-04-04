//Links redirects
function whaleTourPage() {
    window.location.href = '/tours/whaletourpage.html'; //Takes you to the Whale Watching Tour Page
}

function grizzlyTourPage() {
    window.location.href = '/tours/grizzly.html'; //Takes you to the Grizzly Bear Watching Tour Page
}

function waterfallBearTourPage() {
    window.location.href = '/tours/waterfallbear.html'; //Takes you to the Bear and Waterfall Tour Page
}

function whaleWildlifeTourPage() {
    window.location.href = '/tours/whalewildlife.html'; //Takes you to the Whale and Wildlife Watching Tour Page
}

function kayakTourPage() {
    window.location.href = '/tours/kayak.html'; //Takes you to the Kayaking Adventure Page
}

function rapidsTourPage() {
    window.location.href = '/tours/oceanrapids.html'; //Takes you to the Ocean Rapids Adventure Page
}

function fishingCharterPage() {
    window.location.href = '/tours/fishingcharter.html'; //Takes you to the Fishing Charter Page
}

function photographyPage() {
    window.location.href = '/tours/photography.html'; //Takes you to the Photography Workshop Page
}

function allTours() {
    window.location.href = '/tours/tours.html'; //Takes you to the page with all the tour links
}

function bookingPage() {
    window.location.href = '/booking/bookingpage.html'; //Takes you to the Booking Page
}

function homePage() {
    window.location.href = '/index.html'; //Takes you to the Home Page
}

//Tours Page
//Make the dropdown box show above the mid container box but make the mid-container above the drop down box when it's not being used, so that you can click the items in the mid-container
//DomContentLoaded has to be added because without it, I was getting the error 'cannot read properties of null (reading addEventListener)
//Loading the DOM first makes sure the content is loaded before it tries to apply the javascript. After I added it, it worked.

document.addEventListener('DOMContentLoaded', function () {
    // This function will run when the DOM is fully loaded
    function handleToursMenuHover() {
        let midContainer = document.getElementById('midContainer');
        let toursTrigger = document.getElementById('tourTrigger');

        toursTrigger.addEventListener('mouseover', function lowerMid () {
            console.log('Mouseover');
            midContainer.style.zIndex = '-1'; // Lower z-index when tours menu is hovered

        });

        toursTrigger.addEventListener('mouseout', function higherMid () {
            console.log('Mouseout');
            midContainer.style.zIndex = '1'; // Restore original z-index when tours menu is not hovered

        });
    }

    handleToursMenuHover(); // Call the function once inside the DOMContentLoaded event listener
});

document.addEventListener('DOMContentLoaded', function () {
    // This function will run when the DOM is fully loaded
    function handleToursMenuHoverHomePage() {
        let video = document.getElementById('big-vid');
        let tourTrigger = document.getElementById('tourTrigger');
        let toursMenu = document.getElementById('toursMenu');

        tourTrigger.addEventListener('mouseover', function lowerMid () {
            console.log('Mouseover');
            video.style.zIndex = '-1'; // Lower z-index when tours menu is hovered
        });

        tourTrigger.addEventListener('mouseout', function higherMid () {
            console.log('Mouseout');
            video.style.zIndex = '1'; // Restore original z-index when tours menu is not hovered
        });
    }

    handleToursMenuHoverHomePage(); // Call the function once inside the DOMContentLoaded event listener
});

