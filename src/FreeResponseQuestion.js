import React from 'react';

import './KMContainer.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class FreeResponseQuestion extends React.Component {
	constructor(props) {
		super(props); 
		this.state = {
			questionId: this.props.questionId, 
			question: this.props.question,
			value: "",
		}
	}
	
	componentWillReceiveProps(nextProps) {
	  if(nextProps.questionId !== this.state.questionId) {
		this.setState({ 
			questionId: nextProps.questionId, 
			question: nextProps.question,
			value: "",
	  	});   
	  } 
	}
	
	renderUserResponse = () => {
		if(this.props.userResponse) {
			return (
				<p>
					For reference, this was your previous response: {this.props.userResponse}
				</p>
			);
		}
	}
	
	updateTextArea = async (event) => {
		event.preventDefault();
		await this.setState({
			value: event.target.value,
		});
	} 
	
	handleSubmit = async (event) => {
		event.preventDefault();
		const userInput = this.state.value; 
		const questionId = this.state.questionId; 
		await this.setState({
			questionId: this.props.questionId, 
			question: this.props.question,
			value: "",
		});
		this.props.handleSubmit(event, questionId, userInput);
	}

	render() {
		return (
			<div className = "form_container">
				<form onSubmit = {this.handleSubmit} id="visual_outcomes">
					<p>{this.props.question}</p>
					{this.renderUserResponse}
					<textarea value = {this.state.value} style={{marginBottom: "10px"}} cols="50" rows="10" onChange = {this.updateTextArea}></textarea>
					<Button type="submit" variant="primary" size="lg"> Submit Answer! </Button>
				</form> 
			</div>
		);
	}
}


export default FreeResponseQuestion;