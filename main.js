function getPilihanKomputer(){
  const comp = Math.random();

  if (comp < 0.34 ) return 'batu';

  if (comp >= 0.34 && comp > 0.67 ) return 'gunting';
    return 'kertas';
}

function getHasil(comp,player){
  if (player == comp) return 'SERI';
  if (player == 'batu') return (comp == 'gunting') ? 'MENANG' : 'KALAH';
  if (player == 'gunting') return (comp == 'batu') ? 'KALAH' : 'MENANG';
  if (player == 'kertas') return (comp == 'gunting') ? 'KALAH' : 'MENANG';
}


function putar(){
  const imgKomputer = document.querySelector('.img-komputer');
  const gambar = ['batu','gunting','kertas'];
  let i = 0
  const waktuMulai = new Date().getTime(); 
  setInterval(function(){
    if(new Date().getTime() - waktuMulai > 1000 ){
      clearInterval;
      return;
    }
    imgKomputer.setAttribute('src', 'asset/' + gambar[i++] + '.png');
    if (i == gambar.length) i = 0; 
  },100);
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil) {
  pil.addEventListener('click', function() {
    const pilihanKomputer = getPilihanKomputer();
    const pilihanPlayer = pil.className;
    // console.log(pilihanKomputer);
    // console.log(pilihanPlayer);
    const hasil = getHasil(pilihanKomputer, pilihanPlayer);
    // console.log(hasil);
    putar();

    setTimeout(function(){
      const imgKom = document.querySelector('.img-komputer');
      imgKom.setAttribute('src', 'asset/' + pilihanKomputer + '.png')
  
      const info = document.querySelector('.info');
      info.innerHTML = hasil;
    },1000);


  });
});

