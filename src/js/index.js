let btnMenuMobile = document.getElementById('btnMenuMobile')
let menuMobile = document.getElementById('menuMobile')
let overlayMobile = document.getElementById('overlayMenuMobile')

btnMenuMobile.addEventListener('click', ()=>{
    menuMobile.classList.add('openMenu')
})

menuMobile.addEventListener('click', ()=>{
    menuMobile.classList.remove('openMenu')
})

overlayMobile.addEventListener('click', ()=>{
    menuMobile.classList.remove('openMenu')
})


// popup das imagens

function abrirPopup(ambiente) {
    var imagemSrc = './src/img/' + ambiente + '.JPEG'; // Constrói o caminho da imagem
    document.getElementById('imagemGrande').src = imagemSrc; // Define o 'src' para a imagem do popup
    document.getElementById('popupImagem').style.display = 'flex'; // Mostra o popup
  }

  // Quando o botão de fechar é clicado
  document.getElementById('fecharPopup').onclick = function() {
    document.getElementById('popupImagem').style.display = 'none'; // Oculta o popup
  };