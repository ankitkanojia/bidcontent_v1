import React, { Component } from 'react';
import Header from './components/header';

class Elderly extends Component {
    constructor(props) {
        super(props);

        this.state = {
            resultdata: '',
            chkSuchit: true,
            chkPortfolio: false,
            chkQuestion: false,
            chkWorkFlow: false,
            chkSimilar: false,
            chkFiverr: false,
            chkHireMe: false
        };
    }


    dataChange(ev) {
        if (ev.target.getAttribute('type') === 'checkbox') {
            this.setState({[ev.target.name]: ev.target.checked});
        } else {
            this.setState({[ev.target.name]: ev.target.value});
        }
    }

    postData(ev) {
        //Form post HERE
        ev.preventDefault();

        //Generate Description as per content
        const freelancerSuchit = "Hi there,<br/>Greetings from Riowebs! My self Suchit and we are the team of adept coders and highly skilled designers with 9+ years of experience in IT sector.";
        const freelancerAnkit = "Hi there,<br/>Greetings from Riowebs! My self Ankit and we are the team of adept coders and highly skilled designers with 9+ years of experience in IT sector.";
        const otherSuchit = "Hi there,<br/>Greetings from Riowebs! My self Suchit and we are the team of adept coders and highly skilled designers with 9+ years of experience in IT sector.";
        const otherAnkit = "Hi there,<br/>Greetings from Riowebs! My self Ankit and we are the team of adept coders and highly skilled designers with 9+ years of experience in IT sector.";
        const understanding = [
            "<br/><br/>I have read the all the requirements and SUMMARIZE the further details related to your job.",
            "<br/><br/>I have read the all the requirements and I am assured that I can complete your project on time and within your budget.",
            "<br/><br/>I have gone through your project description and I am very much excited to work with you on your project.",
            "<br/><br/>I have entirely understood your requirements and so felt the desire to develop it for you.",
            "<br/><br/>I read through the job details extremely carefully and I am absolutely sure that I can do the project very well.",
            "<br/><br/>I read through the job details extremely carefully and I can achieve the results that you are asking for.",
            "<br/><br/>I have read the all the requirements and I am assured that I will build you a website with modern design that renders properly on all major web browsers.",
            "<br/><br/>I have read the all the requirements and SUMMARIZE the further details related to your job. I will assure that you`ll get all the expected stuff like a great professional service and a fast turnaround, at a bit less and I get a bit more exposure."
        ];
        const similar = "<br/>I have worked on similar projects to what you are looking for, and I am confident I can exceed your expectations.";
        const workFlow = "<br/>Our approach in your project is to start with following way, \nPROPOSAL → DESIGN → DEVELOPMENT → AUTOMATION TESTING → FIXES/UPDATION → LIVE";
        const question = "<br/>I do have a couple of questions, _____";
        const revert = [
            "<br/><br/>Kindly revert for further communication.",
            "<br/><br/>I look forward to your response.",
            "<br/><br/>If you would be interested in, I`d love to hear from you.",
            "<br/><br/>If you want to collaborate with me lets discuss it in more details over the chat.",
            "<br/><br/>Send me a quick message so that we can discuss more over the chat.",
            "<br/><br/>Looking forward from your end.",
            "<br/><br/>I will be more than happy to help you. Let me share more details about your project.",
            "<br/><br/>I can start your project immediately and look forward to working with you.",
            "<br/><br/>I look forward to the Opportunity to work with you.",
            "<br/><br/>I look forward to hearing back from you!",
            "<br/><br/>We can talk on freelancer chat box for a detailed discussion and I can start immediately upon your decision.",
            "<br/><br/>Awaiting for your positive response to discuss in details and start immediately.",
            "<br/><br/>I will wait for your reply so that we can discuss all details.",
            "<br/><br/>I look forward to speaking with you about this opportunity.",
            "<br/><br/>Let's get connect via freelancer chat box for further discussion.",
            "<br/><br/>Eagerly waiting for your response to move forward soon.",
            "<br/><br/>I am ready to discuss more about this opportunity in details and we deliver excellent support as well as service to fulfill your expectation.",
            "<br/><br/>Kindly give us an opportunity to work for you at our best."
        ];

        const portfolio = "<br/>If you'd like to view my previous work please refer to my Freelancer Portfolio. \nhttps://www.freelancer.in/u/Weborchid"; //If you wish I can send you more work on your request.
        const portfolioLink = "<br/>Have a look to my recent work. If you wish I can send you more work on your request. <br/><br/>" +
            "https://ayurvedoncall.com <br/>" +
            "http://www.ibtcfp.com <br/>" +
            "https://www.avancedentalcare.com <br/>" +
            "https://www.vspaces.co <br/>" +
            "https://riowebs-ibitcoin.herokuapp.com";
        const thankyou = "<br/><br/>Hoping for a long-term relationship together. <br/>Thanks You!";
        const hireMe = "<br/><br/> Hire me: https://www.freelancer.in/u/Weborchid";

        //Introduction
        let bidDeascription = this.state.chkSuchit ? freelancerSuchit : freelancerAnkit;
        if (this.state.chkFiverr) {
            bidDeascription = this.state.chkSuchit ? otherSuchit : otherAnkit;
        }

        //Understanding
        bidDeascription += understanding[Math.floor(Math.random() * understanding.length)];

        //Similar Project
        if (this.state.chkSimilar) {
            bidDeascription += similar;
        }


        //Work Flow
        if (this.state.chkWorkFlow) {
            bidDeascription += workFlow;
        }

        //Questions in mind
        if (this.state.chkQuestion) {
            bidDeascription += question;
        }

        //Revert
        bidDeascription += revert[Math.floor(Math.random() * revert.length)];

        //Portfolio
        if (this.state.chkPortfolio) {
            bidDeascription += portfolioLink;
        } else {
            bidDeascription += portfolio;
        }


        //Tank You
        bidDeascription += thankyou;

        //Hire me
        if (this.state.chkHireMe) {
            bidDeascription += hireMe;
        }


        if (this.state.chkFiverr) {
            //Replace Profile URL
            bidDeascription = bidDeascription.replace('https://www.freelancer.in/u/Weborchid', 'https://www.fiverr.com/riowebs');
            //Replace Word
            bidDeascription = bidDeascription.replace('freelancer', 'fiverr')
        }

        this.setState({resultdata: bidDeascription});
    }

    render() {
        return (
            <React.Fragment>
                <Header/>

                <main role="main">
                    <section className="jumbotron">
                        <form onSubmit={this.postData.bind(this)}>
                            <div className="row">

                                {/*Selection Bar Section*/}
                                <div className="col-md-3" id="selectOption">
                                    <h1 className="jumbotron-heading">Select Option</h1>
                                    <div className="hrBottom"></div>

                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="custom-control custom-checkbox mr-sm-2">
                                                <input type="checkbox" className="custom-control-input" id="chkSuchit"
                                                       name="chkSuchit"
                                                       checked={this.state.chkSuchit}
                                                       onChange={this.dataChange.bind(this)}
                                                       value={this.state.chkSuchit}/>
                                                <label className="custom-control-label"
                                                       htmlFor="chkSuchit">Suchit</label>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="custom-control custom-checkbox mr-sm-2">
                                                <input type="checkbox" className="custom-control-input"
                                                       id="chkPortfolio"
                                                       name="chkPortfolio"
                                                       checked={this.state.chkPortfolio}
                                                       onChange={this.dataChange.bind(this)}
                                                       value={this.state.chkPortfolio}/>
                                                <label className="custom-control-label"
                                                       htmlFor="chkPortfolio">Portfolio</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="custom-control custom-checkbox mr-sm-2">
                                                <input type="checkbox" className="custom-control-input" id="chkQuestion"
                                                       name="chkQuestion"
                                                       checked={this.state.chkQuestion}
                                                       onChange={this.dataChange.bind(this)}
                                                       value={this.state.chkQuestion}/>
                                                <label className="custom-control-label"
                                                       htmlFor="chkQuestion">Question</label>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="custom-control custom-checkbox mr-sm-2">
                                                <input type="checkbox" className="custom-control-input" id="chkWorkFlow"
                                                       name="chkWorkFlow"
                                                       checked={this.state.chkWorkFlow}
                                                       onChange={this.dataChange.bind(this)}
                                                       value={this.state.chkWorkFlow}/>
                                                <label className="custom-control-label" htmlFor="chkWorkFlow">Work
                                                    Flow</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="custom-control custom-checkbox mr-sm-2">
                                                <input type="checkbox" className="custom-control-input" id="chkSimilar"
                                                       name="chkSimilar"
                                                       checked={this.state.chkSimilar}
                                                       onChange={this.dataChange.bind(this)}
                                                       value={this.state.chkSimilar}/>
                                                <label className="custom-control-label"
                                                       htmlFor="chkSimilar">Similar</label>
                                            </div>

                                        </div>
                                        <div className="col-md-8">
                                            <div className="custom-control custom-checkbox mr-sm-2">
                                                <input type="checkbox" className="custom-control-input" id="chkFiverr"
                                                       name="chkFiverr"
                                                       checked={this.state.chkFiverr}
                                                       onChange={this.dataChange.bind(this)}
                                                       value={this.state.chkFiverr}/>
                                                <label className="custom-control-label"
                                                       htmlFor="chkFiverr">Fiverr</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="custom-control custom-checkbox mr-sm-2">
                                                <input type="checkbox" className="custom-control-input" id="chkHireMe"
                                                       name="chkHireMe"
                                                       checked={this.state.chkHireMe}
                                                       onChange={this.dataChange.bind(this)}
                                                       value={this.state.chkHireMe}/>
                                                <label className="custom-control-label" htmlFor="chkHireMe">Hire
                                                    me</label>
                                            </div>
                                        </div>
                                    </div>

                                    <p>
                                        <button type="submit" className="btn btn-info my-2">Generate</button>
                                    </p>
                                </div>

                                {/*Result Section*/}
                                <div className="col-md-9">
                                    <h1 className="jumbotron-heading">Result</h1>
                                    <div className="hrBottom"></div>
                                    <p className="">
                                        <div dangerouslySetInnerHTML={{__html: this.state.resultdata}}></div>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </section>
                </main>
            </React.Fragment>
        );
    }
}

export default Elderly;