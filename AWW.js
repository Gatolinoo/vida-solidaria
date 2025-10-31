// Máscara para CPF
const cpfInput = document.getElementById('cpf');
cpfInput.addEventListener('input', () => {
  let value = cpfInput.value.replace(/\D/g, '');
  if (value.length > 3 && value.length <= 6)
    value = value.replace(/(\d{3})(\d+)/, '$1.$2');
  else if (value.length > 6 && value.length <= 9)
    value = value.replace(/(\d{3})(\d{3})(\d+)/, '$1.$2.$3');
  else if (value.length > 9)
    value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
  cpfInput.value = value;
});

// Máscara para Telefone
const telefoneInput = document.getElementById('telefone');
telefoneInput.addEventListener('input', () => {
  let value = telefoneInput.value.replace(/\D/g, '');
  if (value.length > 10)
    value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  else if (value.length > 5)
    value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
  telefoneInput.value = value;
});

// Máscara para CEP
const cepInput = document.getElementById('cep');
cepInput.addEventListener('input', () => {
  let value = cepInput.value.replace(/\D/g, '');
  if (value.length > 5)
    value = value.replace(/(\d{5})(\d{0,3})/, '$1-$2');
  cepInput.value = value;
});

