// Mostrar/ocultar formulario
document.getElementById('editar-perfil').addEventListener('click', () => {
    const form = document.getElementById('form-editar');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
    
    // Rellenar formulario con datos actuales
    document.getElementById('input-nombre').value = 
        document.getElementById('nombre-usuario').textContent;
    document.getElementById('input-carrera').value = 
        document.getElementById('carrera-usuario').textContent;
    document.getElementById('input-descripcion').value = 
        document.getElementById('texto-descripcion').textContent;
});

// Cancelar edición
document.getElementById('cancelar-editar').addEventListener('click', () => {
    document.getElementById('form-editar').style.display = 'none';
});

// Guardar cambios
document.getElementById('form-perfil').addEventListener('submit', (e) => {
    e.preventDefault();
    
    document.getElementById('nombre-usuario').textContent = 
        document.getElementById('input-nombre').value;
    document.getElementById('carrera-usuario').textContent = 
        document.getElementById('input-carrera').value;
    document.getElementById('texto-descripcion').textContent = 
        document.getElementById('input-descripcion').value;
    
    document.getElementById('form-editar').style.display = 'none';
});