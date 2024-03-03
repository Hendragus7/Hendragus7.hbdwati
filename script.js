AOS.init();

var musik = "";

var audio = document.querySelector(".audio");
if (musik) {
  audio.src = musik;
}

function mulai() {
  audio.play()
  window.scrollTo(0, 0)
  document.querySelector(".open").style = "opacity: 0;";
  document.querySelector(".body").style = "overflow-y: scroll";
  setTimeout(function() {
    document.querySelector(".open").style.display = "none";
  }, 1200);
}

function wa(isi) {
  window.open("https://wa.me/628980754196?text=Makasih%20ya%20udah%20inget%20ulang%20tahun%20aku,%20di%20hari%20spesial%20ini%20aku%20ingin " + isi);
}

async function tanya() {
  var {
    value: kado
  } = await swal.fire({
    imageUrl: 'assets/watii.png',
    title: 'Di hari spesial ini, kamu ingin apa?',
    input: 'text',
    showCancelButton: false
  })

  if (kado) {
    await swal.fire({
      imageUrl: 'assets/wa.png',
      title: 'kirim jawabannya ke WA aku yaa'
    })
    wa(kado);
  } else {
    await swal.fire({
      icon: 'error',
      title: 'Jangan dikosongin dong'
    });
    tanya();
  }
}