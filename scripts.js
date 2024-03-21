document.getElementById("addPage").addEventListener("click", function() {
    // Increment the page count
    var pageCount = document.querySelectorAll('.page').length + 1;

    // Create a new page link and page div
    var newPageLink = document.createElement("a");
    newPageLink.href = "#";
    newPageLink.textContent = "Page " + pageCount;
    newPageLink.addEventListener("click", function() {
        showPage(pageCount);
    });

    var plusButton = document.getElementById("addPage");
    // Ensure the new page link is inserted before the plus button
    plusButton.parentElement.insertBefore(newPageLink, plusButton);

    var newPageDiv = document.createElement("div");
    newPageDiv.classList.add("page");
    newPageDiv.innerHTML = "<h2>Page " + pageCount + "</h2><p>This is page " + pageCount + "</p>";
    document.querySelector('.container').appendChild(newPageDiv);

    // Show the newly added page
    showPage(pageCount);
});

// Function to show a specific page
function showPage(pageNumber) {
    var pages = document.querySelectorAll('.page');
    pages.forEach(function(page) {
        page.classList.remove("active");
    });
    if (pageNumber > 0 && pageNumber <= pages.length) {
        pages[pageNumber - 1].classList.add("active");
    }
}

// Event listener for the "Home" button
document.getElementById("homePage").addEventListener("click", function() {
    // Assuming your home page is the first page
    showPage(1);
});

// Initialize Quill editor
var quill = new Quill('#editor-container', {
    theme: 'snow'  // Specify the theme (snow, bubble)
});
