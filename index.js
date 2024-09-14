const { select, input } = require("@inquirer/prompts")

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
                console.log("Vamos listar")
                break
            case "sair":
                console.log("Até a proxima!")
                return
                
        }
    }
}
comecar()