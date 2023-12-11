import './style.css'


(async ()=>{

  const response = await fetch('http://localhost:8080/api/v1/micro1')
  const data = await response.json()
  
  let divTable= `<table>`
  divTable += `<tr><th>ID</th><th>Nombre</th><th>Apellido</th><th>Cedula</th><th>Nivel</th></tr>`
  data.forEach((estudiante: IEstudiante) => {
    divTable += `<tr><td>${estudiante.id}</td><td>${estudiante.nombre}</td><td>${estudiante.apellido}</td><td>${estudiante.cedula}</td><td>${estudiante.nivel}</td><td><button class="btn btn-delete">Eliminar</button></td><td><button class="btn btn-update">Actualizar</button> </td> </tr>`
  })
  divTable += `</table>`

  document.querySelector<HTMLDivElement>('#app')!.innerHTML = divTable


  const divButton = `<button class="btn btn-primary">Agregar</button>`
  document.querySelector<HTMLDivElement>('#app')!.innerHTML += divButton

  const btnAgregar = document.querySelector<HTMLButtonElement>('.btn-primary')
  btnAgregar?.addEventListener('click', ()=>{
    const divForm = `<form>
    <div class="mb-3">
      <label for="nombre" class="form-label">Nombre</label>
      <input type="text" class="form-control" id="nombre" aria-describedby="nombre">
    </div>
    <div class="mb-3">
      <label for="apellido" class="form-label">Apellido</label>
      <input type="text" class="form-control" id="apellido" aria-describedby="apellido">
    </div>
    <div class="mb-3">
      <label for="cedula" class="form-label">Cedula</label>
      <input type="text" class="form-control" id="cedula" aria-describedby="cedula">
    </div>
    <div class="mb-3">
      <label for="nivel" class="form-label">Nivel</label>
      <input type="text" class="form-control" id="nivel" aria-describedby="nivel">
    </div>
    <button type='submit'  class="btn btn-save">Save</button>
    <button type='submit'  class="btn btn-cancel">Cancel</button>
    </form>`
    document.querySelector<HTMLDivElement>('#app')!.innerHTML = divForm
    const btnSave = document.querySelector<HTMLButtonElement>('.btn-save')
    btnSave?.addEventListener('click', async (e)=>{
      e.preventDefault()
      const nombre = document.querySelector<HTMLInputElement>('#nombre')!.value
      const apellido = document.querySelector<HTMLInputElement>('#apellido')!.value
      const cedula = document.querySelector<HTMLInputElement>('#cedula')!.value
      const nivel = document.querySelector<HTMLInputElement>('#nivel')!.value
      const response = await fetch('http://localhost:8080/api/v1/micro1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({nombre, apellido,cedula, nivel})
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
      await fetch(`http://localhost:8080/api/v1/micro1/${id}`, {
        method: 'DELETE'
      })
      location.reload()

     })
  })
  document.querySelectorAll<HTMLButtonElement>('.btn-update').forEach(btn=>{
    btn.addEventListener('click', async ()=>{ 
      const id = btn.parentElement?.parentElement?.firstElementChild?.textContent
      const response = await fetch(`http://localhost:8080/api/v1/micro1/${id}`)
      const data = await response.json()
      //add button for cancel
      const btnCancel = `<button class="btn btn-cancel">Cancel</button>`
      const divForm = `<form>
      <div class="mb-3">
        <label for="nombre" class="form-label">Nombre</label>
        <input type="text" class="form-control" id="nombre" aria-describedby="nombre" value="${data.nombre}">
      </div>
      <div class="mb-3">
        <label for="apellido" class="form-label">Apellido</label>
        <input type="text" class="form-control" id="apellido" value="${data.apellido}">
      </div>
      <div class="mb-3">
        <label for="cedula" class="form-label">Cedula</label>
        <input type="text" class="form-control" id="cedula" value="${data.cedula}">
      </div>
      <div class="mb-3">
        <label for="nivel" class="form-label">Nivel</label>
        <input type="text" class="form-control" id="nivel" value="${data.nivel}">
      </div>
      <button type='submit'  class="btn btn-save">Save</button>
      ${btnCancel}
      </form>`
      document.querySelector<HTMLDivElement>('#app')!.innerHTML = divForm
      const btnSave = document.querySelector<HTMLButtonElement>('.btn-save')
      btnSave?.addEventListener('click', async (e)=>{
        e.preventDefault()
        const nombre = document.querySelector<HTMLInputElement>('#nombre')!.value
        const apellido = document.querySelector<HTMLInputElement>('#apellido')!.value
        const cedula = document.querySelector<HTMLInputElement>('#cedula')!.value
        const nivel = document.querySelector<HTMLInputElement>('#nivel')!.value
        const response = await fetch(`http://localhost:8080/api/v1/micro1/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({nombre, apellido, cedula, nivel})
        })
        const data = await response.json()
        console.log(data)
        // reload page
        location.reload()
      })
     })
  })

  
  


})()