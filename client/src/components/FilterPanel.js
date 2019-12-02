import React from 'react';

export default function FilterPanel(props) {
  return (
    <div className="bg-whith-opacity text-white">
      <div className="container d-flex justify-content-center">
        <div className="margin-10 opacity-1">Sort by: </div>
        <label className="margin-10 cursor-pointer">
          <input type="radio" name="filter" value="author" onChange={(event) => props.navbarGetSortValue(event.target.value)} checked={props.navbarSortValue === 'author'}className="margin-right-5 hide"/>
          <span className={props.navbarSortValue === 'author'? 'border-botom padding-10' : 'padding-10'}>Author name</span>
        </label>
        <label className="margin-10 cursor-pointer">
          <input type="radio" name="filter" value="date" onChange={(event) => props.navbarGetSortValue(event.target.value)} checked={props.navbarSortValue === 'date'} className="margin-right-5 hide"/>
          <span className={props.navbarSortValue === 'date'? 'border-botom padding-10' : 'padding-10'}>Creation date</span>
        </label>
        <label className="margin-10 cursor-pointer">
          <input type="radio" name="filter" value="title" onChange={(event) => props.navbarGetSortValue(event.target.value)} checked={props.navbarSortValue === 'title'} className="margin-right-5 hide"/>
          <span className={props.navbarSortValue === 'title'? 'border-botom padding-10' : 'padding-10'}>Recipe title</span>
        </label>
        <label className="margin-10 cursor-pointer">
          <input type="radio" name="filter" value="date_of_cooking" onChange={(event) => props.navbarGetSortValue(event.target.value)} checked={props.navbarSortValue === 'date_of_cooking'} className="margin-right-5 hide" />
          <span className={props.navbarSortValue === 'date_of_cooking'? 'border-botom padding-10' : 'padding-10'}>Date of cooking</span>
        </label>
      </div>
    </div>
  );
}
