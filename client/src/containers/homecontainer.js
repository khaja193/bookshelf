import React,{Component} from 'react';
import {connect} from 'react-redux';
import {getBooks} from '../actions';


import BookItem from '../widgetsUI/bookitem';

class HomeContainer extends Component {
    state = {  }

    componentWillMount(){
        this.props.dispatch(getBooks(5,0,'asc'))
    }

    renderItems = (books)=>(
        books===undefined?null:
        books.map( (item,i) =>{
            return <BookItem {...item} key={i}/>
        })
        
        
    )
    loadmore =() =>{
        let count = this.props.books.list.length;
        this.props.dispatch(getBooks(3,count,'asc',this.props.books.list));


    }

    render() { 
        //console.log(this.props.books.list)
        return ( 
            <div>
                
                {this.renderItems(this.props.books.list)}
                <div className="loadmore"
                onClick = {this.loadmore}
                >Load More  </div>
            </div>
         );
    }
}

function  mapStateToProps(state) {
    return {
        books:state.books   
    }
}
export default connect(mapStateToProps)(HomeContainer);