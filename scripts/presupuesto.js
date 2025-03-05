document.addEventListener("DOMContentLoaded", () => {
    const tarjetas = document.querySelectorAll(".tarjeta");
    const hoja = document.getElementById("contenido-hoja");
    const precioTotal = document.getElementById("precio-total");
    let total = 0;
    let seleccionadas = new Set(); // Para evitar duplicados

    // Diccionario de imágenes para cada sección
    const imagenes = {
        "Galería": "./blog.jpg",
        "Contacto": "./cards.jpg",
        "Tienda": "./tienda.jpg",
        "Header":"../imagenes/presupuesto/Header_page-0001.jpg",
        "form":"./forms.jpg",
        "footer":"./footer.jpg"
    };

    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener("click", () => {
            const nombre = tarjeta.dataset.nombre;
            const precio = parseInt(tarjeta.dataset.precio);

            // Verificar si ya está seleccionada
            if (seleccionadas.has(nombre)) {
                alert("Esta sección ya está agregada.");
                return;
            }

            // Agregar imagen a la hoja
            const nuevaImagen = document.createElement("img");
            nuevaImagen.src = imagenes[nombre];
            nuevaImagen.alt = nombre;
            nuevaImagen.classList.add("img-seccion");

            hoja.appendChild(nuevaImagen);

            // Agregar al conjunto de seleccionadas
            seleccionadas.add(nombre);

            // Actualizar precio total
            total += precio;
            precioTotal.textContent = total;
        });
    });
});



document.querySelectorAll(".like-btn").forEach(button => {
    const projectId = button.getAttribute("data-id");
    const likeCount = button.querySelector(".like-count");

    const projectRef = doc(db, "projects", projectId);

    // Obtener el número de likes actual
    getDoc(projectRef).then(docSnap => {
        if (docSnap.exists()) {
            likeCount.textContent = docSnap.data().likes;
        } else {
            setDoc(projectRef, { likes: 0 });
        }
    });

    button.addEventListener("click", async () => {
        await updateDoc(projectRef, { likes: increment(1) });
        const updatedDoc = await getDoc(projectRef);
        likeCount.textContent = updatedDoc.data().likes;
    });
});