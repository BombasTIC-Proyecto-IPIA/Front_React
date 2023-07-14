import React, {Component} from 'react';
class MenuDesplegable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedValue: ""
        }
    }
    render() {
        const handleChange = (e) => {
            this.setState({ selectedValue: e.target.value })
        }
        return (
            <select data-te-select-init>
                <option value="D">One</option>
                <option value="P">Two</option>
            </select>
        );
    }
}
export default MenuDesplegable;