let Cargo = 'Gerente'

switch (Cargo) {
    case 'Estagiario' :
        console.log ("R$1500");
        break;

    case 'Analista' :
        console.log ("R$4000");
        break;

    case 'Gerente' :
        console.log ("R$8000");
        break;

    case 'Diretor' :
        console.log ("R$15000");
        break;


        default:
            console.log ("Cargo não encontrado")
}