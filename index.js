function comecar(){
    let count = 0
    while (true){
        let opc = 'cadastrar'
        switch(opc){
            case 'cadastrar':
                console.log('Vamos cadastrar')
                break
            case 'listar':
                console.log('Vamos listar')
                break
            case 'sair':
                return
        }
    }
}
comecar()