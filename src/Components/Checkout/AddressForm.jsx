import React,{Component} from 'react';
import TextField from '@material-ui/core/TextField';

class AddressForm extends Component {
    render() {
        const { values, handleChange } = this.props;
        return (
            <TextField 
                label="Address"
                placeholder="start typing"
                onChange={handleChange}
                variant="outlined"
                margin="normal"
                fullWidth
            />
            
        )
    }
}
export default AddressForm;