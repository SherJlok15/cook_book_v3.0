import React from 'react';
import RecipesListRecipeSchema from './RecipesListRecipeSchema';

export default function RecipesList(props) {
  return(
    <div className="container">
      {props.data === '' ?
        <div className="text-center text-success">Loading...</div> :
          props.data.length === 0 ?
            <div className="text-center margin-10 text-uppercase font-weight-bold">You dont have Recipe</div> :
            <div className="d-flex flex-wrap container justify-content-center">
              {
                props.navbarSearchValue === '' ?
                props.data.sort((a,b) =>
                  {
                    if (props.navbarSortValue === 'date') {
                    return (new Date(a.createdAt).getTime() > new Date(b.createdAt).getTime() ? -1 : new Date(a.createdAt).getTime() < new Date(b.createdAt).getTime() ? 1 : 0)
                    }
                    if (props.navbarSortValue === 'date_of_cooking') {
                    return (new Date(a.date).getTime() > new Date(b.date).getTime() ? -1 : new Date(a.date).getTime() < new Date(b.date).getTime() ? 1 : 0)
                    }
                    if (props.navbarSortValue === 'author') {
                    return (a.username.localeCompare(b.username))
                    }
                    if (props.navbarSortValue === 'title') {
                    return (a.title.localeCompare(b.title))
                    }
                  }
                ).sort((a,b) => a.elect > b.elect ? -1 : a.elect < b.elect ? 1 : 0)
                .map(item => (
                <RecipesListRecipeSchema item={item} key={item._id}/>
              )) :
              props.data.filter(item =>
                item.title.toLowerCase().includes(props.navbarSearchValue.toLowerCase())
              ).length === 0 ?
                <div className="text-center text-success"><h3>NOT FOUND</h3></div> :
                props.data.filter(item =>
                  item.title.toLowerCase().includes(props.navbarSearchValue.toLowerCase())
                ).sort((a,b) =>
                  {
                    if (props.navbarSortValue === 'date') {
                    return (new Date(a.createdAt).getTime() > new Date(b.createdAt).getTime() ? -1 : new Date(a.createdAt).getTime() < new Date(b.createdAt).getTime() ? 1 : 0)
                    }
                    if (props.navbarSortValue === 'date_of_cooking') {
                    return (new Date(a.date).getTime() > new Date(b.date).getTime() ? -1 : new Date(a.date).getTime() < new Date(b.date).getTime() ? 1 : 0)
                    }
                    if (props.navbarSortValue === 'author') {
                    return (a.username.localeCompare(b.username))
                    }
                    if (props.navbarSortValue === 'title') {
                    return (a.title.localeCompare(b.title))
                    }
                  }
                ).map(item => (
                <RecipesListRecipeSchema item={item} key={item._id}/>
                ))
              }
            </div>
      }
    </div>
  )
}
