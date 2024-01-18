let meTeRejat = document.getElementById("me-te-rejat");

const artikujt = [
    {
        "titulli": "Sot ngjarje e rende (video)",
        "permbajtja": "Ne prishtine objekti i komunes pa kulm."
    },
    {
        "titulli": "Sot ngjarje e rende (video) 2",
        "permbajtja": "Ne prishtine objekti i komunes pa kulm."
    },
    {
        "titulli": "Sot ngjarje e rende (video) 3",
        "permbajtja": "Ne prishtine objekti i komunes pa kulm."
    },
    {
        "titulli": "Sot ngjarje e rende (video) 4",
        "permbajtja": "Ne prishtine objekti i komunes pa kulm."
    }
];

function shtoArtikullin(artikulli) {
    const elementiArtiulli = document.createElement("article")
    const elementiH2 = document.createElement("h2")
    const textElementiH2 = document.createTextNode(artikulli.titulli)
    elementiH2.appendChild(textElementiH2);
    elementiArtiulli.appendChild(elementiH2);
    const elementiP = document.createElement("p")
    const textElementiP = document.createTextNode(artikulli.permbajtja)
    elementiP.appendChild(textElementiP);
    elementiArtiulli.appendChild(elementiP);
    meTeRejat.appendChild(elementiArtiulli);
}

for (let index = 0; index < artikujt.length; index++) {
    shtoArtikullin(artikujt[index]);
}







