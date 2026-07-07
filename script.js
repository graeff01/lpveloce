// ============================================================
//  CONFIGURAÇÃO — WhatsApp
// ============================================================
const WHATSAPP = {
  numero: "5551991597229",          // (51) 99159-7229
  mensagem: "Olá! Vim pelo site da Veloce e quero saber mais.",
};

const link =
  "https://wa.me/" +
  WHATSAPP.numero.replace(/\D/g, "") +
  "?text=" +
  encodeURIComponent(WHATSAPP.mensagem);

document.querySelectorAll("[data-whatsapp]").forEach((el) => {
  el.setAttribute("href", link);
  el.setAttribute("target", "_blank");
  el.setAttribute("rel", "noopener");
});

// ============================================================
//  SCALER — cada .stage é desenhado em 1920x1080 e escalado
//  proporcionalmente à largura do slide (pixel-perfect).
// ============================================================
const DESIGN_W = 1920;
const DESIGN_H = 1080;

function scaleStages() {
  document.querySelectorAll(".slide").forEach((slide) => {
    const stage = slide.querySelector(".stage");
    if (!stage) return;
    const scale = slide.clientWidth / DESIGN_W;
    stage.style.transform = `scale(${scale})`;
    slide.style.height = DESIGN_H * scale + "px";
  });
}

scaleStages();
window.addEventListener("resize", scaleStages);
window.addEventListener("load", scaleStages); // recalibra após carregar fontes/imagens
if (document.fonts && document.fonts.ready) document.fonts.ready.then(scaleStages);
