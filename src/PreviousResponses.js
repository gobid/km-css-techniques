import React from 'react';

import './KMContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class PreviousResponses extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userId: this.props.userId,
			intervalIsSet: false,
			responses: []
		};
	}

	componentDidMount() {
		this.getPreviousResponsesFromDb();
		if (!this.state.intervalIsSet) {
			let interval = setInterval(this.getPreviousResponsesFromDb, 1000);
			this.setState({ intervalIsSet: interval });
		}
	}

	componentWillUnmount() {
		if (this.state.intervalIsSet) {
			clearInterval(this.state.intervalIsSet);
			this.setState({ intervalIsSet: null });
		}
	}

	getPreviousResponsesFromDb = () => {
		if(this.state.userId != null){
		fetch('https://km-localserver-new.run-us-west2.goorm.io/responses/'+this.state.userId)
			.then(data => data.json())
			.then(res => this.setState({ responses: res.data }));
		}
	};

	render() {
		const { responses } = this.state;
		return (
			<div id="collapseResponses" style={{ color: 'white' }}>
				{responses.length <= 0 ? (
					'NO DB ENTRIES YET'
				) : (
					responses.map(dat => (
						<div className="previous_response">
							<div
								style={{
									padding: '10px',
									color: '#313131'
								}}
							>
								<h6>{dat.question.prompt}</h6>
							</div>
							<br />
							<div style={{ padding: '10px', color: 'gray' }}>
								<p>{dat.body}</p>
							</div>{' '}
							<br />
						</div>
					))
				)}
			</div>
		);
	}
}

export default PreviousResponses;