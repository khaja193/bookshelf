import React,{Component} from 'react';
import {connect} from 'react-redux';
import {getUserPosts} from '../../actions';

import moment from 'moment-js';
import {Link} from 'react-router-dom';

class UserPosts extends Component {
    

    componentWillMount(){
        this.props.dispatch(getUserPosts(this.props.user.login.id))
    }
    showUserPosts = (user) =>(
        user.userPosts ?
        user.userPosts.map((item,i)=>(
            <tr key ={i}>
                <td><Link to={`/user/edit-post/${item._id}`}>{item.name}</Link></td>
                <td>{item.author}</td>
                <td>
                    {moment(item.createAt).format("DD/MM/YYYY")}
                </td>
            </tr>
        ))
        
        :null
    )
    render() { 
        let user = this.props.user;
        return (  
            <div className="user_posts">
                <h4>Your Reviews:</h4>
                <table>
                    <thead> 
                        <tr>
                            <th>Name</th>
                            <th>Author</th>
                            <th>Date(DMY)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.showUserPosts(user)}
                    </tbody>
                </table>
                <div>
                    <h3><strong>Click on the name of the book to edit/delete it...!</strong></h3>
                </div>
            </div>
            
        );
    }
}

function mapStateToProps(state){
    
    return{
        user:state.user
    }   
}
 
export default connect(mapStateToProps)(UserPosts)