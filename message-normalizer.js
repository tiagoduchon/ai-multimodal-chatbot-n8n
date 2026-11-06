let mensaje = '';

if ($json.text) {
  mensaje = $json.text;
}

if ($json.transcript) {
  mensaje = $json.transcript;
}

if ($json.content) {
  mensaje = `El usuario envió una imagen. ${$json.content}`;
}

return [{
  json: {
    text: mensaje
  }
}];
