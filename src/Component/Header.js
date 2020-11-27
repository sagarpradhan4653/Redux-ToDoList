import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const customStyle = {
    userStyle: {
        color: 'white'
    }

}

function Header(props) {
    return (
        <div>
            {!props.myNewState ?
                <Link to="/">UserVerification</Link> :

                <nav class="navbar  navbar-expand-lg  navbar-dark black">
                    <a class="navbar-brand" href="#">Redux TodoList</a>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <button class="btn btn-white btn-m my-0" type="submit">
                                    <Link to="/">UserVerification</Link>
                                </button>
                                <button class="btn btn-yellow btn-sm my-0" type="submit">
                                    <Link class="nav-link" to="/TodoList">TodoList</Link>
                                </button>

                                <button class="btn btn-green btn-sm my-0" type="submit">
                                    <Link class="nav-link" to="/Logout">Logout</Link>
                                </button>
                                <button class="btn btn-blue btn-sm my-0" type="submit">
                                    <Link class="nav-link" to="/SearchTask">SearchTask</Link>
                                </button>
                            </li>
                        </ul>
                    </div>
                    {props.state.userVerify.map((item, index) => {
                        return <h3 style={customStyle.userStyle} key={index}>{item.email}</h3>
                    })}
                </nav>
            }
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        state,
        myNewState: state.userVerify != null ? true : false
    }
}

export default connect(mapStateToProps)(Header)