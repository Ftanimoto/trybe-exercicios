// para o objeto a seguir, use o for/in e imprima no console a mensagem 'Olá, xxxxx' para cada nome,
// substituindo o xxxx pelo nome em questão.

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  }; 


  function mostraNomes(nomes) {
        for (let nome in nomes) {
            console.log('Olá, ' + nome);
        }

        for (let nome in nomes) {
            console.log(nome, nomes[nome]);
        }

        for (let nome in nomes) {
            console.log(nome, nomes.nome);
        }
        // Esse n funciona pq ele itera os valores de um array unidimensional e objetos são arrays bidimensionais
       /* for (let nome of nomes) {
            console.log(value);
        } */  
                    
  }


  // Por algum motivo a nomenclatura objeto.propriedade = valor não funciona. 
  // Problema: só acrescenta uma única propriedade ao objeto e depois vai substituindo a mesma nas prórximas chamadas
  function criaChaveValorTemporárioNoObjeto(objeto, newKey, newValue) {
    let propriedade = newKey;
    let valor = newValue;


    objeto[propriedade] = valor;
    return objeto;

  }

  console.log('Teste chamada da função:' + mostraNomes(names));
 

  function addProperty(object, key, value) {
    object[key] = value;
    return object;
  };
  
  console.log(addProperty(names, 'person6', 'Yaico'));
  console.log(addProperty(names, 'person7', 'Daniel'));
  console.log(criaChaveValorTemporárioNoObjeto(names, 'person8', 'Carol'));
  console.log(criaChaveValorTemporárioNoObjeto(names, 'person9', 'Felipe'));
  console.log(criaChaveValorTemporárioNoObjeto(names, 'person10', 'Felipe'));
  console.log(criaChaveValorTemporárioNoObjeto(names, 'person9', 'Carol de novo'));


