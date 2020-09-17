var matriz_correta = [[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,null]]

var matriz_estado = [[1,2,3,4], [5,10,6,7], [9,null,11,8], [13,14,15,12]]
// var matriz_estado = [[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,null,15]]
// var matriz_estado = [[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,null]]

qtd_linhas = 4
qtd_colunas = 4

function getNullIndex(matriz) {
    for (let i = 0; i < qtd_linhas; i++) {
        for (let j = 0; j < qtd_colunas; j++) {
            if (matriz[i][j] === null) return [i, j];
        }   
    }
}

class No {
    constructor(pai = null, custo = 0, profundidade = 0, acao = null, estado = matriz_estado) {
        this.pai = pai;
        this.custo = custo;
        this.profundidade = profundidade;
        this.acao = acao;
        this.estado = estado;
    }
}

class Busca {
    testeObjetivo(estado) {
        for (let i = 0; i < qtd_linhas; i++) {
            for (let j = 0; j < qtd_colunas; j++) {
                if (estado[i][j] != matriz_correta[i][j]) {        
                    console.log('Matriz estado analisada: ', estado)      
                    return false;   
                } 
            }           
        }
        console.log('Matriz estado final: ', estado)
        return true;
    }

    sucessor(no) {        
        let posicaoNull = getNullIndex(no.estado)
        //baixo
        if (posicaoNull[0] > 0){
            let novoEstado = []

            for (let i = 0; i < no.estado.length; i++)
                novoEstado[i] = no.estado[i].slice();

            let valorPosTroca = novoEstado[posicaoNull[0]-1][posicaoNull[1]]
           
            novoEstado[posicaoNull[0]-1][posicaoNull[1]] = null
            novoEstado[posicaoNull[0]][posicaoNull[1]] = valorPosTroca

            let noFilho = new No(no, no.custo + 1, no.profundidade + 1, "B", novoEstado)
            listaNo.push(noFilho)
        }
        //direita
        if (posicaoNull[1] > 0){
            let novoEstado = []

            for (let i = 0; i < no.estado.length; i++)
                novoEstado[i] = no.estado[i].slice();

            let valorPosTroca = novoEstado[posicaoNull[0]][posicaoNull[1]-1]

            novoEstado[posicaoNull[0]][posicaoNull[1]-1] = null
            novoEstado[posicaoNull[0]][posicaoNull[1]] = valorPosTroca
            
            let noFilho = new No(no, no.custo + 1, no.profundidade + 1, "D", novoEstado)
            listaNo.push(noFilho)
        }
        //cima
        if (posicaoNull[0] < 3){
            let novoEstado = []

            for (let i = 0; i < no.estado.length; i++)
                novoEstado[i] = no.estado[i].slice();

            let valorPosTroca = novoEstado[posicaoNull[0]+1][posicaoNull[1]]

            novoEstado[posicaoNull[0]+1][posicaoNull[1]] = null
            novoEstado[posicaoNull[0]][posicaoNull[1]] = valorPosTroca

            let noFilho = new No(no, no.custo + 1, no.profundidade + 1, "C", novoEstado)
            listaNo.push(noFilho)
        }
        //esquerda
        if (posicaoNull[1] < 3){
            let novoEstado = []

            for (let i = 0; i < no.estado.length; i++)
                novoEstado[i] = no.estado[i].slice();

            let valorPosTroca = novoEstado[posicaoNull[0]][posicaoNull[1]+1]

            novoEstado[posicaoNull[0]][posicaoNull[1]+1] = null
            novoEstado[posicaoNull[0]][posicaoNull[1]] = valorPosTroca            

            let noFilho = new No(no, no.custo + 1, no.profundidade + 1, "E", novoEstado)
            listaNo.push(noFilho)
        }
    }

    buscaLargura(raiz) {
        listaNo.push(raiz);
        while (listaNo.length > 0) {
        // for (let index = 0; index < 4; index++) {
            let no = listaNo.shift();
            if (this.testeObjetivo(no.estado)) return no;
            else this.sucessor(no);
        }
    }
}

var listaNo = []

var noPai = new No()

var busca = new Busca()
let obj = busca.buscaLargura(noPai)

console.log('Profundidade: ', obj.profundidade)
