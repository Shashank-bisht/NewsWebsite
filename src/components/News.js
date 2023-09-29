import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

export default class News extends Component {
  // static defaultProps = {
  //   country: 'in',
  //   pagesize: 9,
  //   category: 'general'
  // }
  // static propTypes = {
  //   country: PropTypes.string,
  //   pagesize:PropTypes.number,
  //   category:PropTypes.string,
  // }
  constructor() {
    super()
    // setting state of the news item using constructor
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }
  async updatenews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f667f2f013184d4c8514c28ce2bf40ef&page=${this.state.page}&pageSize=${this.props.pagesize}`
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedata = await data.json()
    console.log(parsedata)
    this.setState({ articles: parsedata.articles, loading: false })
  }
  //   componentdidmount runs after render
  async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f667f2f013184d4c8514c28ce2bf40ef&page=1&pageSize=${this.props.pagesize}`
    // this.setState({loading:true})
    // let data = await fetch(url);
    // let parsedata = await data.json()
    // console.log(parsedata)
    // this.setState({ articles: parsedata.articles,loading:false})
    this.updatenews()
  }
  handelpreviousclick = async () => {
    // console.log("previous")
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f667f2f013184d4c8514c28ce2bf40ef&page=${this.state.page - 1}&pageSize=${this.props.pagesize}`
    // this.setState({loading:true})
    // let data = await fetch(url);
    // let parsedata = await data.json()

    // console.log(parsedata)

    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedata.articles,
    //   loading:false
    // })
    this.setState({ page: this.state.page - 1 })
    this.updatenews()
  }
  handelnextclick = async () => {
    // console.log("next")
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f667f2f013184d4c8514c28ce2bf40ef&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`
    // this.setState({loading:true})
    // let data = await fetch(url);
    // let parsedata = await data.json()
    // console.log(parsedata)

    // this.setState({
    //   page: this.state.page + 1,
    //   articles: parsedata.articles,
    //   loading:false
    // })
    this.setState({ page: this.state.page + 1 })
    this.updatenews()
  }
  render() {
    return (
      <div className='container my-3'>
        {/* <NewsItem title="mytitle" description = "mydesc"></NewsItem> */}
        <h2 className='my-4 text-center'>Newmonkey- get daily news</h2>
        {this.state.loading && <Spinner />}
        <div className='row '>
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className='col-md-4 my-4' key={element.url}><NewsItem title={element.title} discription={element.description} imageurl={element.urlToImage} newsurl={element.url} date={element.publishedAt} source={element.source.name} />
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between"><button disabled={this.state.page <= 1} type="button" className="btn btn-primary" onClick={this.handelpreviousclick}>Previous</button>
          <button type="button" className="btn btn-secondary " onClick={this.handelnextclick}>Next</button></div>
      </div>
    )
  }
}
