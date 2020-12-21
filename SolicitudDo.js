function contrata(){
   document.getElementById('ausente').style.display="none";
}

function reemplazo(){
    document.getElementById('ausente').style.display="block";
 }


async function rellenarDatos(){
   let rut = document.getElementById("rut").value
   let nombre = document.getElementById("nombre")
   let apellidop = document.getElementById("apellidop")
   let apellidom = document.getElementById("apellidom")
   let fechanac = document.getElementById("fechanac")
   let ciudad = document.getElementById("ciudad")
   let direccion = document.getElementById("direccion")
   let telefono = document.getElementById("telefono")
   let afp = document.getElementById("afp")
   let salud = document.getElementById("salud")

   let profe = await buscarProfesPorRut(rut)

   nombre.value = profe.nombre
   apellidop.value = profe.paterno
   apellidom.value = profe.materno
   fechanac.value = profe.fecha_nacim
   ciudad.value = profe.ciudad
   direccion.value = profe.direccion
   telefono.value = profe.telefono
   afp.value = profe.afp
   salud.value = profe.isapre
}

// fetch es una funcion asincrona, para usarla tiene que estar en otra funcion async al igual que .json()
async function buscarProfesPorRut( rut ){
   let response = await fetch("http://64.225.53.176:8000/api/v0/profes/")
   let resToJSON = await response.json()
   let next = resToJSON.next
   let results = resToJSON.results

   for (let profe of results) {
      if (profe.rut == rut) {
         return profe
      }
   }
}