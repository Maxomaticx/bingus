
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
        document.querySelector('.navbar').appendChild(newPageLink);

        var newPageDiv = document.createElement("div");
        newPageDiv.classList.add("page");
        newPageDiv.innerHTML = "<h2>Page " + pageCount + "</h2><p>This is page " + pageCount + "</p>";
        document.querySelector('.container').appendChild(newPageDiv);

        // Show the newly added page
        showPage(pageCount);

        // Move the "+" button to the right
        document.getElementById("addPage").style.float = "right";
    });

    function showPage(pageNumber) {
        var pages = document.querySelectorAll('.page');
        pages.forEach(function(page) {
            page.classList.remove("active");
        });
        pages[pageNumber - 1].classList.add("active");
    }


    var quill = new Quill('#editor-container', {
        theme: 'snow'  // Specify the theme (snow, bubble)
    });


