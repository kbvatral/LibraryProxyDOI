function listenForClicks() {
    document.addEventListener("click", (e) => {
        function formSubmitHandler() {
            let doi = document.forms["Library Proxy"]["doi"].value;
            if(doi == ""){
                return;
            }

            firstDigit = doi.search(/\d/);
            if(firstDigit == -1){
                return;
            }
            
            doi = doi.substring(firstDigit)
            let url = "http://doi-org.proxy.library.vanderbilt.edu/" + doi
            browser.tabs.create({
                "url": url
            });
        }

        if (e.target.classList.contains("button")) {
            formSubmitHandler();
        }
    });
}

listenForClicks();