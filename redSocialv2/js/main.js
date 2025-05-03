// Tabs interactivas
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Remover clase active de todos
        document.querySelectorAll('.tab-btn, .tab-contenido').forEach(el => {
            el.classList.remove('active');
        });
        
        // Añadir active al botón clickeado
        btn.classList.add('active');
        
        // Mostrar contenido correspondiente
        const tabId = btn.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Sistema de Hilos
document.getElementById('btn-crear-hilo').addEventListener('click', () => {
    const texto = document.getElementById('texto-hilo').value;
    if (texto.trim() !== '') {
        const hilo = document.createElement('div');
        hilo.className = 'hilo';
        hilo.innerHTML = `
            <div class="hilo-header">
                <img src="img/avatar.jpg" class="avatar-small">
                <span>${document.getElementById('nombre-usuario').textContent}</span>
            </div>
            <p>${texto}</p>
            <div class="acciones">
                <button class="btn-comentar">💬 Comentar</button>
                <button class="btn-compartir">↗️ Compartir</button>
            </div>
        `;
        document.getElementById('lista-hilos').prepend(hilo);
        document.getElementById('texto-hilo').value = '';
    }
});

// Sistema de Publicaciones (existente)
document.getElementById('btn-publicar').addEventListener('click', () => {
    const texto = document.getElementById('texto-publicacion').value;
    if (texto.trim() !== '') {
        const publicacion = document.createElement('div');
        publicacion.className = 'publicacion';
        publicacion.innerHTML = `
            <div class="publicacion-header">
                <img src="img/avatar.jpg" class="avatar-small">
                <span>${document.getElementById('nombre-usuario').textContent}</span>
            </div>
            <p>${texto}</p>
            <div class="acciones">
                <button class="btn-like">👍 Me gusta</button>
                <button class="btn-comentar">💬 Comentar</button>
            </div>
        `;
        document.getElementById('lista-publicaciones').prepend(publicacion);
        document.getElementById('texto-publicacion').value = '';
        
        // Actualizar contador
        const contador = document.getElementById('num-publicaciones');
        contador.textContent = parseInt(contador.textContent) + 1;
    }
});

// Sistema de Marketplace
document.getElementById('btn-publicar-producto').addEventListener('click', () => {
    const titulo = document.getElementById('producto-titulo').value;
    const descripcion = document.getElementById('producto-descripcion').value;
    const precio = document.getElementById('producto-precio').value;
    
    if (titulo.trim() !== '' && descripcion.trim() !== '' && precio.trim() !== '') {
        const producto = document.createElement('div');
        producto.className = 'producto';
        producto.innerHTML = `
            <div class="producto-header">
                <img src="img/avatar.jpg" class="avatar-small">
                <span>${document.getElementById('nombre-usuario').textContent}</span>
            </div>
            <h3>${titulo}</h3>
            <p>${descripcion}</p>
            <div class="precio">$${precio}</div>
            <div class="acciones">
                <button class="btn-comprar">🛒 Comprar</button>
                <button class="btn-contactar">📞 Contactar</button>
            </div>
        `;
        document.getElementById('lista-productos').prepend(producto);
        
        // Limpiar formulario
        document.getElementById('producto-titulo').value = '';
        document.getElementById('producto-descripcion').value = '';
        document.getElementById('producto-precio').value = '';
    }
});

// Event delegation para botones de like, comentar, etc.
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-like')) {
        e.target.textContent = e.target.textContent.includes('✓') 
            ? '👍 Me gusta' 
            : '👍 Me gusta ✓';
    }
    
    if (e.target.classList.contains('btn-comprar')) {
        alert('Función de compra en desarrollo');
    }
    
    if (e.target.classList.contains('btn-contactar')) {
        alert('Función de contacto en desarrollo');
    }
});


document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remover clase active de todos
        document.querySelectorAll('.nav-link').forEach(el => {
            el.classList.remove('active');
        });
        
        // Añadir al clickeado
        this.classList.add('active');
        
        // Aquí puedes añadir lógica para cambiar contenido
        const target = this.querySelector('span').textContent;
        console.log(`Navegando a: ${target}`);
        // Ejemplo: if(target === "Perfil") { cargarPerfil(); }
    });
});
document.querySelector('.btn-agregar').addEventListener('click', function() {
    // Aquí puedes implementar:
    // 1. Mostrar una lista de usuarios sugeridos
    // 2. Abrir un modal de búsqueda
    // 3. O cualquier otra funcionalidad
    console.log("Mostrar lista de usuarios");
    
    // Ejemplo básico:
    const listaUsuarios = document.createElement('div');
    listaUsuarios.className = 'lista-usuarios';
    listaUsuarios.innerHTML = `
        <h3>Usuarios sugeridos</h3>
        <ul>
            <li>Usuario 1 <button class="btn-seguir">Seguir</button></li>
            <li>Usuario 2 <button class="btn-seguir">Seguir</button></li>
            <li>Usuario 3 <button class="btn-seguir">Seguir</button></li>
        </ul>
    `;
    document.body.appendChild(listaUsuarios);
});