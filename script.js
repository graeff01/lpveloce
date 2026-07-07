// ============================================================
//  CONFIGURAÇÃO — altere aqui
// ============================================================
const WHATSAPP = {
  // Número com DDI + DDD, só dígitos. Ex Brasil: 55 + DDD + número
  numero: "5500000000000",          // <-- TROCAR pelo número real
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
