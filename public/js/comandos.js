const apiUrl = 'http://localhost:3000/api/pacientes'; // URL da API REST

// Função para validar CPF (simplificado)
function validarCPF (cpf) {
  const regex = /^[0-9]{11}$/;
  return regex.test(cpf);
}

// Função para validar telefone
function validarTelefone (telefone) {
  const regex = /^\(\d{2}\) \d{5}-\d{4}$/;
  return regex.test(telefone);
}

// Função para atualizar a lista de pacientes
async function listarPacientes () {
  try {
    const response = await fetch(apiUrl);
    const pacientes = await response.json();
    const pacientesList = document.getElementById('pacientesList');
    pacientesList.innerHTML = ''; // Limpar a lista antes de atualizar

    pacientes.forEach(paciente => {
      const li = document.createElement('li');
      li.className = 'paciente-item';
      li.innerHTML = `
            <span>${paciente.nome}</span>
            <span>(${paciente.cpf})</span>
            <button onclick="removerPaciente('${paciente._id}')">Excluir</button>
        `;
      pacientesList.appendChild(li);
    });
  } catch (error) {
    console.error('Erro ao listar pacientes:', error);
  }
}

// Função para cadastrar um novo paciente
async function cadastrarPaciente (event) {
  event.preventDefault(); // Impede o envio do formulário

  const nome = document.getElementById('nome').value;
  const cpf = document.getElementById('cpf').value;
  const telefone = document.getElementById('telefone').value;
  const data_nascimento = document.getElementById('data_nascimento').value;

  // Validações
  if (!validarCPF(cpf)) {
    alert('CPF inválido');
    return;
  }

  if (!validarTelefone(telefone)) {
    alert('Telefone inválido');
    return;
  }

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nome,
        cpf,
        telefone,
        data_nascimento,
      }),
    });

    if (response.ok) {
      alert('Paciente cadastrado com sucesso!');
      listarPacientes(); // Atualiza a lista de pacientes
      document.getElementById('cadastroPacienteForm').reset(); // Limpa o formulário
    } else {
      alert('Erro ao cadastrar paciente');
    }
  } catch (error) {
    console.error('Erro ao cadastrar paciente:', error);
  }
}

// Evento de submissão do formulário
document.getElementById('cadastroPacienteForm').addEventListener('submit', cadastrarPaciente);

// Função para limpar o formulário
document.querySelector('.cancel').addEventListener('click', () => {
  document.getElementById('cadastroPacienteForm').reset();
});

// Carregar a lista de pacientes ao carregar a página
window.onload = listarPacientes;
