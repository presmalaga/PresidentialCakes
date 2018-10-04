import React, { Component } from "react";
import Navbar from './navbar';
import Footer from './footer';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: "",
            emailAddress: "",
            phoneNumber: "",
            description: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    handleSubmit(event) {
        alert('A form was submitted, we will get back to you shortly about your request!');
    }
    render() {
        return (


            <div className="Form">
                <Navbar />
                <div className="container">

                    <form className="form" onSubmit={this.handleSubmit}>
                        <label className="fullName">Name</label>
                        <div className="control">
                            <input
                                className="input"
                                placeholder="John Doe"
                                type="text"
                                name="fullname"
                                value={this.state.fullname}
                                onChange={this.handleChange}
                            />
                        </div>
                        <label className="email">Email</label>
                        <div className="control">
                            <input
                                className="input"
                                placeholder="Johndoe@gmail.com"
                                type="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </div>
                        <label className="phoneNumber">Phone Number</label>
                        <div className="control">
                            <input
                                className="input"
                                placeholder="801-***-****"
                                type="number"
                                name="phoneNumber"
                                value={this.state.phoneNumber}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="description">
                            <label className="description">Please let us know what you would like your cake to look like: </label>
                            <div className="control">
                                <textarea
                                    className="description"
                                    placeholder="Blue Birthday Cake"
                                    name="descriptionMessage"
                                    value={this.state.descriptionMessage}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <button onClick={this.showSummary}>
                            Submit
              </button>


                    </form>
                </div>
                <div className="summary">
                    <p>Full Name: {this.state.fullname}</p>
                    <p>Email Address: {this.state.email}</p>
                    <p>Phone Number: {this.state.phoneNumber}</p>
                    <p>Description  of Cake: {this.state.descriptionMessage}</p>

                </div>

                <Footer />

            </div>
        );
    }
}
export default Form;
