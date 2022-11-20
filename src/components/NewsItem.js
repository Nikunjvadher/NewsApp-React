import {Component} from 'react'
// import defaultImg from '../../img/default-Img.png';
import '../App.css'

export class NewsItem extends Component {
    render(){

        let {title , description , imgUrl , newsUrl , author , date , source} = this.props;
        return (
            <div className='my-3'>
                <div className="card " style={{height: '28rem'}}>
                    <div className="d-flex  justify-content-end">
                    <span className="position-absolute  badge rounded-pill bg-danger" >{source}</span>
                    </div>
                    <img src={!imgUrl?"https://media2.gmgroup.be/00_nm_logo.png":imgUrl} className={`card-img-top cardImg`} alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" rel='noreferrer' className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
} 
// defaultImg

export default NewsItem;