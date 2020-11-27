import { MDBBtn, MDBInput, MDBIcon } from 'mdbreact'
import React, { Fragment } from 'react'
import { connect } from 'react-redux'


export class SearchTask extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            task: true,
            pending: '',
            complt: '',
            allTask:''
        }
    }

    taskToggle2 = () => {
        this.setState({ allTask: this.state.task, complt:false,pending:false })
    }


    taskToggle = () => {

        this.setState({ pending: this.state.task,allTask:false, complt:false })
    }


    taskToggle1 = () => {
        this.setState({ complt: this.state.task, allTask:false,pending:false })
    }

   




    render() {


        var curDate = new Date().toISOString().slice(0, 10);
        return (
            <div>
                Search Item
                {this.state.task && <MDBBtn onClick={this.taskToggle2} >All Task</MDBBtn>}

                { this.state.task && <MDBBtn onClick={this.taskToggle}>Pending Task</MDBBtn>}
                {this.state.task && <MDBBtn onClick={this.taskToggle1}>Completed Task</MDBBtn>}
                
                <ol>
                    {this.state.allTask ? this.props.state.userDetails.map((item, index) => {
                        console.log(item, "hello")
                        return <li key={index}>
                            <h3> {item.name}</h3>
                            <p>{item.date}</p>
                            <p>{item.discr}</p>
                            <p><strong>{curDate > item.date ? 'Due Date is Passed' : ''} </strong></p>
                        </li>
                    }): null}
                </ol> 
                <ol>
                    {this.state.pending ? this.props.state.userDetails.filter(item => item.checked == false).map((item, index) => {
                        return <li key={index}>
                            <h3> {item.name}</h3>
                            <p>{item.date}</p>
                            <p>{item.discr}</p>
                            <p><strong>{curDate > item.date ? 'Due Date is Passed' : ''} </strong></p>
                        </li>

                    }):null}
                </ol>

                <ol>
                    {this.state.complt ? this.props.state.userDetails.filter(item => item.checked == true).map((item, index) => {
                        return <li key={index}>
                            <h3> {item.name}</h3>
                            <p>{item.date}</p>
                            <p>{item.discr}</p>
                            <p><strong>{curDate > item.date ? 'Due Date is Passed' : ''} </strong></p>
                        </li>

                    }):null}
                </ol>

            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

export default connect(mapStateToProps)(SearchTask)
