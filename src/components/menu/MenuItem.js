import React, { PropTypes } from 'react'
import {Link} from 'react-router'

function MenuItem(props) {
    const { path, name } = props
        return (
            <li>
                <Link to={path} activeStyle={{color: 'red'}} activeClassName="active">{name || path}</Link>
            </li>
        )
}

MenuItem.propTypes = {
        path: PropTypes.string.isRequired,
        name: PropTypes.string
}

export default MenuItem
