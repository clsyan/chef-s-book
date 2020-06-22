
import React, { Component } from 'react'
class Header extends Component{
    
    state={
        input: "",
        filter: "search/?query=",
        
        //to use on placeholder
        cuisineFilter: [],
        dietFilter: [],
        intoleranceFilter: [],
        placeholder: []

    }

    handleInput = (event)=>{
        this.setState({input: event.target.value})
    }
    handleFilter = (event)=>{
        this.setState({filter: event.target.value})
        this.setState({cuisineFilter: event.target.label}, () =>{
            console.log(this.state.filter)
        })
        
    }
    handlecuisineFilter = (event) =>{

        let filter = event.target.htmlFor
        let placeholder = event.target.innerText
        
        function removeFilter(array){
            return array !== filter
        }
        function removePlaceholder(array){
            return array !== placeholder

        }
        
        if(!this.state.cuisineFilter.includes(filter)){
            let newList = this.state.cuisineFilter.concat(filter)
            this.setState({cuisineFilter: newList})
            let newPlaceholder = this.state.placeholder.concat(placeholder)
            this.setState({placeholder: newPlaceholder})
            console.log(placeholder)
        }else{
            let newList = this.state.cuisineFilter.filter(removeFilter)
            this.setState({cuisineFilter: newList})
            let newPlaceholder = this.state.placeholder.filter(removePlaceholder)
            this.setState({placeholder: newPlaceholder})
        }
    }
    handleDietFilter = (event) =>{

        let filter = event.target.htmlFor
        let placeholder = event.target.innerText
        console.log(placeholder)
        
        function removeFilter(array){
            return array !== filter
        }
        function removePlaceholder(array){
            return array !== placeholder

        }
        
        if(!this.state.dietFilter.includes(filter)){
            let newList = this.state.dietFilter.concat(filter)
            this.setState({dietFilter: newList})
            let newPlaceholder = this.state.placeholder.concat(placeholder)
            this.setState({placeholder: newPlaceholder})
        }else{
            let newList = this.state.dietFilter.filter(removeFilter)
            this.setState({dietFilter: newList})
            let newPlaceholder = this.state.placeholder.filter(removePlaceholder)
            this.setState({placeholder: newPlaceholder})
        }
    }
    handleIntoleranceFilter = (event) =>{

        let filter = event.target.htmlFor
        let placeholder = event.target.innerText
        


        function removeFilter(array){
            return array !== filter
        }
        function removePlaceholder(array){
            return array !== placeholder

        }
        
        if(!this.state.intoleranceFilter.includes(filter)){
            let newList = this.state.intoleranceFilter.concat(filter)
            this.setState({intoleranceFilter: newList})
            let newPlaceholder = this.state.placeholder.concat(placeholder)
            this.setState({placeholder: newPlaceholder})
            console.log(placeholder)
        }else{
            let newList = this.state.intoleranceFilter.filter(removeFilter)
            this.setState({intoleranceFilter: newList})
            let newPlaceholder = this.state.placeholder.filter(removePlaceholder)
            this.setState({placeholder: newPlaceholder})
        }
    }

    showPlaceholder = () =>{
        return (
                'Search for '+ this.state.placeholder.join(' ')
            )
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log(
                this.state.dietFilter,
                this.state.cuisineFilter,
                this.state.intoleranceFilter,
                this.state.input
            )
        this.props.handleInput({
            cuisineFilter: this.state.cuisineFilter, 
            input: this.state.input, 
            dietFilter: this.state.dietFilter,
            intoleranceFilter: this.state.intoleranceFilter
        })
    }
    render(){
        return(
            
            <header clasname='header-container'>
        <form onSubmit={this.handleSubmit} className="input-container">
            <input onChange={this.handleInput} placeholder={this.showPlaceholder()} type="text" name="" />
            <button>
                <svg className="bi bi-search" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                  <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                </svg>
            </button>
        </form>
        <div className="filter-container">
            <div  className="filter">
                <input id ='cuisine' type="checkbox" name="" />
                <label htmlFor="cuisine">Cuisine <svg className="bi bi-chevron-compact-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
</svg></label>
                <ul id='cuisine-list' className="filter-list">
                    <li>
                        <input id='african' type="checkbox"/>
                        <label onClick={this.handlecuisineFilter} htmlFor='african'>#African</label>                                    
                    </li>
                    <li>
                        <input type="checkbox" id='american'/>
                        <label onClick={this.handlecuisineFilter}  htmlFor='american' >#American</label>
                    </li>
                    <li>
                        <input type="checkbox" id='british' />
                        <label onClick={this.handlecuisineFilter} htmlFor='british'>#British</label>
                    </li>
                    <li>
                        <input type="checkbox" id='cajun'/>
                        <label onClick={this.handlecuisineFilter} htmlFor='cajun'>#Cajun</label>
                    </li>
                    <li>
                        <input  type="checkbox" id='caribbean' />
                        <label onClick={this.handlecuisineFilter} htmlFor='caribbean'>#Caribbean</label>
                    </li>
                    <li>
                        <input type="checkbox" id='chinese'/>
                        <label onClick={this.handlecuisineFilter} htmlFor='chinese'>#Chinese</label>
                    </li>

                    <li>
                        <input type="checkbox" id='eastern_europe' />
                        <label onClick={this.handlecuisineFilter} htmlFor='eastern_europe'>#Eastern European</label>
                    </li>

                    <li>
                        <input type="checkbox" id='european' />
                        <label onClick={this.handlecuisineFilter} htmlFor='european'>#European</label>
                    </li>
                    <li>
                        <input  type="checkbox" id='french' />
                        <label onClick={this.handlecuisineFilter} htmlFor='french'>#French</label>
                    </li>

                    <li>
                        <input  type="checkbox" id='german' />
                        <label onClick={this.handlecuisineFilter} htmlFor='german'>#German</label>
                    </li>
                    <li>
                        <input  type="checkbox" id='greek' />
                        <label onClick={this.handlecuisineFilter} htmlFor='greek'>#Greek</label>
                    </li>
                    <li>
                        <input  type="checkbox" id='irish' />
                        <label onClick={this.handlecuisineFilter} htmlFor='irish'>#Irish</label>
                    </li>
                    <li>
                        <input  type="checkbox" id='indian' />
                        <label onClick={this.handlecuisineFilter} htmlFor='indian'>#Indian</label>
                    </li>
                    <li>
                        <input  type="checkbox" id='italian' />
                        <label onClick={this.handlecuisineFilter} htmlFor='italian'>#Italian</label>
                    </li>
                    <li>
                        <input  type="checkbox" id='japanese' />
                        <label onClick={this.handlecuisineFilter} htmlFor='japanese'>#Japanese</label>
                    </li>
                    <li>
                        <input  type="checkbox" id='jewish' />
                        <label onClick={this.handlecuisineFilter} htmlFor='jewish'>#Jewish</label>
                    </li>
                    <li>
                        <input  type="checkbox" id='latin american' />
                        <label onClick={this.handlecuisineFilter} htmlFor='latin american'>#Latin American</label>
                    </li>

                    <li>
                        <input  id='mexican' type="checkbox"/>
                        <label onClick={this.handlecuisineFilter} htmlFor='mexican'>#Mexican</label>
                    </li>
                    <li>
                        <input  type="checkbox" id='middle eastern' />
                        <label onClick={this.handlecuisineFilter} htmlFor='middle eastern'>#Middle Eastern</label>
                    </li>
                    <li>
                        <input  type="checkbox" id='nordic' />
                        <label onClick={this.handlecuisineFilter} htmlFor='nordic'>#Nordic</label>
                    </li>
                    <li>
                        <input  type="checkbox" id='southern' />
                        <label onClick={this.handlecuisineFilter} htmlFor='southern'>#Southern</label>
                    </li>
                    <li>
                        <input  type="checkbox" id='spanish' />
                        <label onClick={this.handlecuisineFilter} htmlFor='spanish'>#Spanish</label>
                    </li>
                    <li>
                        <input  type="checkbox" id='thai' />
                        <label onClick={this.handlecuisineFilter} htmlFor='thai'>#Thai</label>
                    </li>
                    <li>
                        <input  type="checkbox" id='vietnamese' />
                        <label onClick={this.handlecuisineFilter} htmlFor='vietnamese'>#Vietnamese</label>
                    </li>
                </ul>
            </div>
            <div className="filter">
                <input id ='diet' type="checkbox" name="" />
                <label htmlFor="diet">
                    Diet  
                    <svg className="bi bi-chevron-compact-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
                    </svg>
                </label>
                <ul id='diet-list' className="filter-list">
                    <li>
                        <input  id='gluten-free' type="checkbox"/>
                        <label onClick={this.handleDietFilter} htmlFor='gluten-free'>#Gluten Free</label>
                    </li>
                    <li>
                        <input  type="checkbox" id='american' />
                        <label onClick={this.handleDietFilter} htmlFor='ketogenic' >#Ketogenic</label>
                    </li>
                    <li>
                        <input  type="checkbox" id='vegetarian' />
                        <label onClick={this.handleDietFilter} htmlFor='vegetarian'>#Vegetarian</label>
                    </li>
                    <li>
                        <input  type="checkbox" id='lacto-vegetarian' />
                        <label onClick={this.handleDietFilter} htmlFor='lacto-vegetarian'>#Lacto-Vegetarian</label>
                    </li>
                    <li>
                        <input  type="checkbox" id='ovo-vegetarian' />
                        <label onClick={this.handleDietFilter} htmlFor='ovo-vegetarian'>#Ovo-Vegetarian</label>
                    </li>
                    <li>
                        <input  type="checkbox" id='vegan' />
                        <label onClick={this.handleDietFilter} htmlFor='vegan'>#Vegan</label>
                    </li>
                    <li>
                        <input  type="checkbox" id='pescetarian'/>
                        <label onClick={this.handleDietFilter} htmlFor='pescetarian'>#Pescetarian</label>
                    </li>
                    <li>
                        <input  type="checkbox" id='paleo' />
                        <label onClick={this.handleDietFilter} htmlFor='paleo'>#Paleo</label>
                    </li>
                    <li>
                        <input  type="checkbox" id='primal' />
                        <label onClick={this.handleDietFilter} htmlFor='primal'>#Primal</label>
                    </li>
                    <li>
                        <input  type="checkbox" id='whole30' />
                        <label onClick={this.handleDietFilter} htmlFor='whole30'>#Whole30</label>
                    </li>
                </ul>
            </div>
            <div  className="filter">
                <input id ='intolerances' type="checkbox" name="" />
                <label htmlFor="intolerances">Intolerances <svg className="bi bi-chevron-compact-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
</svg></label>
                <ul id='intolerances-list' className="filter-list">
                    <li>
                        <input  id='Egg' type="checkbox"/>
                        <label onClick={this.handleIntoleranceFilter} htmlFor='Egg'>#Egg</label>
                    </li>
                    <li>    
                        <input  type="checkbox" id='Dairy' />
                        <label onClick={this.handleIntoleranceFilter} htmlFor='Dairy' >#Dairy</label>
                    </li>
                    <li>    
                        <input  type="checkbox" id='Gluten' />
                        <label onClick={this.handleIntoleranceFilter} htmlFor='Gluten'>#Gluten</label>
                    </li>
                    <li>
                        <input  type="checkbox" id='Grain' />
                        <label onClick={this.handleIntoleranceFilter} htmlFor='Grain'>#Grain</label>
                    </li>
                    <li>    
                        <input  type="checkbox" id='Peanut' />
                        <label onClick={this.handleIntoleranceFilter} htmlFor='Peanut'>#Peanut</label>
                    </li>
                    <li>    
                        <input  type="checkbox" id='Seafood' />
                        <label onClick={this.handleIntoleranceFilter} htmlFor='Seafood'>#Seafood</label>
                    </li>
                    <li>    
                        <input  type="checkbox" id='Sesame'/>
                        <label onClick={this.handleIntoleranceFilter} htmlFor='Sesame'>#Sesame</label>
                    </li>
                    <li>    
                        <input  type="checkbox" id='Shellfish' />
                        <label onClick={this.handleIntoleranceFilter} htmlFor='Shellfish'>#Shellfish</label>
                    </li>
                    <li>    
                        <input  type="checkbox" id='Soy' />
                        <label onClick={this.handleIntoleranceFilter} htmlFor='Soy'>#Soy</label>
                    </li>
                    <li>
                        <input  type="checkbox" id='Sulfite' />
                        <label onClick={this.handleIntoleranceFilter} htmlFor='Sulfite'>#Sulfite</label>
                    </li>
                    <li>
                        <input  type="checkbox" id='Tree-Nut' />
                        <label onClick={this.handleIntoleranceFilter} htmlFor='Tree-Nut'>#Tree Nut</label>
                    </li>
                    <li>
                        <input  type="checkbox" id='Wheat' />
                        <label onClick={this.handleIntoleranceFilter} htmlFor='Wheat'>#Wheat</label>
                    </li>
                </ul>
            </div>
        </div>
    </header>

        
        )
    }
}
export default Header