window.addEventListener('load',() => {
	const form = document.querySelector('#task__form')
	const input = document.querySelector('#task__form--input')
	const listEl = document.querySelector('.task__list--container')

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const task = input.value

		if(!task){
			alert('Please fill out the task')
			return
		}

	
		const taskEl = document.createElement('div')
		taskEl.classList.add('task__list--inner')

		const taskContentEl = document.createElement('div')
		taskContentEl.classList.add('task__list--content')

		taskEl.appendChild(taskContentEl)

		const taskInputEl = document.createElement('input')
		taskInputEl.classList.add('text')
		taskInputEl.type = 'text'
		taskInputEl.value = task
		taskInputEl.setAttribute('readonly','readonly')

		taskContentEl.appendChild(taskInputEl)

		const taskActionEl = document.createElement('div')
		taskActionEl.classList.add('task__list--action')

		const taskEditEl = document.createElement('button')
		taskEditEl.classList.add('edit')
		taskEditEl.innerText = 'edit'

		const taskDeleteEL = document.createElement('button')
		taskDeleteEL.classList.add('del')
		taskDeleteEL.innerText = 'delete'

		taskActionEl.appendChild(taskEditEl)
		taskActionEl.appendChild(taskDeleteEL)

        
		taskEl.appendChild(taskActionEl)
		listEl.appendChild(taskEl)
    
		input.value = ''

    taskEditEl.addEventListener('click',() => {
	   if (taskEditEl.innerText.toLowerCase() == 'edit'){
			taskInputEl.removeAttribute('readonly')
			taskInputEl.focus()
			taskEditEl.innerText = 'save'
		 }else {
			taskInputEl.setAttribute('readonly','readonly')
			taskEditEl.innerText = 'edit'
		 }
		})

		taskDeleteEL.addEventListener('click',() =>{
			listEl.removeChild(taskEl)
		})
	})

})