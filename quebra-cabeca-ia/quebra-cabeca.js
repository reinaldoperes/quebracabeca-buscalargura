//  ----> Função de busca da posição vazia
function getNullIndex(matriz) {
    for (let i = 0; i < qtd_linhas; i++) {
        for (let j = 0; j < qtd_colunas; j++) {
            if (matriz[i][j] === null) return [i, j];
        }   
    }
}

//  ----> Classe do nó
class No {
    constructor(pai = null, custo = 0, profundidade = 0, acao = null, estado = matriz_estado) {
        this.pai = pai;
        this.custo = custo;
        this.profundidade = profundidade;
        this.acao = acao;
        this.estado = estado;
    }
}

//  ----> Classe dos algorítmos
class Busca {
    //  ----> Função de teste de objetivo
    testeObjetivo(no) {
        for (let i = 0; i < qtd_linhas; i++) {
            for (let j = 0; j < qtd_colunas; j++) {
                if (no.estado[i][j] != matriz_correta[i][j]) {        
                    // console.log('Matriz estado analisada: ', no.estado)      
                    return false;   
                } 
            }           
        }
        console.log('Matriz objetivo encontrada: ')
        console.log(no)
        return true;
    }

    //  ----> Função de criação dos nós sucessores
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
            console.log(noFilho)
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
            console.log(noFilho)
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
            console.log(noFilho)
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
            console.log(noFilho)
        }
        console.log('\n======================\n')
    }

    //  ----> Algorítmo de busca em largura
    buscaLargura(raiz) {
        listaNo.push(raiz);
        while (listaNo.length > 0) {
        // for (let index = 0; index < 4; index++) {
            let no = listaNo.shift();
            if (this.testeObjetivo(no)) return no;
            else this.sucessor(no);
        }
    }

    //  ----> Algorítmo de busca em profundidade
    buscaProfundidade(raiz) {
        listaNo.push(raiz);
        while (listaNo.length > 0) {
        // for (let index = 0; index < 4; index++) {
            let no = listaNo.pop();
            if (this.testeObjetivo(no)) return no;
            else this.sucessor(no);
        }
    }

    //  ----> Algorítmo de busca em profundidade limitada
    buscaProfundidadeLimitada(raiz, l) {
        listaNo.push(raiz);
        while (listaNo.length > 0) {
        // for (let index = 0; index < 4; index++) {            
            let no = listaNo.pop();
            if (this.testeObjetivo(no)) return no;
            else if (no.profundidade < l) this.sucessor(no);
        }

        return null;
    }

    //  ----> Algorítmo de busca em aprofundamento iterativo
    buscaAprIterativo(raiz) {
        let l = 0;

        while(true) {
            let n = this.buscaProfundidadeLimitada(raiz, l)
            if(n == null) l++;
            else {
                console.log("Profundidade atingida --> ", l)
                return n;
            }
        }
    }

    //  ----> Algorítmo de busca uniforme
    buscaUniforme(raiz){
        listaNo.push(raiz);
        while (listaNo.length > 0) {
        // for (let index = 0; index < 4; index++) {     
            listaNo.sort((a,b) => {
                return a - b;
            });
            let no = listaNo.shift();
            if (this.testeObjetivo(no)) return no;
            else this.sucessor(no);
        }
    }
}

//  ----> Lista de nós
var listaNo = []

//  ----> Nó raiz
var noPai = new No()

var busca = new Busca()


//  Matriz correta
var matriz_correta = [[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,null]]

//  Matrizes para testar
var matriz_estado = [[1,2,3,4], [5,10,6,7], [9,null,11,8], [13,14,15,12]]
// var matriz_estado = [[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,null,15]]
// var matriz_estado = [[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,null]]

//  Estrutura da matriz
var qtd_linhas = 4
var qtd_colunas = 4

//  ----> Algorítmos, só descomentar

 let obj = busca.buscaLargura(noPai)
//  let obj = busca.buscaProfundidade(noPai)
//  let obj = busca.buscaProfundidadeLimitada(noPai, 5)
//  let obj = busca.buscaAprIterativo(noPai)
//  let obj = busca.buscaUniforme(noPai)

