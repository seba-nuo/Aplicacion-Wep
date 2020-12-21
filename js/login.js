
async function redirigirUsuario(){
    let nombreUsuario = document.getElementById("usuario").value
    let contraseñaUsuario = document.getElementById("contraseña").value

    let res = await fetch("http://64.225.53.176:8000/api/v0/perfil/")
    let perfiles = await res.json()

    let usuario = await validarUsuario(perfiles.results, nombreUsuario, contraseñaUsuario)

    if(usuario){

        switch (usuario.establecimiento) {
            case "colegio":
                location.href = "/solicitudDocente.html"
                break;
    
            case "administrativo":
                location.href = "/Correspondencia.html"
                break;
                
            default:
                break;
        }
    } else {
        alert("Usuario o Contraseña incorrectos")
    }

}
async function validarUsuario(perfiles, nombreUsuario, contraseñaUsuario){
    let encontrado = false
    for (let usuario of perfiles) {
        if (usuario.nombre == nombreUsuario && usuario.contrasena == contraseñaUsuario) {
            encontrado = true
            return usuario              
        }
    }
    if (encontrado == false){
        return null
    }
}

