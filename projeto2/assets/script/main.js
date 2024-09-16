let precoLiquidoHTML  = document.querySelector('.preco-original')
let descontoHTML      = document.querySelector('.desconto')
let precoFinalHTML = document.querySelector('.preco-desconto')

class Produto {
    constructor (precoLiquido, desconto = false) {
        this.precoLiquido = precoLiquido,
        this.desconto = desconto,
        this.fotos = document.querySelectorAll('.camisas'),

        this.geraPreco(),
        this.imagens()
    }

    
    geraPreco () {
        if(this.desconto) {
            precoFinalHTML.innerHTML = porcentagem() + 'R$'

            precoLiquidoHTML.innerHTML = this.precoLiquido + 'R$'

            descontoHTML.innerHTML = this.desconto + '%'
            precoFinalHTML.appendChild(descontoHTML)
        } else {
            precoFinalHTML.innerHTML = this.precoLiquido + 'R$'
        }


        function porcentagem () {
            return this.precoLiquido - ((this.precoLiquido / 100) * this.desconto)
        }
    }


    imagens () {

    }



}

const produto = new Produto(120, 10)
produto()