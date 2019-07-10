import React, {Component} from 'react';
import Header from './components/header';
import {FormGroup, Label, Input} from 'reactstrap';


class Current extends Component {

    constructor(props) {
        super(props);

        this.state = {
            resultdata: '',
            chkWebAppLogo: "1", //1=Web, 2=App, 3=Logo
            chkSingleTeam: "1", //1=Single, 2=Team
            chkPortfolio: false,
            chkQuestion: false,
            chkWorkFlow: false,
            chkSimilar: false,
            chkFiverr: false,
            chkHireMe: false,
            suffleUnderstanding: '',
            shuffleRevert: '',
            chkScopeDoc: false,
            chkAscii: false,
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

        let bidDeascription = "";

        if(this.state.chkAscii){
            bidDeascription = "⭐⭐⭐ Hello there! ⭐⭐⭐ <br/><br/> Greetings from Riowebs!";
        }else{
            bidDeascription = "Hello there,<br/>Greetings from Riowebs!";
        }


        const understanding = [
            "<br/><br/>I have read all the requirements and SUMMARIZE further details related to your job.",
            "<br/><br/>I have read all the requirements and I am assured that I can complete your project on time and within your budget.",
            "<br/><br/>I have gone through your project description and I am very much excited to work with you on your project.",
            "<br/><br/>I have entirely understood your requirements and so felt the desire to develop it for you.",
            "<br/><br/>I read through the job details extremely carefully and I am absolutely sure that I can do the project very well.",
            "<br/><br/>I read through the job details extremely carefully and I can achieve the results that you are asking for.",
            "<br/><br/>I have read all the requirements and I am assured that I will build you a website with a modern design that renders properly on all major web browsers.",
            "<br/><br/>I have read all the requirements and SUMMARIZE further details related to your job. I will assure that you`ll get all the expected stuff like a great professional service and a fast turnaround, at a bit less and I get a bit more exposure."
        ];
        const similar = "<br/>I have worked on similar projects to what you are looking for, and I am confident I can exceed your expectations.";
        const workFlow = "<br/>Our approach in your project is to start with following way, \nPROPOSAL → DESIGN → DEVELOPMENT → AUTOMATION TESTING → FIXES/UPDATION → LIVE";
        const question = "<br/>I do have a couple of questions, _____";
        const revert = [
            "<br/><br/>Kindly revert for further communication.",
            "<br/><br/>I look forward to your response.",
            "<br/><br/>If you would be interested in, I`d love to hear from you.",
            "<br/><br/>If you want to collaborate with me lets discuss it in more detail over the chat.",
            "<br/><br/>Send me a quick message so that we can discuss more over the chat.",
            "<br/><br/>Looking forward to your end.",
            "<br/><br/>I will be more than happy to help you. Let me share more details about your project.",
            "<br/><br/>I can start your project immediately and look forward to working with you.",
            "<br/><br/>I look forward to the Opportunity to work with you.",
            "<br/><br/>I look forward to hearing back from you!",
            "<br/><br/>We can talk on a freelancer chat box for a detailed discussion and I can start immediately upon your decision.",
            "<br/><br/>Awaiting for your positive response to discuss in detail and start immediately.",
            "<br/><br/>I will wait for your reply so that we can discuss all the details.",
            "<br/><br/>I look forward to speaking with you about this opportunity.",
            "<br/><br/>Let's get connected via a freelancer chat box for further discussion.",
            "<br/><br/>Eagerly waiting for your response to move forward soon.",
            "<br/><br/>I am ready to discuss more this opportunity in details and we deliver excellent support as well as service to fulfill your expectations.",
            "<br/><br/>Kindly give us an opportunity to work for you at our best."
        ];

        const portfolio = " Please have a look at my Portfolio, <br/> \nhttps://www.freelancer.in/u/Weborchid"; //If you wish I can send you more work on your request.
        const portfolioLink = "<br/>Have a look at my recent work. If you wish I can send you more work on your request. <br/><br/>" +
            "https://www.avancedentalcare.com  <br/>" +
            "https://exam-preparation.com  <br/>" +
            "https://www.vspaces.co <br/>" +
            "http://bosskinds.com <br/>" +
            "https://ayurvedoncall.com <br/>" +
            "https://ibitcoin.herokuapp.com <br/>" +
            "http://www.ibtcfp.com ";
        const thankyou = "<br/><br/>Thank You! Have a great day!";
        const hireMe = "<br/><br/> Hire me: https://www.freelancer.in/u/Weborchid";
        const scopeDocument = '<br/><br/> Once we connect, I will provide you "Scope of Work" document.';

        //START:Title
        let title = "";
        let lookingFor = 'web application';
        if (this.state.chkWebAppLogo === "2") {
            lookingFor = 'mobile application';
        } else if (this.state.chkWebAppLogo === "3") {
            lookingFor = 'logo design';
        }
        if (this.state.chkSingleTeam === "1") { //Single HERE
            title = "<br/> <br/>You’re looking for a " + lookingFor + ", this is exactly what I specialize in. I have " + (this.state.chkWebAppLogo === "3" ? '5+' : '9+') + " years of experience in " + (this.state.chkWebAppLogo === "3" ? 'Graphics & Logo Design.' : 'the IT Sector.');
        } else { //Team HERE
            title = "<br/> <br/>You’re looking for a " + lookingFor + ", this is exactly what I specialize in. I have 9+ years of experience team of " + (this.state.chkWebAppLogo === "3" ? 'highly skilled Designers' : 'Adept Coders\'') + ".";
        }
        bidDeascription += title;
        //END:Title

        //Understanding
        if (this.state.suffleUnderstanding.length >= understanding.length) {
            this.setState({suffleUnderstanding: ''});
        }
        let countUnderstanding = 0;
        for (let i = 0; i < 200; i++) {
            countUnderstanding = Math.floor(Math.random() * understanding.length);
            if (!this.state.suffleUnderstanding.includes(countUnderstanding.toString())) {
                this.setState({suffleUnderstanding: this.state.suffleUnderstanding + countUnderstanding});
                break;
            }
        }
        bidDeascription += understanding[countUnderstanding];


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
        if (this.state.shuffleRevert.length >= revert.length) {
            this.setState({shuffleRevert: ''});
        }
        let countRevert = 0;
        for (let i = 0; i < 200; i++) {
            countRevert = Math.floor(Math.random() * revert.length);
            if (!this.state.shuffleRevert.includes(countRevert.toString())) {
                this.setState({shuffleRevert: this.state.shuffleRevert + countRevert});
                break;
            }
        }
        bidDeascription += revert[countRevert];

        //Portfolio
        if (this.state.chkPortfolio) {
            bidDeascription += portfolioLink;
        } else {
            bidDeascription += portfolio;
        }

        //Scope of document
        if (this.state.chkScopeDoc) {
            bidDeascription += scopeDocument;
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
            bidDeascription = bidDeascription.replace('Freelancer', 'Fiverr')
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
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="radio" name="chkWebAppLogo"
                                                           value="1"
                                                           onChange={this.dataChange.bind(this)}/>{' '} Website
                                                </Label>
                                            </FormGroup>
                                        </div>
                                        <div className="col-md-4">
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="radio" name="chkWebAppLogo"
                                                           value="2"
                                                           onChange={this.dataChange.bind(this)}/>{' '} Apps
                                                </Label>
                                            </FormGroup>
                                        </div>
                                        <div className="col-md-4">
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="radio" name="chkWebAppLogo"
                                                           value="3"
                                                           onChange={this.dataChange.bind(this)}/>{' '} Logo
                                                </Label>
                                            </FormGroup>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-4">
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="radio" name="chkSingleTeam"
                                                           value="1"
                                                           onChange={this.dataChange.bind(this)}/>{' '} Single
                                                </Label>
                                            </FormGroup>
                                        </div>
                                        <div className="col-md-4">
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="radio" name="chkSingleTeam"
                                                           value="2"
                                                           onChange={this.dataChange.bind(this)}/>{' '} Team
                                                </Label>
                                            </FormGroup>
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


                                        <div className="col-md-4">
                                            <div className="custom-control custom-checkbox mr-sm-2">
                                                <input type="checkbox" className="custom-control-input" id="chkWorkFlow"
                                                       name="chkWorkFlow"
                                                       checked={this.state.chkWorkFlow}
                                                       onChange={this.dataChange.bind(this)}
                                                       value={this.state.chkWorkFlow}/>
                                                <label className="custom-control-label"
                                                       htmlFor="chkWorkFlow">Workflow</label>
                                            </div>
                                        </div>

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


                                    </div>




                                    <div className="row">
                                        <div className="col-md-4">
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


                                        <div className="col-md-4">
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

                                        <div className="col-md-4">
                                            <div className="custom-control custom-checkbox mr-sm-2">
                                                <input type="checkbox" className="custom-control-input" id="chkHireMe"
                                                       name="chkHireMe"
                                                       checked={this.state.chkHireMe}
                                                       onChange={this.dataChange.bind(this)}
                                                       value={this.state.chkHireMe}/>
                                                <label className="custom-control-label"
                                                       htmlFor="chkHireMe">Hire!</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="custom-control custom-checkbox mr-sm-2">
                                                <input type="checkbox" className="custom-control-input" id="chkAscii"
                                                       name="chkAscii"
                                                       checked={this.state.chkAscii}
                                                       onChange={this.dataChange.bind(this)}
                                                       value={this.state.chkAscii}/>
                                                <label className="custom-control-label"
                                                       htmlFor="chkAscii">ASCII?</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="custom-control custom-checkbox mr-sm-2">
                                                <input type="checkbox" className="custom-control-input" id="chkScopeDoc"
                                                       name="chkScopeDoc"
                                                       checked={this.state.chkScopeDoc}
                                                       onChange={this.dataChange.bind(this)}
                                                       value={this.state.chkScopeDoc}/>
                                                <label className="custom-control-label"
                                                       htmlFor="chkScopeDoc">Scope Doc.</label>
                                            </div>
                                        </div>
                                    </div>
                                    <p>
                                        <button type="submit" className="btn btn-info my-2">Generate</button>
                                    </p>
                                </div>

                                {/*Result Section*/}
                                <div className="col-md-8 ml-3">
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
        )
    };
}

export default Current;