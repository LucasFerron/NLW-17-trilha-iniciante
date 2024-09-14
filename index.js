const { select, input, checkbox } = require("@inquirer/prompts")

let meta = {
    value: 'Tomar 3 Litros de água por dia',
    checked: false
}
let metas = [ meta ]

const cadastrarMeta = async () => {
    const meta = await input ({ message: "Digite a nova meta:"})

    if(meta.length == 0){
        console.log("A meta não deve ser vazia.")
        return // irá sair do cadastrarMeta() e voltar para a função comecar()
    }

    metas.push( // empurrar outra meta na array 
        { value: meta,
            checked: false
        }
    )

}
const listarMetas = async () => {
    const respostas = await checkbox ({
        message: "Use as setas para mudar de meta, o espaço parar marcar ou desmarcar e o Enter para finalizar essa etapa",
        choices: [...metas], //3 pontos significa espalhar/jogar todas as metas (informações do array)
        instructions: false,
    })

    if(respostas.length == 0){
        console.log("Nenhuma meta foi selecionada!")
        return // irá sair do listarMetas() e voltar para a função comecar()
    }

    metas.forEach((m) => {
        m.checked = false
    })

    respostas.forEach((resposta) => { //forEach -> para cada
        const meta = metas.find((m) => { //find -> procurar
            return m.value == resposta

        })  
        meta.checked = true
    })
    console.log("Metas(s) marcada(s) como concluída(s)")
}

const  comecar = async () => {

    
    while (true){

        const opc = await select({
            message: "menu >",
            choices: [
                {
                    name: "Cadastrar meta",
                    value: "cadastrar"
                },
                {
                    name: "Listar metas",
                    value: "listar"
                },
                {
                    name: "Sair",
                    value: "sair"
                }
            ]
        })


        
        switch(opc){
            case "cadastrar":
                await cadastrarMeta()
                console.log(metas)
                break
            case "listar":
                await listarMetas()
                break
            case "sair":
                console.log("Até a proxima!")
                return
                
        }
    }
}
comecar()