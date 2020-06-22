import React, { Component } from 'react'
import axios from 'axios'
import Header from './Header'
import List from './List'
import './searchPage.css'

class SearchPage extends Component{
    inputRef = React.createRef()
    
    constructor(){
        super()
        
        this.key= process.env.REACT_APP_API_KEY
        
    }
    state={
        data: [],
        page: 0,
        isLoading: false,
    }
    
    componentDidMount(){
        axios.get(`https://api.spoonacular.com/recipes/search/?offset=${this.state.page}&apiKey=${this.key}`)
        .then(res =>{
            this.setState({data: res.data.results})        
        })
    }
    
    doSearch= (props)=>{

        this.setState({isLoading: true})
        console.log(`https://api.spoonacular.com/recipes/search/?query=${props.input}&apiKey=${this.key}&intolerances=${props.intoleranceFilter}&diet=${props.dietFilter}&cuisine=${props.cuisineFilter}&offset=${this.state.page}`)
        axios.get(`https://api.spoonacular.com/recipes/search/?query=${props.input}&apiKey=${this.key}&intolerances=${props.intoleranceFilter}&diet=${props.dietFilter}&cuisine=${props.cuisineFilter}&offset=${this.state.page}`)
        .then(res =>{
            console.log(res.data.results)
            this.setState({data: res.data.results})
            this.setState({isLoading: false})
            
        })

              
    }
    recipeHandlePageNavigation= (props) =>{
        if(props.pageNav === 'next'){
            let newState = this.state.page + 10
            this.setState({page: newState}, () => {
                this.doSearch(this.inputRef.current.state)                
            })

        }else if(props.pageNav === 'prev' && this.state.page > 0){
            let newState = this.state.page - 10
            this.setState({page: newState}, () => {
                this.doSearch(this.inputRef.current.state)                
            })
        }
    }

    render(){
        return(
            <div className='search-page-container'>

                <Header
                ref={this.inputRef} 
                handleInput={this.doSearch} />

                <List
                searchType={this.state.searchType}
                isLoading={this.state.isLoading} 
                recipeHandlePageNavigation={this.recipeHandlePageNavigation} 
                data={this.state.data} />

            </div>
        )
    }
}
export default SearchPage