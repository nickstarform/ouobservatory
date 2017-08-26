function populateObsDate(url) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        for (Str j: this.responseText.split("\n")) {
            for (Str g : j.split(":")){
                if (g[0].equals("ObsDate")) {
                    document.getElementById('popObsDate').textContent = g[1];
                }
            }
        }
    };
    xhr.open('GET', url);
    xhr.send();
populateObsMess('./Website.properties');
}


function populatePre(url) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (this.responseText.split("\n")[0]){
            document.getElementById('contents').textContent = this.responseText.split("\n")[0];
        }

    };
    xhr.open('GET', url);
    xhr.send();
}
populatePre('./mytext.txt');