import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'

export default class NewsItem extends Component {

  render() {
    let { title, discription, imageurl, newsurl, date, source,  } = this.props;
    return (
      <div>
        <div className="card" ><span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex:'1'}}>
             {source}
            </span>
          <img src={imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{discription}</p>
            <p className="card-text"><small className="text-muted">Published on - {new Date(date).toGMTString()}</small></p>
            <a href={newsurl} target="_blank" className="btn btn-primary">Read more</a>
          </div>
        </div>

      </div>
    )
  }
}
