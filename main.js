const errorName = document.querySelector('.error-name')
const errorNumbers = document.querySelector('.error-numbers')
const errorDate = document.querySelector('.error-date')
const errorCvc = document.querySelector('.error-cvc')

const nameInput = document.querySelector('#card-name')
const cardInput = document.querySelector('#card-number')
const monthInput = document.querySelector('#card-month')
const yearInput = document.querySelector('#card-year')
const cvcInput = document.querySelector('#card-cvc')

const cardName = document.querySelector('.card__name')
const cardNumber = document.querySelector('.card__number')
const cardDate = document.querySelector('.card__date')
const cardCVC = document.querySelector('.card__cvc')

const inputs = document.querySelectorAll('input')
const button = document.querySelector('button')
const form = document.querySelector('.form-container')
const thanksPage = document.querySelector('.card__details.thank') 
const buttonReset = document.querySelector('.reset')

const cardNameHandler = () => {
	cardName.textContent = nameInput.value
	if (nameInput.value == '') {
		nameInput.nextElementSibling.style.display = 'block' 
	} else {
		nameInput.nextElementSibling.style.display = 'none' 
	}
}

const cardNumberHandler = e => {
	if (
		e.target.value.length == 4 ||
		e.target.value.length == 9 ||
		e.target.value.length == 14
	) {
		e.target.value += ' '
	}
	const regex = /[a-zA-Z]/
	
  	if(regex.test(e.target.value))
        {
			e.target.nextElementSibling.style.display = 'block' 
        }
		else
        {
			e.target.nextElementSibling.style.display = 'none' 
        }
	cardNumber.textContent = cardInput.value
}

const cardDateHandler = () => {
	cardDate.textContent = `${monthInput.value}/${yearInput.value}`
	if (monthInput.value == '' || yearInput.value == '' ) {
		yearInput.nextElementSibling.style.display = 'block' 
	} else {
		yearInput.nextElementSibling.style.display = 'none' 
	}
}

const cardCvcHandler = () => {
	cardCVC.textContent = cvcInput.value;
	if (cvcInput.value == '') {
		cvcInput.nextElementSibling.style.display = 'block' 
	} else {
		cvcInput.nextElementSibling.style.display = 'none' 
	}
}

const submitHandler = (e) => {
	e.preventDefault()
	inputs.forEach(input => {
		if(input.value == '') {
			input.nextElementSibling.style.display = 'block';
			input.classList.add('error-border')
		}
		if (input.classList.contains('error-border')) {
			return
		} else {
			form.style.display ='none'
			thanksPage.style.display = 'flex'
		}
	})

}

nameInput.addEventListener('keyup',cardNameHandler)
cardInput.addEventListener('keyup', cardNumberHandler)
monthInput.addEventListener('keyup', cardDateHandler)
yearInput.addEventListener('keyup', cardDateHandler)
cvcInput.addEventListener('keyup', cardCvcHandler)
button.addEventListener('click',submitHandler)
buttonReset.addEventListener('click', ()=>{
			form.style.display ='flex'
			thanksPage.style.display = 'none'
			inputs.forEach(input => {
				input.classList.remove('error-border')
				input.value =''
			})
			
})
inputs.forEach(input => {
	input.addEventListener('keyup', (e)=>{
		if(e.target.value == ""){
			e.target.classList.add('error-border')
		} else {
			e.target.classList.remove('error-border')
		}
	})
})