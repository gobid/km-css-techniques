import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import React from 'react';
import Iframe from 'react-iframe';
import articlesvmasterclass from './css_snippet_images/articlesvmasterclass.png';
import masterclassvref from './css_snippet_images/masterclassvref.png';
import refvicons from './css_snippet_images/refvicons.png';
import './KMContainer.css';


class KMContainer extends React.Component {
	constructor(props) {
		super(props);
		this._minWindowSize = 300;
		this._maxWindowSize = 3000;
		this.state = {
			userNameSubmitted: false,
			userName: '',
			userId: null,
			pair: "reformation v. icons",
			stylesheet1_display: 'masterclass',
			stylesheet2_display: 'masterclass',
			pairChoiceSubmitted: false,
			exampleWindowSize: this._minWindowSize,
			currentQuestionIndex: 0,
			userResponses: [],
			questions: [
				{ prompt: 'Initial Placeholder', position: 0, example_id: 0 },
				{ prompt: 'Initial Placeholder', position: 0, example_id: 1 }
			]
		};
	}

	componentDidMount = async () => {
		const questions = await this.getQuestionsFromDb();
		const questionsArr = [];
		Object.keys(questions.data).forEach(key => {
			questionsArr.push(questions.data[key]);
		});
		await this.setState({
			questions: questionsArr
		});
	};

	getQuestionsFromDb = async () => {
		let questions = null;
		await fetch('https://km-localserver-new.run-us-west2.goorm.io/questions')
			.then(response => response.json())
			.then(outcome => {
				questions = outcome;
			});
		return questions;
	};

	updateWindowSize = async newWindowSize => {
		await this.setState({
			exampleWindowSize: newWindowSize
		});
		document.getElementById('frame1').style.width = newWindowSize + 'px';
		document.getElementById('frame2').style.width = newWindowSize + 'px';
	};

	showNextQuestion = async () => {
		if (this.state.currentQuestionIndex === 3) {
			await this.setState((prevState, props) => {
				return {
					exampleWindowSize: prevState.newWindowSize,
					currentQuestionIndex: prevState.currentQuestionIndex,
					questions: prevState.questions,
					userResponse: prevState.userResponses.push(
						'No response necessary for interactive code prompt.'
					)
				};
			});
		}
		await this.setState((prevState, props) => {
			return {
				exampleWindowSize: prevState.newWindowSize,
				currentQuestionIndex: prevState.currentQuestionIndex + 1,
				questions: prevState.questions,
				userResponses: prevState.userResponses
			};
		});
	};

	handleQuestionSubmission = async (event, questionId, userResponse) => {
		event.preventDefault();
		axios.post('https://km-localserver-new.run-us-west2.goorm.io/responses', {
			user_id: this.state.userId,
			question_id: questionId,
			body: userResponse
		});
		console.log('qst index: ');
		console.log(this.state.currentQuestionIndex);
	};

	_findQuestionObjectGivenIndex = (currentQuestionIndex, exampleId) => {
		let questionObject = null;
		this.state.questions.forEach(question => {
			if (
				question.position === currentQuestionIndex &&
				(question.example_id === exampleId || question.example_id === -1)
			) {
				questionObject = question;
			}
		});
		return questionObject;
	};

	_updateUserName = async event => {
		event.preventDefault();
		await this.setState({
			userName: event.target.value
		});
	};

	_handleUserNameSubmit = async event => {
		event.preventDefault();
		let id = await axios
			.post('https://km-localserver-new.run-us-west2.goorm.io/users', {
				username: this.state.userName
			})
			.then(res => res.data.data);
		await this.setState({
			userId: id,
			userNameSubmitted: true
		});
	};

_handlePairChoiceChange = async event =>{
	this.setState({ pair: event.target.value });
	this.setState({ pairChoiceSubmitted: true });
	if (event.target.value === "articles v. masterclass"){
		this.setState({ stylesheet1_display: "flex" });
		this.setState({ stylesheet2_display: "flex" });
	}
	else if (event.target.value === "reformation v. icons"){
		this.setState({ stylesheet1_display: "grid" });
		this.setState({ stylesheet2_display: "grid" });
	}
	else if (event.target.value === "masterclass v. reformation"){
		this.setState({ stylesheet1_display: "masterclass" });
		this.setState({ stylesheet2_display: "masterclass" });
	}
};
	render() {
		return (
			<div>
				<div className="input_container col_centered">
					<h1 style={{ textAlign: 'center', color: 'white' }}>
						Knowledge Maps Interactive Tool
					</h1>
					<div style={{ display: 'flex' }}>
					{!this.state.userNameSubmitted ? (
						<div style={{ textAlign: 'center' }}>
						</div>
					) : null}
						<div style={{ textAlign: 'center', color:'white', marginTop:'50px', marginLeft: '80px' }}>
								<p>Select the site you want to explore below:</p>
								<select value={this.state.pair}
										onChange={this._handlePairChoiceChange}>
									<option value="reformation v. icons">1. reformation v. icons</option>
									<option value="masterclass v. reformation">2. masterclass v. reformation </option>
									<option value="articles v. masterclass">3. articles v. masterclass</option>
									<option value="reformation v. icons 2">4. reformation v. icons</option>
									<option value="masterclass v. reformation 2">5. masterclass v. reformation</option>



								</select>
						</div>
					</div>
					<div className="slider_container">
						<h2 style={{ color: 'white' }}>Window Size Controller</h2>
						<div className="range-slider">
							<Slider
								min={this._minWindowSize}
								max={this._maxWindowSize}
								onChange={this.updateWindowSize}
							/>
						</div>
					</div>
				</div>
				<div>
					<div className="interactive_values_menu">
						<p>
							The page width is currently: {this.state.exampleWindowSize} pixels<br />
						</p>
					</div>
				</div>
					{this.state.pair === "reformation v. icons" ?(
						<div className="iframeContainer">
					<Iframe
						url="http://reformation-example.s3-website.us-east-2.amazonaws.com"
						width={this.minWindowSize + 'px'}
						height="800px"
						id="frame1" 
					/>
					
						<Iframe
							allowtransparency="true"
						url="http://base-icon-example.s3-website.us-east-2.amazonaws.com"
						width={this.minWindowSize + 'px'}
						height="800px"
						id="frame2"
					/>
					</div>): this.state.pair === "masterclass v. reformation" ?(
					<div className="iframeContainer">
						<Iframe
							allowtransparency="true"
						url="http://grid-masterclass-original.s3-website.us-east-2.amazonaws.com"
						width={this.minWindowSize + 'px'}
						height="800px"
						id="frame1"
					/>
					<Iframe
						url="http://reformation-example.s3-website.us-east-2.amazonaws.com"
						width={this.minWindowSize + 'px'}
						height="800px"
						id="frame2" 
					/>
					</div>): this.state.pair === "masterclass v. reformation 2" ?(
					<div className="iframeContainer">
						<Iframe
							allowtransparency="true"
						url="http://grid-masterclass-original.s3-website.us-east-2.amazonaws.com"
						width={this.minWindowSize + 'px'}
						height="800px"
						id="frame1"
					/>
						<Iframe
							allowtransparency="true"
						url="http://reformation-example.s3-website.us-east-2.amazonaws.com"
						width={this.minWindowSize + 'px'}
						height="800px"
						id="frame2"
					/>
					</div>):this.state.pair === "articles v. masterclass" ?(
					<div className="iframeContainer">
						<Iframe
							allowtransparency="true"
						url="http://julian-articles-base.s3-website.us-east-2.amazonaws.com/"
						width={this.minWindowSize + 'px'}
						height="800px"
						id="frame1"
					/>
						<Iframe
							allowtransparency="true"
						url="http://grid-masterclass-original.s3-website.us-east-2.amazonaws.com"
						width={this.minWindowSize + 'px'}
						height="800px"
						id="frame2"
					/>
					</div>): this.state.pair === "reformation v. icons 2" ?(
						<div className="iframeContainer">
					<Iframe
						url="http://reformation-example.s3-website.us-east-2.amazonaws.com"
						width={this.minWindowSize + 'px'}
						height="800px"
						id="frame1" 
					/>
					
						<Iframe
							allowtransparency="true"
						url="http://base-icon-example.s3-website.us-east-2.amazonaws.com"
						width={this.minWindowSize + 'px'}
						height="800px"
						id="frame2"
					/>
					</div>):
				
				null}
				<div className="wrapper">
					<div className="containers">
						<div className="code_container">
							<h4 style={{ color: 'white', display: 'block'}}>
							Provided here is CSS for the example above.
							</h4>
							<br/>
							m{
								//1
								this.state.pair === "reformation v. icons" ?(
								<img src={refvicons} alt="reformation_v_icons" />
							): //2
								this.state.pair === "masterclass v. reformation" ?(
							<img src={masterclassvref} alt="masterclass_v_reformation" />): 
								//3
							this.state.pair === "articles v. masterclass" ?(
								<img src={articlesvmasterclass} alt="articles_v_masterclass" />):
								//4
							this.state.pair === "reformation v. icons 2" ?(
								<img src={refvicons} alt="reformation_v_icons" />):
								//5
								this.state.pair === "masterclass v. reformation 2" ?(
								<img src={masterclassvref} alt="masterclass_v_reformation" />):
							null}
						</div>

					</div>
				</div>
			</div>
		);
	}
}

export default KMContainer;
