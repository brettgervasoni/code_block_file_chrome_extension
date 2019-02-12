window.onload=(function() {
    var codeBlocks = document.getElementsByTagName("code");
    for (var i = 0; i < codeBlocks.length; i++) {
        if (codeBlocks[i].textContent.split("\n").length < 3) { // no newlines
            codeBlocks[i].setAttribute("style", "white-space: normal;");
        }
    }
})();