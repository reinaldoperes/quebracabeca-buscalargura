class No {
    constructor(pai = null, a = null, b = null) {
        this.pai = pai;
        this.a = a;
        this.b = b;
    }
}

var listaNo = []

var noPai = new No()

listaNo.push(noPai);

// while (listaNo.length > 0) {
for (let index = 0; index < 2; index++) {
    let no = listaNo.shift()    
    let noFilho1 = new No(no, 1, 2)
    let noFilho2 = new No(no, 3, 4)
    let noFilho3 = new No(no, 5, 6)
    listaNo.push(noFilho1)
    listaNo.push(noFilho2)
    listaNo.push(noFilho3)
    console.log('Array: ', index, listaNo)
}

// console.log('Array 2:', listaNo)

/*
listaNo.push(raiz);
while (listaNo.length > 0) {
    let no = listaNo.splice(0)[0];
    if (this.testeObjetivo(no)) return no;
    else this.sucessor(no);
}*/