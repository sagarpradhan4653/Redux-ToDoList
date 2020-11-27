import React, { Fragment } from 'react'
import { MDBInput, MDBIcon, MDBBtn } from "mdbreact";
import { connect } from 'react-redux'




class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            date: '',
            discr: '',
            checked: "",
            edit: -1,
            suggest: ''

        }
    }

    componentDidMount() {
        if (!this.props.stateLove) {
            this.props.history.push('/')
            console.log(this.props.stateLove, "StateLove ");

        } else {
            console.log('hello');
        }
    }

    ItemSuggest = (e) => {
        this.setState({
            suggest: e.target.value
        })
    }

   

    AddInArry = (e) => {
        e.preventDefault()


        if (this.state.edit == -1) {
            this.props.userInfo(this.state)
        }
        else {
            this.props.editValue({ ind: this.state.edit, obj: this.state })
            this.setState({ edit: -1 })
        }
        this.clearInputItem()


        // this.props.todoDate(this.state.date)

    }


    DeleteHandle = (ind) => {
        this.props.todoDelete({ index: ind })

    }

    // AddDate = () => {
    //     this.props.todoDate(this.state.date)

    // }

    changeValue = (name, value) => {
        this.setState({ [name]: value })
    }

    //for empty the value of input box
    clearInputItem = () => {
        this.setState({
            name: "",
            date: '',
            discr: ""
        })
    }


    // for sending the value into input box
    HandleUpdate = (ind) => {
        var findItem = this.props.state.userDetails[ind]
        this.setState(
            {
                name: findItem.name,
                date: findItem.date,
                discr: findItem.discr
            }
        )
        this.setState({ edit: ind })
    }


    // checkUpdate = (index) => {
    //     this.setState({

    //     })
    // }

    checkUpdate = (ind) => {


        var arrClick = this.props.state.userDetails[ind]

        var newObj = { checked: !arrClick.checked }

        console.log(newObj, ind, 'inside HandleClick')
        this.props.checkUpdate({ inda: ind, obj: newObj })
        // this.props.pendingDispatch({ obj: newObj})
        return false



    }












    render() {

        // this is the way to get date in yyyy/mm/dd format
        var curDate = new Date().toISOString().slice(0, 10);
        console.log(curDate, "PC date");
        console.log(this.state.date, "calender date");
        console.log(this.checkUpdate, 'checkUpdate');
// throw  new Error('required')
        return (
            <div>
                {/* {curDate < this.state.date && 'you are successfull in this'} */}
                <h1>TodoList</h1><br />
                {/* {this.props.state.userVerify.map((item, index) => {
                    return <h3 key={index}>{item.email}</h3>
                })} */}
                <form>
                    <MDBInput
                        label="What do you wants to do?"
                        outline icon="user"
                        type="text"
                        value={this.state.name}
                        name="name"
                        onChange={e => { this.changeValue(e.target.name, e.target.value) }}
                        placeholder="What's your plan "


                    />
                    <input
                        type="date"
                        outline icon="Dates"
                        value={this.state.date}
                        name="date"
                        required pattern="\d{4}-\d{2}-\d{2}"
                        onChange={e => { this.changeValue(e.target.name, e.target.value) }}



                    />
                    <MDBInput
                        name="discr"
                        onChange={e => { this.changeValue(e.target.name, e.target.value) }}
                        type="text"
                        value={this.state.discr}
                        label="Add Discription"
                        rows="4"
                        icon="pencil-alt"
                    />
                    <input className="btn btn-outline-success" type="button" onClick={this.AddInArry} value="ADD" ></input><br />
                    {/* <Fragment>
                    <MDBBtn tag="a" type="button" onClick={this.AddInArry} value={this.state.edit == -1 ? "EDIT" : "UPDATE"} floating gradient="peach">
                        <MDBIcon icon="address-card" />
                    </MDBBtn>
                </Fragment> */}
                    <h2> Search Task</h2>
                    <MDBInput
                        onChange={this.ItemSuggest}
                        label="Finding Recent Task"
                        outline icon="search"
                        type="text"
                        name="task"
                        value={this.state.su}
                        placeholder="Search The Task"
                    />

                    {/* <Fragment>
                    <MDBBtn tag="a" type="button" onClick={this.SearchTodo} floating gradient="peach">
                        <MDBIcon icon="search" />
                    </MDBBtn>
                </Fragment> */}
                    <ul>
                        {this.props.state.userDetails.filter(item => item.name.includes(this.state.suggest)).map((item, index) => {
                            console.log(item, "hello")
                            return <li key={index}>
                                <h3 className={item.checked ? "checkbox" : ""}> {item.name}</h3>
                                <p className={item.checked ? "checkbox" : ""}>{item.date}</p>
                                <p className={item.checked ? "checkbox" : ""}>{item.discr}</p>
                                <p><strong>{curDate > item.date ? 'Due Date is Passed' : ''} </strong></p>
                                <span className={item.checked ? "checkbox" : ""}></span>
                                <input type="checkbox" onChange={() => { this.checkUpdate(index) }} />
                                <input className="btn btn-dark" type="button" value={this.state.edit == -1 ? "EDIT" : "UPDATE"} onClick={(e) => { this.state.edit == -1 ? this.HandleUpdate(index) : this.AddInArry(e) }} />
                                <input className="btn btn-warning" onClick={() => { this.DeleteHandle(index) }} type="button" value="Delete" />

                            </li>
                        })}
                    </ul>
                </form>


            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        state,
        stateLove: state.userVerify.length > 0 ? true : false
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userInfo: (val) => dispatch({ type: 'TODO_ITEM', payload: val }),
        todoDelete: (valu) => dispatch({ type: 'TODO_DELETE', payload: valu }),
        editValue: (value) => dispatch({ type: 'EDIT_VALUE', payload: value }),
        checkUpdate: (v) => dispatch({ type: 'CHECK_BOX', payload: v }),
        // pendingDispatch: (pend) => dispatch({ type: 'PEND_ARRAY', payload: pend })



    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
