import React, {Component} from 'react'
class GifSearch extends Component {
    state = {
        searchTerm: ''
    }
    
    handleChange = event => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSubmit = () => {
        console.log('submit button clicked')
    }

    render() {
        return (
            <div>
                <h3>Enter a search term: </h3>
                <form>
                    <input 
                        type="text" 
                        onChange={this.handleChange} 
                        value = {this.state.searchTerm}
                    />
                    <input type="submit" onClick={this.handleSubmit} />
                </form>
            </div>
        )
    }
}

export default GifSearch
