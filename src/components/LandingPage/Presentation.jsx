import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import './LandingPage.css'

function Presentation(){


	const [scroll,setScroll] = useState(false)

	function handleSubmit(event){
		event.preventDefault()

		let form = event.target

		let email = form.querySelector('.email').value
		let first_name = form.querySelector('.first-name').value
		let second_name = form.querySelector('.second-name').value
		let message = form.querySelector('.text').value
		
		let templateParams = {
		    name: first_name + second_name,
		    message: message,
		    email: email
		};
		 
		emailjs.send('gmail', 'template_K3CFZGy9', templateParams, 'user_stYerj2avFB510tPaqvSJ')
		    .then(function(response) {
		       console.log('SUCCESS!', response.status, response.text);
		       window.alert('Thanks for the feedback, '+ first_name +'!')
		    }, function(error) {
		       console.log('FAILED...', error);
		    });

		console.log(templateParams)	
	}
	
	let handleScroll = window.addEventListener('scroll', ()=>{
		let indexY = window.scrollY
		console.log(scroll)
		console.log(indexY)

		if(indexY > 595 && indexY < 1370){
			setScroll(true)
		}else {
			setScroll(false)
		}
		
		
	})




	return(
	<div id='landing' className='landing'>
			<header  className={scroll===true ? 'header-landing-dark' : 'header-landing'}>
				<nav className='landing-nav'>
					<ul className='ul-landing'>
						<li><a href='/search'><span>Search</span></a></li>
						<li><a href='#about'>About</a></li>
						<li><a href='#contact'>Contact</a></li>
						<li><span><a href='#landing'><i className="fa fa-level-up" aria-hidden="true"></i></a></span></li>
					</ul>
				</nav>
			</header>
			<main className='main-landing'>
				<div className='search'>
					<h1>Search for any <span>recipe</span> right now.</h1>
				</div>
				<div id='about' className='about'>
					<div className='about-inner'>
						<div className='card'>
							<span>#Vegan</span>
							<img src="https://www.vegetariantimes.com/.image/t_share/MTQ3MDM3MzQ5NjA2MzM2NDA3/zi3000-shutterstock-buddha-bowl.jpg" alt="vegan meal" />
						</div>
						<div className='card'>
							<span>#African</span>

							<img src='https://zululandobserver.co.za/wp-content/uploads/sites/56/2015/05/AFrican-food.jpg' alt='african meal' />
						</div>
						<div className='card'>
							<span>#Gluten free</span>

							<img src='https://threebakers.com/wp-content/uploads/2017/05/gluten-free-food-3.jpg' alt='gluten-free meal' />
						</div>
					</div>
					<h1><span>Search for several recipes. Filter your search for more specific results!</span></h1>
				</div>
				<div id='contact' className='contact'>
					<h1>Contact us!</h1>
					<div className='form-landing-container'>
						<form method='POST' onSubmit={handleSubmit} className='form-landing'>
							<input required placeholder='Email' className='email' name='email'/>
							
							<input required placeholder='First Name' className='first-name' name='first name' />
							<input required placeholder='Last Name' className='second-name' name='second name' />
							<textarea required className='text'></textarea>
							<button type='submit' className='button'>Send e-mail</button>
						</form>
					</div>
				</div>
			</main>

		</div>
	)
}
export default Presentation