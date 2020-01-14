import React from 'react'
import {Segment, Input} from 'semantic-ui-react'

const SearchBar = props => {
    return (
        <div className="search-bar">
            <Segment stacked>
                <Input icon="search" size="large" placeholder="search..."></Input>
            </Segment>
        </div>
    )
}

export default SearchBar