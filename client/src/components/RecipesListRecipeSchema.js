import React from 'react';
import { Link } from 'react-router-dom';

export default function RecipesListRecipeSchema(props) {
  return (
    <div key={props.item._id}
      className="border-radius min-width-90 d-flex flex-column margin-top-20 padding-10 bg-light container">
      <div className="d-flex flex-column">
        <h3 className="text-success text-center align-self-center">
          {props.item.title}
        </h3>
      </div>
      <div className="margin-10">
        <div>
          <div className="text-success">
            created at:
          </div>
          <div className="text-muted">
            {new Date(props.item.updatedAt).toString().split("GMT")[0]}
          </div>
        </div>
        <div>
          <div className="text-success">
            Author:
          </div>
          <div className="text-muted">
            {props.item.username}
          </div>
        </div>
        <div>
          <div className="text-success">
            I want to cook this dish at:
          </div>
          <div className="text-muted">
            {new Date(props.item.date).toString().split("GMT")[0]}
          </div>
        </div>
        <div className="pre-wrap margin-top-20">
          {props.item.text.length > 180 ? props.item.text.substring(0, 180 - 3) + "..." : props.item.text}
        </div>
      </div>
      <Link to={"/recipes/"+props.item._id}
        className="btn btn-success align-self-end mt-auto p-2 bd-highlight margin-10">
        Read more
      </Link>
    </div>
  )
}
