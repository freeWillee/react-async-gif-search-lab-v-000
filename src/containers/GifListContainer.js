import React, {Component} from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends Component {
    render() {
        return (
            <div>
                <GifSearch />
                <GifList />    
            </div>
        )
    }
}

export default GifListContainer
