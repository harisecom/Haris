import React,{Component} from 'react';
import CustomButton from '../Custom-Button/Custom-Button.component';

class Comments extends Component {
    render() {
        return (
            <div className="comments">
                <form>
                    <textarea 
                        name="comment"
                        placeholder="My review..."
                    />
                    <CustomButton type="submit">Comment</CustomButton>
                </form>
                I'm the comments!!
            </div>
        )
    }
}
export default Comments;