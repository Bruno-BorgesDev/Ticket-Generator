const dropArea = document.getElementById('drop-area');
const fileInput = document.getElementById('file');
const preview = document.getElementById('preview');

const uploadLabel = document.getElementById('upload-label');
const uploadIcon = document.getElementById('upload-icon');


// Impedir o comportamento padrão dos eventos de drag and drop
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false);
});

// Adicionar classe hover ao arrastar sobre a área
['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, () => dropArea.classList.add('hover'), false);
});

// Remover classe hover ao sair da área ou soltar o arquivo
['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, () => dropArea.classList.remove('hover'), false);
});

// Lidar com o evento de soltar o arquivo
dropArea.addEventListener('drop', handleDrop, false);

// Lidar com a seleção de arquivo via input
fileInput.addEventListener('change', handleFileSelect, false);

// Função para prevenir comportamentos padrão
function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

// Função para lidar com o arquivo solto
function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;

    if (files.length > 0) {
        handleFile(files[0]);
    }
}

// Função para lidar com a seleção de arquivo
function handleFileSelect(e) {
    const files = e.target.files;

    if (files.length > 0) {
        handleFile(files[0]);
    }
}

// Função para processar o arquivo e exibir o preview
function handleFile(file) {
    // Verificar se o arquivo é uma imagem
    if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result; // Define o src da imagem
            preview.style.display = 'block'; // Exibe a imagem

            // Oculta o texto e o ícone de upload
            uploadLabel.style.display = 'none';
            uploadIcon.style.display = 'none';
        };
        reader.readAsDataURL(file); // Lê o arquivo como URL
    }
}