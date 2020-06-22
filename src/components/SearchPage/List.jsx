import React, { Component } from 'react'


export default class List extends Component{

    handlePageNavigation = (event) => {
        this.props.recipeHandlePageNavigation({pageNav: event.target.value})
    }

    renderRecipeList = () =>{
        return (
            <>
                <ul>
                    {this.props.data.map(item => {
                        return( 
                            <li key={item.id}>
                                <div className='title-container'>
                                    <h2>{item.title}</h2>
                                    <p className='readyInMinutes'><i className="fa fa-clock-o" aria-hidden="true"></i> Ready in:  {item.readyInMinutes} minutes</p>
                                    
                                    <p className='servings'>
                                        <i className="fa fa-cutlery" aria-hidden="true"></i>
                                        {item.servings > 1 ? ` Serves ${item.servings} people` : ` Serves ${item.servings} person`}
                                    </p>
                                    
                                    <a href={item.sourceUrl} className='btn btn-danger'>Get this recipe</a>
                                </div>
                                <a href={item.sourceUrl}>
                                    <img src={
                                        'https://spoonacular.com/recipeImages/'+ item.id +'-636x393'
                                    } 
                                    alt="recipe"/>
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <div className='next-prev-btn'>
                    
                    <button className='btn btn-danger' value='prev' onClick={this.handlePageNavigation}>Previous page</button>
                    <button className='btn btn-danger' value='next' onClick={this.handlePageNavigation}>Next page</button>
                </div>
            </>
        )
    }
    renderLoading = () =>{
        return(
            <div className="spinner-border text-danger" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        )
    } 
    render() 
    {
        
        return(
            
            <div className='list-container'>
                
                {this.props.isLoading ? this.renderLoading() : this.renderRecipeList()}
               
            </div>
        )
    }
}