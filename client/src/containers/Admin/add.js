import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {addBook,clearNewBook} from '../../actions';
;

class AddBook extends Component {
    state = { 
        formdata:{
            name:'',
            author:'',
            pages:'',
            review:'',
            rating:'',
            price:''
        }
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
         this.props.dispatch(addBook({...this.state.formdata,ownerId:this.props.user.login.id}));
     }
     componentWillMount(){
         this.props.dispatch(clearNewBook());
     }

    showNewBook = (book) =>(
        (book.post===true)?
        <div className="conf_link">
            Cool..! <Link to={`/books/${book.bookId}`}>
                Click the link to see the post
            </Link>
        </div>
        :null
    )   
    render() { 
        return ( 
            <div className="rl_container article">
                <form onSubmit={this.submitForm}>
                    <h2>Add Your Review</h2>    
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
                    <button type="submit">Add Review</button>
                    
                        {this.props.books.newBook?
                        this.showNewBook(this.props.books.newBook):null}
                    
                </form>
               
                
            </div>
         );
    }
}

function mapStateToProps(state){
   // console.log(state)
    return{
        books:state.books
    }
} 
export default connect(mapStateToProps)(AddBook);