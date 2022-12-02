document.getElementById("btn").addEventListener("click", function () {
  let txt = document.getElementById("verificador-palindromo").value;
  verificarPalindromo(txt)
});


function verificarPalindromo(txt){
    let txtNovo = txt.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    txtNovo = txt.replace(/[*]/g, "*")
    txtNovo = txt.replace(/[!]/g, "!")
    txtNovo = txt.replace(/[@]/g, "@")
    txtNovo = txt.replace(/[$]/g, "$")
    txtNovo = txt.replace(/[%]/g, "%")
    txtNovo = txt.replace(/[&]/g, "&")
    let tam = txtNovo.length;
    let metadeTam = Math.floor( tam/2 );
    let resultado = document.getElementById("resultado");  
    let i;
    
    for(i=0; i < metadeTam; i++){
        if(txtNovo[i] !== txtNovo[tam-1-i]){
            resultado.textContent = "Não é um palíndromo";
            return;
        }
        resultado.textContent = "Sim! É um palíndromo";
    }
}