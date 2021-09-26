import React from 'react';

import axios from 'axios';
import './KMContainer.css';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import Iframe from 'react-iframe';
import FreeResponseQuestion from './FreeResponseQuestion';
import InteractiveCodeSnippet from './InteractiveCodeSnippet';
import PreviousResponses from './PreviousResponses';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import ref_code from './css_snippet_images/ref_code.png';
import masterclass_code from './css_snippet_images/masterclass_code.png';
import icons_code from './css_snippet_images/icons_code.png';
import refvicons from './css_snippet_images/refvicons.png';
import masterclassvref from './css_snippet_images/masterclassvref.png';
import articlesvmasterclass from './css_snippet_images/articlesvmasterclass.png';

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
						// masterclass
						<Iframe
							allowtransparency="true"
						url="http://grid-masterclass-original.s3-website.us-east-2.amazonaws.com"
						width={this.minWindowSize + 'px'}
						height="800px"
						id="frame1"
					/>
						// ref
						<Iframe
							allowtransparency="true"
						url="http://reformation-example.s3-website.us-east-2.amazonaws.com"
						width={this.minWindowSize + 'px'}
						height="800px"
						id="frame2"
					/>
					</div>):this.state.pair === "articles v. masterclass" ?(
					<div className="iframeContainer">
						// articles
						<Iframe
							allowtransparency="true"
						url="http://julian-articles-base.s3-website.us-east-2.amazonaws.com/"
						width={this.minWindowSize + 'px'}
						height="800px"
						id="frame1"
					/>
						// masterclass
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
						{this.state.currentQuestionIndex === 3 ||
						this.state.currentQuestionIndex === 4 ||
						this.state.currentQuestionIndex === 5 ||
						this.state.currentQuestionIndex === 6 ||
						this.state.currentQuestionIndex === 7 ? (
							// <div className="helpful_questions">
							// 	<h5 style={{ marginBottom: '50px' }}>
							// 		Unsure about specific code snippets? Check out some
							// 		documentation here:{' '}
							// 	</h5>
							// 	<table style={{ width: '100%' }}>
							// 		<tr>
							// 			<th style={{ width: '50%' }}>Question</th>
							// 			<th style={{ width: '50%' }}>Resource</th>
							// 		</tr>
							// 		<tr>
							// 			<td>How does grid-template-columns work?</td>
							// 			<td>
							// 				<a
							// 					href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns"
							// 					target="_blank"
							// 				>
							// 					grid-template-columns
							// 				</a>
							// 			</td>
							// 		</tr>
							// 		<tr>
							// 			<td>How does CSS repeat() work? </td>
							// 			<td>
							// 				<a
							// 					href="https://developer.mozilla.org/en-US/docs/Web/CSS/repeat"
							// 					target="_blank"
							// 				>
							// 					repeat
							// 				</a>
							// 			</td>
							// 		</tr>
							// 		<tr>
							// 			<td>What is a unit fr?</td>
							// 			<td>
							// 				<a
							// 					href="https://alligator.io/css/css-grid-layout-fr-unit/"
							// 					target="_blank"
							// 				>
							// 					fr
							// 				</a>
							// 			</td>
							// 		</tr>
							// 		<tr>
							// 			<td>How does minmax() work? </td>
							// 			<td>
							// 				<a
							// 					href="https://developer.mozilla.org/en-US/docs/Web/CSS/minmax"
							// 					target="_blank"
							// 				>
							// 					minmax()
							// 				</a>
							// 			</td>
							// 		</tr>
							// 		<tr>
							// 			<td>How does CSS position work? </td>
							// 			<td>
							// 				<a
							// 					href="https://medium.freecodecamp.org/how-to-use-the-position-property-in-css-to-align-elements-d8f49c403a26"
							// 					target="_blank"
							// 				>
							// 					position
							// 				</a>
							// 			</td>
							// 		</tr>
							// 		<tr>
							// 			<td>What does @media do? </td>
							// 			<td>
							// 				<a
							// 					href="https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries"
							// 					target="_blank"
							// 				>
							// 					@media
							// 				</a>
							// 			</td>
							// 		</tr>
							// 		<tr>
							// 			<td>What does rem mean?</td>
							// 			<td>
							// 				<a
							// 					href="https://medium.com/code-better/css-units-for-font-size-px-em-rem-79f7e592bb97"
							// 					target="_blank"
							// 				>
							// 					rem
							// 				</a>
							// 			</td>
							// 		</tr>
							// 		<tr>
							// 			<td>What does flex property do?</td>
							// 			<td>
							// 				<a
							// 					href="https://www.w3schools.com/cssref/css3_pr_flex.asp"
							// 					target="_blank"
							// 				>
							// 					flex
							// 				</a>
							// 			</td>
							// 		</tr>
							// 		<tr>
							// 			<td>What does justify-content do?</td>
							// 			<td>
							// 				<a
							// 					href="https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content"
							// 					target="_blank"
							// 				>
							// 					justify-content
							// 				</a>
							// 			</td>
							// 		</tr>
							// 		<tr>
							// 			<td>What does autofill do?</td>
							// 			<td>
							// 				<a
							// 					href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout"
							// 					target="_blank"
							// 				>
							// 					autofill
							// 				</a>
							// 			</td>
							// 		</tr>
							// 		<tr>
							// 			<td>What does min-content do?</td>
							// 			<td>
							// 				<a
							// 					href="https://developer.mozilla.org/en-US/docs/Web/CSS/width"
							// 					target="_blank"
							// 				>
							// 					min-content
							// 				</a>
							// 			</td>
							// 		</tr>
							// 	</table>
							// </div>
							<div>
							</div>
						) : null}
					</div>
				</div>
			</div>
		);
	}
}

export default KMContainer;
