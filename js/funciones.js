// sj/funciones.js

function verificarContraseña() {
    const rut = document.getElementById("txt_rut").value;
    const contraseña = document.getElementById("txt_contraseña").value;

    if (rut === "" || contraseña === "") {
        alert("Por favor, complete todos los campos.");
        return;
    }

    if (contraseña.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        return;
    }

    // Si todo está bien
    alert("Datos verificados. RUT: " + rut);
}

