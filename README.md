# Veloce — Landing Page

Landing page de rolagem única (mobile-first) construída a partir da apresentação comercial do Figma.
Site estático (HTML/CSS/JS puro) — sem etapa de build.

## Estrutura
```
index.html          # marcação da página
styles.css          # estilos
script.js           # monta o link do WhatsApp (editar número aqui)
assets/
  mobile/mobile.jpg   # apresentação vertical (celular)
  desktop/            # apresentação horizontal (desktop) — a adicionar
netlify.toml        # config de deploy
```

## Configurar o WhatsApp
Edite `script.js` → objeto `WHATSAPP`:
- `numero`: DDI + DDD + número, só dígitos (ex.: `5547999999999`)
- `mensagem`: texto que já abre preenchido na conversa

## Rodar localmente
Abra o `index.html` no navegador (ou use um servidor estático).

## Deploy (Netlify)
- Arraste a pasta em app.netlify.com/drop, **ou**
- Conecte este repositório no Netlify (publish directory = raiz).
