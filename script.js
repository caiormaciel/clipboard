// write your JavaScript here

let text = document.getElementById("link").innerHTML;
const copyContent = async () => {
    try {
        await navigator.clipboard.writeText(text);
        alert("Copiado para área de Transferência");
    } catch (err) {
        alert("Erro ao copiar", err);
    }
}