import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


class Logout extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.logOutDone()
    }



    render() {
        return (
            <Redirect to="/" />
           
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logOutDone: () => dispatch({ type: 'DONE_LOGOUT'})
    }
}

export default connect(null, mapDispatchToProps)(Logout)


