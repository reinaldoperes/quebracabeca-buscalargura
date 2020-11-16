// Reinaldo Porte Peres – 580554
// João Pedro Santos Oliveira – 585327
// Matheus Ferreira de Favari – 579718

// As matrizes de teste (estado) estão dentro dos regions logo abaixo, só espandir e escolher

//  ----> Matriz correta
var matriz_correta = [[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,null]]

//  ----> Matrizes para testar
//var matriz_estado = [[1,2,3,4], [5,10,6,7], [9,null,11,8], [13,14,15,12]]

//  #region matrizes d2
//  2a
// var matriz_estado = [[1,2,3,4], [5,6,7,null], [9,10,11,8], [13,14,15,12]]
//  2b
// var matriz_estado = [[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,null,14,15]]
//  2c
// var matriz_estado = [[1,2,3,4], [5,6,7,8], [9,10,null,12], [13,14,11,15]]
//  2d
var matriz_estado = [[1,2,3,4], [5,6,7,8], [9,10,null,11], [13,14,15,12]]
//  #endregion

//  #region matrizes d4
//  4a
//var matriz_estado = [[1,2,null,4], [5,6,3,8], [9,10,7,11], [13,14,15,12]]
//  4b
//var matriz_estado = [[1,2,null,3], [5,6,7,4], [9,10,11,8], [13,14,15,12]]
//  4c
//var matriz_estado = [[1,2,3,4], [5,6,7,8], [9,10,15,11], [13,14,12,null]]
//  4d
//var matriz_estado = [[1,2,3,4], [5,6,7,8], [9,11,null,12], [13,10,14,15]]
//  #endregion

//  #region matrizes d6
//  6a
//var matriz_estado = [[1,2,3,4], [5,10,6,8], [9,4,7,11], [13,null,15,12]]
//  6b
//var matriz_estado = [[1,2,3,4], [5,6,7,8], [9,10,null,15], [13,14,12,11]]
//  6c
//var matriz_estado = [[1,2,3,4], [5,12,6,7], [9,11,null,8], [13,14,15,12]]
//  6d
//var matriz_estado = [[1,2,3,4], [5,6,7,8], [13,9,11,12], [10,null,14,15]]
//  #endregion

//  #region matrizes d8
//  8a
//var matriz_estado = [[1,2,3,4], [5,6,7,8], [13,10,null,11], [14,9,15,12]]
//  8b
//var matriz_estado = [[null,1,7,3], [5,2,6,4], [9,10,11,8], [13,14,15,12]]
//  8c
//var matriz_estado = [[1,6,2,3], [5,null,8,4], [9,10,7,12], [13,14,11,15]]
//  8d
//var matriz_estado = [[1,2,3,4], [5,6,11,7], [null,14,10,8], [9,13,15,12]]
//  #endregion

//  #region matrizes d10
//  10a
//var matriz_estado = [[1,2,7,3], [5,6,4,8], [9,10,15,11], [13,null,14,12]]
//  10b
//var matriz_estado = [[1,6,2,7], [5,null,4,3], [9,10,11,8], [13,14,15,12]]
//  10c
//var matriz_estado = [[1,2,4,11], [5,6,3,null], [9,10,8,7], [13,14,15,12]]
//  10d
//var matriz_estado = [[1,2,8,3], [5,10,6,4], [null,9,7,12], [13,14,11,15]]
//  #endregion

//  #region matrizes d12
//  12a
//var matriz_estado = [[1,2,3,4], [5,null,10,7], [14,11,6,8], [9,13,15,12]]
//  12b
//var matriz_estado = [[5,1,3,4], [9,2,7,8], [null,14,10,11], [6,13,15,12]]
//  12c
//var matriz_estado = [[1,2,3,4], [5,7,11,8], [9,10,12,15], [13,14,6,null]]
//  12d
//var matriz_estado = [[1,3,7,4], [5,2,8,null], [9,6,12,15], [13,10,14,11]]
//  #endregion

//  #region matrizes d14
//  14a
//var matriz_estado = [[1,3,null,6], [5,10,2,4], [9,11,8,7], [13,14,15,12]]
//  14b
//var matriz_estado = [[1,2,3,4], [5,6,11,null], [10,15,14,7], [9,13,12,8]]
//  14c
//var matriz_estado = [[1,2,11,3], [6,null,7,4], [5,10,12,8], [9,13,14,15]]
//  14d
//var matriz_estado = [[1,2,7,3], [5,6,12,4], [13,11,null,8], [10,9,14,15]]
//  #endregion

//  #region matrizes d16
//  16a
//var matriz_estado = [[5,1,2,4], [9,6,3,7], [13,10,11,12], [14,null,8,15]]
//  16b
//var matriz_estado = [[1,2,null,8], [5,6,12,3], [9,10,4,15], [13,14,7,11]]
//  16c
//var matriz_estado = [[1,2,4,8], [5,6,3,12], [13,9,null,15], [10,14,7,11]]
//  16d
//var matriz_estado = [[1,3,7,4], [5,2,8,null], [10,6,14,12], [9,13,15,11]]
//  #endregion

//  #region matrizes d18
//  18a
//var matriz_estado = [[5,3,1,4], [6,null,2,7], [14,10,11,8], [9,13,15,12]]
//  18b
//var matriz_estado = [[1,3,6,4], [5,2,11,7], [13,14,9,8], [10,null,15,12]]
//  18c
//var matriz_estado = [[1,9,6,3], [10,null,2,4], [5,12,7,8], [13,14,11,15]]
//  18d
//var matriz_estado = [[2,3,null,4], [1,7,8,12], [5,10,6,15], [9,13,11,14]]
//  #endregion

//  #region matrizes d20
//  20a
//var matriz_estado = [[5,1,2,4], [11,9,3,7], [13,6,null,8], [10,14,12,15]]
//  20b
//var matriz_estado = [[5,1,2,3], [10,6,4,null], [13,11,7,8], [9,14,15,12]]
//  20c
//var matriz_estado = [[1,2,3,4], [9,5,6,8], [12,7,11,15], [13,null,14,10]]
//  20d
//var matriz_estado = [[1,8,6,3], [5,2,7,4], [10,15,14,11], [9,null,13,12]]
//  #endregion

//  ----> Array com as posições corretas dos números
var posicoes_numeros = [[0,0], [0,1], [0,2], [0,3], [1,0], [1,1], [1,2], [1,3], [2,0], [2,1], [2,2], [2,3], [3,0], [3,1], [3,2], [3,3]]

//  ----> Estrutura da matriz
qtd_linhas = 4
qtd_colunas = 4

//  ----> Lista de prioridade
var listaPrioridade = []

//  ----> Quantidade de nós gerados
var qtd_nos = 0

//  ----> Função de busca da posição vazia
function getNullIndex(matriz) {
    for (let i = 0; i < qtd_linhas; i++) {
        for (let j = 0; j < qtd_colunas; j++) {
            if (matriz[i][j] === null) return [i, j];
        }   
    }
}

//  ----> Função pra inserir nó na lista de prioridade
function setHeuristicaPrioridade(no, custo = 0) {
    if (listaPrioridade[no.h + custo] === undefined) listaPrioridade[no.h + custo] = [no];
    else listaPrioridade[no.h + custo].push(no);
}

//  ----> Função pra pegar o nó de menor heurística da lista de prioridade
function getHeuristicaPrioridade() {
    for(let i = 0; i < listaPrioridade.length; i++){
        if (listaPrioridade[i] !== undefined)
            if (listaPrioridade[i].length > 0) return listaPrioridade[i].shift();
    }
}

//  ----> Classe do nó
class No {
    constructor(pai = null, custo = 0, profundidade = 0, acao = null, h = 0, estado = matriz_estado) {
        this.pai = pai;
        this.custo = custo;
        this.profundidade = profundidade;
        this.acao = acao;
        this.h = h;
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

    h1(no) {
        let qtd_fora_lugar = 0;
        for (let i = 0; i < qtd_linhas; i++) {
            for (let j = 0; j < qtd_colunas; j++) {
                if (no.estado[i][j] != matriz_correta[i][j]) {        
                    qtd_fora_lugar++;  
                } 
            }           
        }
        no.h = qtd_fora_lugar;
    }

    h2(no) {
        let soma_movimentos = 0;
        for (let i = 0; i < qtd_linhas; i++) {
            for (let j = 0; j < qtd_colunas; j++) {
                if (no.estado[i][j] != matriz_correta[i][j]) {        
                    let pos_correta = posicoes_numeros[no.estado[i][j] ? no.estado[i][j] - 1 : 11];
                    let sub_linha = Math.abs(i - pos_correta[0]);
                    let sub_coluna = Math.abs(j - pos_correta[1]);
                    soma_movimentos += sub_linha + sub_coluna;
                } 
            }           
        }
        no.h = soma_movimentos;
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

            let noFilho = new No(no, no.custo + 1, no.profundidade + 1, "B", 0, novoEstado)
            listaNo.push(noFilho)
            qtd_nos++;
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
            
            let noFilho = new No(no, no.custo + 1, no.profundidade + 1, "D", 0, novoEstado)
            listaNo.push(noFilho)
            qtd_nos++;
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

            let noFilho = new No(no, no.custo + 1, no.profundidade + 1, "C", 0, novoEstado)
            listaNo.push(noFilho)
            qtd_nos++;
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

            let noFilho = new No(no, no.custo + 1, no.profundidade + 1, "E", 0, novoEstado)
            listaNo.push(noFilho)
            qtd_nos++;
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
    buscaUniforme(raiz) {
        listaNo.push(raiz);
        while (listaNo.length > 0) {
        // for (let index = 0; index < 4; index++) {     
            listaNo.sort((a,b) => {
                return a.custo - b.custo;
            });
            let no = listaNo.shift();
            if (this.testeObjetivo(no)) return no;
            else this.sucessor(no);
        }
    }

    //  ----> Algorítmo de busca GME (para escolher o h() é só comentar/descomentar dentro do forEach)
    buscaGME(raiz){
        listaNo.push(raiz);
        while (listaNo.length > 0) {
            let list = listaNo.filter(l => {
                return l.h === 0;
            })
            
            list.forEach(n => {
                this.h1(n);
                //this.h2(n);

                setHeuristicaPrioridade(n);
            });
            let no = getHeuristicaPrioridade();
            if (this.testeObjetivo(no)) return no;
            else this.sucessor(no);
        }
    }

    //  ----> Algorítmo de busca A* (para escolher o h() é só comentar/descomentar dentro do forEach)
    buscaEstrela(raiz){
        listaNo.push(raiz);
        while (listaNo.length > 0) { 
            let list = listaNo.filter(l => {
                return l.h === 0;
            })
            
            list.forEach(n => {
                //this.h1(n);
                this.h2(n);

                setHeuristicaPrioridade(n, n.custo);
            });
            let no = getHeuristicaPrioridade();
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

let begin = Date.now(); //    ---->Começo da execução

//  ----> Algoritmos, só descomentar para executar

//  ----> Sem informação
//busca.buscaLargura(noPai)
//busca.buscaProfundidade(noPai)
//busca.buscaProfundidadeLimitada(noPai, 5)
//busca.buscaAprIterativo(noPai)
//busca.buscaUniforme(noPai)

//  ----> Com informação
//busca.buscaGME(noPai)
busca.buscaEstrela(noPai)


let end= Date.now(); //    ---->Fim da execução

let tempo_total = (end-begin)/1000+"seg";

console.log('\n\nTempo de execução: ', tempo_total)
console.log('Número de nós gerados: ', qtd_nos, '\n\n')

// Para executar é só abrir o terminal e digitar: node caminho_do_arquivo (tendo em vista que o nodejs está instalado no pc)