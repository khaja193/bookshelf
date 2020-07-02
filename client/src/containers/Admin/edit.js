import React,{PureComponent} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getBook,updateBook,deleteBook, clearBook} from '../../actions';


class EditBook extends PureComponent {
    state = { 
        formdata:{
            _id:this.props.match.params.id,
            name:'',
            author:'',
            pages:'',
            review:'',
            rating:'',
            price:''
        }
     }
     componentWillMount(){
         this.props.dispatch(getBook(this.props.match.params.id));  
     }

     componentWillUnmount(){
         this.props.dispatch(clearBook())
     }

     componentWillReceiveProps(nextProps){
         let book = nextProps.books.book;
         this.setState({
             formdata:{
                 _id:book._id,
                name:book.name,
                author:book.author,
                review:book.review,
                pages:book.pages,
                rating:book.rating,
                price:book.price
             }
         })
     }

     handleInput=(event,name)=>{
        const newFormData = {...this.state.formdata};
        newFormData[name] = event.target.value;

        this.setState({
            formdata:newFormData
        })
     }

     submitForm = (e)=>{
         e.preventDefault();
         //console.log(this.state.formdata)
         this.props.dispatch(updateBook(this.state.formdata));
     }
     
     deletePost = ()=>{
        this.props.dispatch(deleteBook(this.props.match.params.id))
     }
     redirectUser(){
         setTimeout(()=>{
            this.props.history.push('/user/user-reviews')
         },1000)
     }

   
    render() { 
        let books = this.props.books
        //console.log(books)
        return ( 
            <div className="rl_container article">
                {(books.updateBook===true)?
                <div className="edit_confirm">
                    post is updated, <Link to={`/books/${books.book._id}`}>Click here to see your post</Link>
                </div>
                :null}
                {
                    (books.postDeleted===true)?
                    <div className="red_tag">
                        Post is Deleted
                        {this.redirectUser()}
                    </div>
                    :null
                }
                <form onSubmit={this.submitForm}>
                    <h2>Edit Your Review</h2>    
                    <div className="form_element">
                        <input 
                        type="text" placeholder="Enter book name" value={this.state.formdata.name} 
                        onChange={(event)=>this.handleInput(event,'name')}
                        />
                    </div>

                    <div className="form_element">
                        <input 
                        type="text" placeholder="Enter author" value={this.state.formdata.author}
                        onChange={(event)=>this.handleInput(event,'author')}
                        />
                    </div>

                    <textarea value={this.state.formdata.review}
                    onChange={(event)=>this.handleInput(event,'review')}/>

                    <div className="form_element">
                        <input 
                        type="number" placeholder="Enter pages" value={this.state.formdata.pages}
                        onChange={(event)=>this.handleInput(event,'pages')}
                        />
                        
                    </div>

                    <div className="form_element">
                        <select value={this.state.formdata.rating} 
                        onChange={(event)=>this.handleInput(event,'rating')}>
                            <option val="1">1</option>
                            <option val="2">2</option>
                            <option val="3">3</option>
                            <option val="4">4</option>
                            <option val="5">5</option>
                        </select>
                    </div>
                    <div className="form_element">
                        <input 
                        type="number" placeholder="Enter price" value={this.state.formdata.price}
                        onChange={(event)=>this.handleInput(event,'price')}
                        />
                    </div>
                    <button type="submit">Edit Review</button>
                    <div className="delete_post">
                        <div className="button"
                        onClick={this.deletePost}>Delete review</div>
                    </div>
                    
                        
                    
                </form>
               
                
            </div>
         );
    }
}

function mapStateToProps(state){
    //console.log(state)
    return{
        books:state.books
    }
}
export default connect(mapStateToProps)(EditBook);