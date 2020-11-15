// Reinaldo Porte Peres – 580554
// João Pedro Santos Oliveira – 585327
// Matheus Ferreira de Favari – 579718

//  ----> Matriz correta
var matriz_correta = [[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,null]]

//  ----> Matrizes para testar
var matriz_estado = [[1,2,3,4], [5,10,6,7], [9,null,11,8], [13,14,15,12]]
// var matriz_estado = [[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,null,15]]
// var matriz_estado = [[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,null]]

//  ----> Array com as posições corretas dos números
var posicoes_numeros = [[0,0], [0,1], [0,2], [0,3], [1,0], [1,1], [1,2], [1,3], [2,0], [2,1], [2,2], [2,3], [3,0], [3,1], [3,2], [3,3]]

//  ----> Estrutura da matriz
qtd_linhas = 4
qtd_colunas = 4

//  ----> Lista de prioridade
var listaPrioridade = []

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

    //  ----> Algorítmo de busca GME
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

    //  ----> Algorítmo de busca A*
    buscaEstrela(raiz){
        listaNo.push(raiz);
        while (listaNo.length > 0) { 
            let list = listaNo.filter(l => {
                return l.h === 0;
            })
            
            list.forEach(n => {
                this.h1(n);
                //this.h2(n);

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

let begin=Date.now(); //    ---->Começo da execução

//  ----> Algoritmos, só descomentar para executar

//  ----> Sem informação
//busca.buscaLargura(noPai)
//busca.buscaProfundidade(noPai)
//busca.buscaProfundidadeLimitada(noPai, 5)
//busca.buscaAprIterativo(noPai)
//busca.buscaUniforme(noPai)

//  ----> Com informação
busca.buscaGME(noPai)
//busca.buscaEstrela(noPai)


let end= Date.now(); //    ---->Fim da execução

let tempo_total = (end-begin)/1000+"seg";

console.log('\n\n Tempo de execução: ', tempo_total)

// Para executar é só abrir o terminal e digitar: node caminho_do_arquivo (tendo em vista que o nodejs está instalado no pc)