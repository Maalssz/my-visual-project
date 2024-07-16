<><script src="js/main.js"></script><script>
    var slideIndex = 0;

    function showSlides() { }
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i <slides.length />; i++) {slides[i].style.display = "none"};
    {"}"}
    slideIndex++;
    if (slideIndex {">"} slides.length) {slideIndex = 1};
    {"}"}
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 6000); // To change slide every 6 seconds
    {"}"}

    showSlides();
</script><script>
        document.getElementById('searchForm').addEventListener('submit', function (event) {event.preventDefault()}// Prevent the default form submission
        ; // Prevent the default form submission

        var searchTerm = document.getElementById('search').value.toLowerCase();
        // Converted the search term to lowercase for case-insensitive matching

        // customize the logic to determine where to redirect based on the searchTerm
        switch (searchTerm) { }
        case 'home':
        window.location.href = 'index.html';
        break;
        case 'about us':
        window.location.href = 'pagetwo.html';
        break;
        case 'activities':
        window.location.href = 'page 4.html';
        break;
        case 'the team':
        window.location.href = 'pagethree.html';
        break;
        case 'enquire':
        window.location.href = 'pagefive.html';
        break;
        case 'news':
        window.location.href = 'page6.html';
        break;
        default:
        // Handle other cases or perform the search functionality
        console.log('Performing search for: ' + searchTerm);
        break;
        {"}"}
        {"}"});
    </script></>
