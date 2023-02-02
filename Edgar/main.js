const form = document.querySelector('.task__form')
const input = document.querySelector('.task__input')
const taskList = document.querySelector('.tasks')

form.addEventListener('submit', (e) => {
	e.preventDefault()

	const task = input.value
	if(!task) {
		alert('Enter the task')
	}

	const taskItem = document.createElement('div')
	taskItem.classList.add('tasks__inner')

	taskList.appendChild(taskItem)

	const taskContent = document.createElement('div')
	taskContent.classList.add('tasks__content')

	const text = document.createElement('input')
	text.classList.add('text')
	text.value = task
	text.type = 'text'
	text.setAttribute('readonly','readonly')

	taskContent.appendChild(text)

	const taskActions = document.createElement('div')
	taskActions.classList.add('task__actions')


	const taskEdit = document.createElement('button')
	taskEdit.classList.add('task__edit')
	taskEdit.classList.add('button')
	taskEdit.innerText = 'Edit'

	const taskDelete = document.createElement('button')
	taskDelete.classList.add('task__del')
	taskDelete.classList.add('button')
	taskDelete.innerText = 'Delete'

	taskActions.appendChild(taskEdit)
	taskActions.appendChild(taskDelete)

	taskItem.appendChild(taskContent)
	taskItem.appendChild(taskActions)

	taskEdit.addEventListener('click',() => {
		if(taskEdit.innerText.toLowerCase() === 'edit'){
			text.removeAttribute('readonly')
			text.focus()
			taskEdit.innerText = 'Save'
		}else {
			taskEdit.innerText = 'Edit'
			text.setAttribute('readonly','readonly')
		}
	})


	taskDelete.addEventListener('click',() => {
		taskList.removeChild(taskItem)
	})


})