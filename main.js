const artikujtSiJSONPrejServerit = [
    {
        "titulli": "Super Lajm Sot ngjarje e rende (video)",
        "permbajtja": "Ne prishtine objekti i komunes pa kulm.",
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
        "titulli": "Super Lajm ngjarje e rende (video) 4",
        "permbajtja": "Ne prishtine objekti i komunes pa kulm."
    },
    {
        "titulli": "Sot ngjarje e rende (video) 5",
        "permbajtja": "Ne prishtine objekti i komunes pa kulm."
    },
    {
        "titulli": "Sot ngjarje e rende (video) 6",
        "permbajtja": "Ne prishtine objekti i komunes pa kulm."
    },
    {
        "titulli": "Sot ngjarje e rende (video) 7",
        "permbajtja": "Ne prishtine objekti i komunes pa kulm."
    }
];

let meTeRejat = document.getElementById("me-te-rejat");

class Artikulli {
    constructor(titulli, permbajtja) {
        this.titulli = titulli;
        this.permbajtja = permbajtja;

        if(this.titulli.search("Super Lajm") >= 0){
            this.superLajm = true;
        }else{
            this.superLajm = false;
        }
    }
    shtoVeten() {
        const elementiArtiulli = document.createElement("article")
        const elementiH2 = document.createElement("h2")
        const textElementiH2 = document.createTextNode(this.titulli)
        elementiH2.appendChild(textElementiH2);
        elementiArtiulli.appendChild(elementiH2);
        const elementiP = document.createElement("p")
        const textElementiP = document.createTextNode(this.permbajtja)
        elementiP.appendChild(textElementiP);
        elementiArtiulli.appendChild(elementiP);
        meTeRejat.appendChild(elementiArtiulli);

        if(this.superLajm === true) {
            elementiArtiulli.style.backgroundColor = "#e84118"
        }
    }
}

let artikujt = [];
for (let index = 0; index < artikujtSiJSONPrejServerit.length; index++) {
    const artikulliJson = artikujtSiJSONPrejServerit[index];
    const arikulliIRi = new Artikulli(artikulliJson.titulli, artikulliJson.permbajtja);
    artikujt.push(arikulliIRi)
    arikulliIRi.shtoVeten();
}










