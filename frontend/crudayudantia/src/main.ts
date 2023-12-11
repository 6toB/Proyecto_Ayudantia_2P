import './style.css'


(async ()=>{

  const response = await fetch('http://localhost:8080/api/v1/micro5')
  const data = await response.json()
  
  let divTable= `<table>`
  divTable += `<tr><th>ID</th><th>Id</th><th>Numero Sesiones</th><th>Fecha Creacion</th><th>fecha Programada</th><th>Estudiante Id</th><th>Tutor Id</th></th><th>Tutorado Id</th></th><th>Motivo AyudantiaId</th></tr>`
  data.forEach((ayudantia: IAyudantia) => {
    divTable += `<tr><td>${ayudantia.id}</td><td>${ayudantia.numeroSesiones}</td><td>${ayudantia.fechaCreacion}</td><td>${ayudantia.fechaProgramada}</td><td>${ayudantia.estudianteId}</td><td>${ayudantia.tutorId}</td><td>${ayudantia.tutoradoId}</td><td>${ayudantia.motivoAyudantiaId}</td><td><button class="btn btn-delete">Eliminar</button></td><td><button class="btn btn-update">Actualizar</button> </td> </tr>`
  })
  divTable += `</table>`

  document.querySelector<HTMLDivElement>('#app')!.innerHTML = divTable


  const divButton = `<button class="btn btn-primary">Agregar</button>`
  document.querySelector<HTMLDivElement>('#app')!.innerHTML += divButton

  const btnAgregar = document.querySelector<HTMLButtonElement>('.btn-primary')
  btnAgregar?.addEventListener('click', ()=>{
    const divForm = `<form>
    <div class="mb-3">
      <label for="numeroSesiones" class="form-label">No Sesiones</label>
      <input type="text" class="form-control" id="numeroSesiones" aria-describedby="numeroSesiones">
    </div>
    <div class="mb-3">
      <label for="fechaProgramada" class="form-label">fecha Programada</label>
      <input type="text" class="form-control" id="fechaProgramada" aria-describedby="fechaProgramada">
    </div>
    <button type='submit'  class="btn btn-save">Save</button>
    <button type='submit'  class="btn btn-cancel">Cancel</button>
    </form>`
    document.querySelector<HTMLDivElement>('#app')!.innerHTML = divForm
    const btnSave = document.querySelector<HTMLButtonElement>('.btn-save')
    btnSave?.addEventListener('click', async (e)=>{
      e.preventDefault()
      const numeroSesiones = document.querySelector<HTMLInputElement>('#numeroSesiones')!.value
      const fechaProgramada = document.querySelector<HTMLInputElement>('#fechaProgramada')!.value
      //const estudianteId = document.querySelector<HTMLInputElement>('#estudianteId')!.value
      const response = await fetch('http://localhost:8080/api/v1/micro5', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({numeroSesiones, fechaProgramada, estudianteId:1,tutorId:1, tutoradoId:1, motivoAyudantiaId:1})
        //estudianteId:1,tutorId:1, tutoradoId:1, motivoAyudantiaId:1
      })
      const data = await response.json()
      console.log(data)
      // reload page
      location.reload()
    })
  })
  document.querySelectorAll<HTMLButtonElement>('.btn-delete').forEach(btn=>{
    btn.addEventListener('click', async ()=>{ 
      const id = btn.parentElement?.parentElement?.firstElementChild?.textContent
      console.log(id)
      await fetch(`http://localhost:8080/api/v1/micro5/${id}`, {
        method: 'DELETE'
      })
      location.reload()

     })
  })
  document.querySelectorAll<HTMLButtonElement>('.btn-update').forEach(btn=>{
    btn.addEventListener('click', async ()=>{ 
      const id = btn.parentElement?.parentElement?.firstElementChild?.textContent
      const response = await fetch(`http://localhost:8080/api/v1/micro5/${id}`)
      const data = await response.json()
      //add button for cancel
      const btnCancel = `<button class="btn btn-cancel">Cancel</button>`
      const divForm = `<form>
      <div class="mb-3">
        <label for="numeroSesiones" class="form-label">numero Sesiones</label>
        <input type="text" class="form-control" id="numeroSesiones" aria-describedby="numeroSesiones" value="${data.numeroSesiones}">
      </div>
      <div class="mb-3">
        <label for="fechaCreacion" class="form-label">fecha Creacion</label>
        <input type="text" class="form-control" id="fechaCreacion" aria-describedby="fechaCreacion" value="${data.fechaCreacion}">
      </div>
      <div class="mb-3">
        <label for="fechaProgramada" class="form-label">fecha Programada</label>
        <input type="text" class="form-control" id="fechaProgramada" aria-describedby="fechaProgramada" value="${data.fechaProgramada}">
      </div>
      <div class="mb-3">
        <label for="estudianteId" class="form-label">ID Estudiante</label>
        <input type="text" class="form-control" id="estudianteId" aria-describedby="estudianteId" value="${data.estudianteId}">
      </div>
      <div class="mb-3">
        <label for="tutorId" class="form-label">ID Tutor</label>
        <input type="text" class="form-control" id="tutorId" aria-describedby="tutorId" value="${data.tutorId}">
      </div>
      <div class="mb-3">
        <label for="tutoradoId" class="form-label">ID Tutorado</label>
        <input type="text" class="form-control" id="tutoradoId" aria-describedby="tutoradoId" value="${data.tutoradoId}">
      </div>
      <div class="mb-3">
        <label for="motivoAyudantiaId" class="form-label">ID Motivo</label>
        <input type="text" class="form-control" id="motivoAyudantiaId" aria-describedby="motivoAyudantiaId" value="${data.motivoAyudantiaId}">
      </div>
      <button type='submit'  class="btn btn-save">Save</button>
      ${btnCancel}
      </form>`
      document.querySelector<HTMLDivElement>('#app')!.innerHTML = divForm
      const btnSave = document.querySelector<HTMLButtonElement>('.btn-save')
      btnSave?.addEventListener('click', async (e)=>{
        e.preventDefault()
        const numeroSesiones = document.querySelector<HTMLInputElement>('#numeroSesiones')!.value
        const fechaProgramada = document.querySelector<HTMLInputElement>('#fechaProgramada')!.value
        //const estudianteId = document.querySelector<HTMLInputElement>('#estudianteId')!.value
        const response = await fetch(`http://localhost:8080/api/v1/micro5/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({numeroSesiones, fechaProgramada, estudianteId:1,tutorId:1, tutoradoId:1, motivoAyudantiaId:1})
          //, estudianteId:1,tutorId:1, tutoradoId:1, motivoAyudantiaId:1
        })
        const data = await response.json()
        console.log(data)
        // reload page
        location.reload()
      })
     })
  })

  
  


})()