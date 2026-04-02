/* 
<<<<<<< HEAD
===============================================
1 PARTE - CAPTURAR OS DADOS DO FORM NO HTML
===============================================
*/
// 1. Pega o formulário pelo ID que colocamos no HTML
const form = document.getElementById("formContato");

// 2. Chama função para ficar "ouvindo" o momento que o 
//usuário clicar no botão Enviar
form.addEventListener("submit", async function(event){
    // 3. Impedir que a página recarregue
        //(comportamento padrão da tag form)
    event.preventDefault(); 

    // 4. Lê e salva o que o usuário digitou em cada campo
=======
=============================================
1 Parte - Capturar os Dados do Form no HTML
=============================================
*/
// 1. Pega o formulário pelo ID que colocamos no HTML 
const form = document.getElementById("formContato");

// 2. Chama função para ficar ouvindo o momento o momento  
// em que o usuário clicar no botão enviar
form.addEventListener("submit", async function(event){
    // 3. Impedir que a página recarregue
      // (comportamento padrão da tag form)
    event.preventDefault();

    // 4. Lê o que o usuário digitou em cada campo
>>>>>>> 413a275 (Atualizando projeto TechEduca completo)
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

<<<<<<< HEAD
    // 5. Agrupa os dados em um "objeto js"(como uma caixa organizadora)
    const novaMensagem = {nome, email, mensagem};

    /* 
    ===============================================
    2 PARTE - TRATAR E ENVIAR OS DADOS PARA O SERVIDOR
    ===============================================
    */
    try{
        // 6. Envia os dados para o servidor usando fetch()
        const resposta = await fetch("http://localhost:3000/mensagem",{
            method:"POST", // POST = estamos enviando dados
            headers: {
                "Content-Type":"application/json" // avisa que formato é JSON
            },
            body: JSON.stringify(novaMensagem) 
                // Converte o objeto para texto JSON
=======
    // 5. Agrupa os dados em um "objeto js"
    // (como uma caixa organizadora)
    const novaMensagem = {nome, email, mensagem};

/*  
==================================================
2 Parte - Tratar e Enviar os Dados para o Servidor
==================================================
*/
    try{
        // 6. Envia os dados para o servidor usando fetch()
        const resposta = await fetch("http://localhost:3000/mensagem",{
            method:"POST", //POST = estamos enviando dados
            headers: {
                "Content-Type":"application/json" // avisa que o formato é JSON
            },
            body: JSON.stringify(novaMensagem) //Converte o objeton para JSON
>>>>>>> 413a275 (Atualizando projeto TechEduca completo)
        });
        
        // 7. Lê a resposta que o servidor enviou de volta
        const dados = await resposta.text();
        
        // 8. Mostra a resposta para o usuário
        alert(dados);
        
<<<<<<< HEAD
        // 9.  Limpa os campos do formulário após o envio
        form.reset();
        
        
=======
        // 9. Limpa os campos do formulário após o envio 
        form.reset();
        
>>>>>>> 413a275 (Atualizando projeto TechEduca completo)
        }catch(erro){
            // 10. Se algo der errado, avisa o usuário
            alert(`Erro: ${erro}`);
        };
<<<<<<< HEAD
        
});



=======
});
>>>>>>> 413a275 (Atualizando projeto TechEduca completo)
