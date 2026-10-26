import { CONFIG } from '../config/portfolioData';

export function safeURL(value) {
  try {
    const url = new URL(value);
    return ['https:', 'http:'].includes(url.protocol) ? url.href : '';
  } catch {
    return '';
  }
}

export function whatsappURL(message = CONFIG.mensagens.geral) {
  return `https://wa.me/${String(CONFIG.whatsapp).replace(/\D/g, '')}?text=${encodeURIComponent(
    message
  )}`;
}

export function publicPortfolioURL() {
  const configured = safeURL(CONFIG.siteUrl);
  if (configured) return configured;
  if (typeof window !== 'undefined' && ['https:', 'http:'].includes(window.location.protocol)) {
    return window.location.href.split('#')[0];
  }
  return '';
}

function vcardEscape(value) {
  return String(value ?? '')
    .replace(/\\/g, '\\\\')
    .replace(/\r?\n/g, '\\n')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,');
}

function foldVCardLine(line) {
  const encoder = new TextEncoder();
  const chunks = [];
  let current = '';
  let length = 0;

  for (const character of line) {
    const size = encoder.encode(character).length;
    if (length + size > 75) {
      chunks.push(current);
      current = ' ';
      length = 1;
    }
    current += character;
    length += size;
  }
  chunks.push(current);
  return chunks.join('\r\n');
}

export function buildVCard() {
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${vcardEscape(CONFIG.nomeContato.sobrenome)};${vcardEscape(CONFIG.nomeContato.nome)};;;`,
    `FN:${vcardEscape(CONFIG.nome)}`,
    `ORG:${vcardEscape(CONFIG.empresa)}`,
    `TITLE:${vcardEscape(CONFIG.titulo)}`,
    `TEL;TYPE=CELL:+${String(CONFIG.whatsapp).replace(/\D/g, '')}`,
    `URL:${publicPortfolioURL() || safeURL(CONFIG.redes.github)}`,
    `NOTE:${vcardEscape(
      `WhatsApp: ${whatsappURL()}\nInstagram: ${CONFIG.redes.instagram}\nLinkedIn: ${CONFIG.redes.linkedin}\n${CONFIG.localizacao} — Todo o Brasil`
    )}`,
    'END:VCARD',
  ];
  return lines.map(foldVCardLine).join('\r\n') + '\r\n';
}

export function downloadVCardFile() {
  const blob = new Blob([buildVCard()], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${CONFIG.nome
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')}.vcf`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 60000);
}

export function manualCopyText(text) {
  const input = document.createElement('textarea');
  input.value = text;
  input.setAttribute('readonly', '');
  input.style.cssText = 'position:fixed;top:0;left:-9999px;opacity:0';
  document.body.appendChild(input);
  input.select();
  input.setSelectionRange(0, text.length);
  let copied = false;
  try {
    copied = document.execCommand('copy');
  } catch {
    copied = false;
  }
  input.remove();
  return copied;
}
