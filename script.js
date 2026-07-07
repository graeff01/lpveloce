// ============================================================
//  CONFIGURAÇÃO — altere aqui
// ============================================================
const WHATSAPP = {
  // Número com DDI + DDD, só dígitos. Ex Brasil: 55 + DDD + número
  numero: "5551991597229",          // (51) 99159-7229
  mensagem: "Olá! Vim pelo site da Veloce e quero saber mais.",
};
// ============================================================

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
