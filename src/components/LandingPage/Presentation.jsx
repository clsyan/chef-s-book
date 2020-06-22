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

	}
	
	window.addEventListener('scroll', ()=>{
		let indexY = window.scrollY
		

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
						<li><a href='#landing'><span><i className="fa fa-level-up" aria-hidden="false"></i></span></a></li>
					</ul>
				</nav>
			</header>
			<main className='main-landing'>
				<div className='search'>
					<h1>Search for any <span>recipe</span> right now.</h1>
				</div>
				<div id='about' className='about'>
					<div id='card1' className='about-inner'>
						<div className='card'>
							<span>#Vegan</span>
							<img src={require ('../../assets/vege.jpg')} alt='vegan meal'/>

							{/*<img src="https://www.vegetariantimes.com/.image/t_share/MTQ3MDM3MzQ5NjA2MzM2NDA3/zi3000-shutterstock-buddha-bowl.jpg" alt="vegan meal" />*/}
						</div>
						<div className='card'>
							<span>#African</span>

							<img src={require ('../../assets/african.jpg')} alt='african meal' />
						</div>
						<div className='card'>
							<span>#Gluten free</span>

							<img src={require ('../../assets/gluten.jpg')} alt='gluten-free meal' />
						</div>
					</div>
					<h1><span>Search for several recipes. Filter your search for more specific results!</span></h1>
				</div>
				<div id='contact' className='contact'>
					<h1>Contact us!</h1>
					<div className='form-landing-container'>
						<form onSubmit={handleSubmit} className='form-landing'>
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