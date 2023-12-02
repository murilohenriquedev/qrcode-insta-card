const URL_INSTAGRAM = "https://instagram.com/murilo_hmb?igshid=NzZlODBkYWE4Ng%3D%3D&utm_source=qr"

let compartilharButton = document.getElementById("compartilhar-perfil-button")

compartilharButton.addEventListener('click',compartilharPerfilFn)

async function compartilharPerfilFn(){
    let shareData ={
        title: "Instagram jornada de programador",
        text: "Conheça a jornada de programador",
        url: URL_INSTAGRAM
    }
    try{
       await navigator.share(shareData)
    }catch(err){
        console.log(err)
        if(err instanceof DOMException && err.name === "AbortError"){
        window.open(URL_INSTAGRAM)
        }
    
    }
}
function copiarLink(){
    // Mudar o texto para link copiado e em negrito!
    navigator.clipboard.writeText(URL_INSTAGRAM)
    let copiarLinkText= document.getElementById("copiar-link-text")
    copiarLinkText.innerHTML="<strong>Link copiado!</strong>"
    //Adicionar animação no botão (feedback)
    let copiarLinkButton = document.getElementById("copiar-link-btn")
    copiarLinkButton.classList.add('animate__animated', 'animate__pulse')
    //copiarLinkButton.addEventListener('animationend',() =>{

    //})

}
