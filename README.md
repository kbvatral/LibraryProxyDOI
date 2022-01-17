# Library Proxy DOI

A simple browser extension to route a doi url through the Vanderbilt library proxy to access journal articles.

## Description

Since often academics must work away from their institutions, it can be tedious to access journal articles that the institution subscribes to.
What many people do not know, is that these institutions (such as Vanderbilt) often provide proxy servers to link single-sign-on (SSO) institution credentials directly to publisher websites.
This simple extension routes a provided DOI string through Vanderbilt's proxy server, so that journal articles can be accessed away from campus by simply signing in through SSO.

## Getting Started

### Dependencies

This software is designed as a browser extension for Firefox, so the only requirement is a recent Firefox install.

The same software could potentially work in other browsers (e.g. Chrome) with little to no modification, but this has not been tested.

### Installing

* Clone the repository
* ZIP the repository's contents, ensuring that the `manifest.json` file is in the root of the ZIP archive
* Navigate to `about:addons` in Firefox
* Click on the gear icon and select `Install Add-on From File`
* Select the ZIP archive

### Executing program

After installing, Firefox should have a small book icon in the extensions bar. Simply click the icon, enter the DOI string in the popup window and click the submit button.
A new tab will open and attempt to find the article with the matching DOI. 
Follow and SSO prompts from Vanderbilt and you should be directed to the publisher's website with the article unlocked if it is available through Vanderbilt.

## Help

* Can this extension work for other institutions besides Vanderbilt?
  * Theoretically, yes. As long as you know the institution's library proxy server, you can modify the `url` variable in `popup/popup.js` and it should work identically.
* Why won't this specific DOI work?
  * Sometimes the processing of the DOI strings has issues. Try reformatting it in a different way such as excluding the `http://doi.org/` prefix and only including the identifier.
  * If you believe you have encountered a bug, report it and/or make a pull request.

## Version History

* 1.0
    * Initial Release

## License

This project is licensed under the MIT License - see the LICENSE.md file for details
