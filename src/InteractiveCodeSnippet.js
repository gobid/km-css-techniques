import React from 'react';

import './KMContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { generate_highlighted_properties, flex_dependencies, css_strings } from './parser.js';
var css = require('css');

class InteractiveCodeSnippet extends React.Component {
	constructor(props) {
		super(props);
		console.log('PAIR', this.props.pair);
		this.state = {
			stylesheet1:
				this.props.pair === 'reformation'
					? css_strings['masterclass']
					: this.props.pair === 'masterclass'
						? css_strings['slack']
						: this.props.pair === 'slack vs flaticon' ? css_strings['slack'] : '',
			stylesheet2:
				this.props.pair === 'reformation'
					? css_strings['masonry']
					: this.props.pair === 'slack vs dribbble'
						? css_strings['dribbble']
						: this.props.pair === 'slack vs flaticon' ? css_strings['flaticon'] : '',
			value: '',
			sixty_em_value: '60-1fr-1fr-1fr',
			forty_em_value: '40-1fr-1fr',
			twenty_em_value: '20-1fr',
			repeat_value: 'repeat-autofill',
			minmax_value: 'minmax-9',
			trial_val: 'empty',
			styles1: new Array(),
			styles2: new Array(),
			frame1_tier2: {},
			frame2_tier2: {},
			media_width: '48rem'
		};
	}

	componentDidMount = async () => {
		console.log('mounted interactive code snippet with styleshee', this.state.stylesheet1)
		const css_lines1 = await this.createStyleSheetIterative(this.state.stylesheet1, 1);
		this.setState({ styles1: css_lines1 });
		const css_lines2 = await this.createStyleSheetIterative(this.state.stylesheet2, 2);
		this.setState({ styles2: css_lines2 });
		for (var i = 0; i < this.state.styles1.length; i++) {
			var line = this.state.styles1[i];
			if (line[2] === 2 && this.props.stylesheet1_display === 'flex') {
				var prop = line[0] + '-' + i;
				this.setState({ frame1_tier2: { ...this.state.frame1_tier2, [prop]: line[4] } });
			}
		}
		for (var i = 0; i < this.state.styles2.length; i++) {
			var line = this.state.styles2[i];
			if (line[2] === 2 && this.props.stylesheet2_display === 'flex') {
				var prop = line[0] + '-' + i;
				this.setState({ frame2_tier2: { ...this.state.frame2_tier2, [prop]: line[4] } });
			}
		}
	};

	createStyleSheetIterative = async (stylesheet, side) => {
		console.log('showing state');
		console.log(this.state.frame1_tier2);
		var properties = generate_highlighted_properties(
			this.state.stylesheet1,
			this.state.stylesheet2
		);
		var tier1 = properties['tier1'];
		var tier2 = properties['tier2'];
		var additional_properties =
			side == 1 ? properties['additional_properties1'] : properties['additional_properties2'];
		var stylesheetObj = css.parse(stylesheet).stylesheet;
		var acc = '';
		var css_snippet = document.createElement('div');
		var css_lines = new Array();
		stylesheetObj.rules.forEach(function(rule, index) {
			var stack = new Array();
			stack.push([rule, 0]);
			while (stack.length > 0) {
				var elem = stack.pop();
				var node = elem[0];
				if (node.type === 'declaration') {
					console.log(node);
					var tier = tier1.has(node.property) ? 1 : tier2.has(node.property) ? 2 : 0;
					if (tier == 2) {
						css_lines.push([node.property, elem[1], tier, 0, node.value]);
					} else {
						css_lines.push([node.property + ': ' + node.value, elem[1], tier, 0]);
					}
					if (node.property === 'display' && node.value === 'flex') {
						for (var property of additional_properties) {
							tier = tier1.has(property) ? 1 : tier2.has(property) ? 2 : 0;
							if (tier == 2) {
								css_lines.push([
									property,
									elem[1],
									tier,
									0,
									flex_dependencies[property][0]
								]);
							} else {
								css_lines.push([
									property + ': ' + flex_dependencies[property][0],
									elem[1],
									tier,
									0
								]);
							}
						}
					}
				} else if (node.type === 'media' || node.type === 'stylesheet') {
					css_lines.push(['@media min-width:', elem[1], 3, 0]);
					node.rules.forEach(function(rule, index) {
						stack.push([rule, elem[1] + 1]);
					});
				} else if (node.type === 'rule') {
					css_lines.push([node.selectors[0], elem[1], 0, 0]);
					node.declarations.forEach(function(declaration, index) {
						stack.push([declaration, elem[1] + 1]);
					});
				}
			}
		});
		return css_lines;
	};

	updateStyleSheet = frame => event => {
		if (this.props.pair === 'slack vs flaticon') {
			if (frame == 'frame1') {
				var new_link =
					'http://' +
					event.target.id +
					'-' +
					event.target.value +
					'.s3-website.us-east-2.amazonaws.com';
				console.log('new link', new_link);
				// this.setState({ frame1_tier2: {...this.state.frame1_tier2, [event.target.id]: event.target.value}});
				document.getElementById('frame1').src = new_link;
				if (event.target.id === 'flex-wrap-2') {
					this.setState({
						frame1_tier2: {
							...this.state.frame1_tier2,
							[event.target.id]: event.target.value,
							['flex-wrap-9']: 'wrap'
						}
					});
					this.setState({ media_width: '48rem' });
				} else if (event.target.id === 'flex-wrap-9') {
					this.setState({
						frame1_tier2: {
							...this.state.frame1_tier2,
							[event.target.id]: event.target.value,
							['flex-wrap-2']: 'nowrap'
						}
					});
					this.setState({ media_width: '48rem' });
				} else if (event.target.id === 'media-query') {
					this.setState({ media_width: event.target.value });
					this.setState({
						frame1_tier2: {
							...this.state.frame1_tier2,
							['flex-wrap-2']: 'nowrap',
							['flex-wrap-9']: 'wrap'
						}
					});
				}
			} else {
				var new_link =
					'http://flaticon-' +
					event.target.id +
					'-' +
					event.target.value +
					'.s3-website.us-east-2.amazonaws.com';
				console.log('new link', new_link);
				this.setState({
					frame2_tier2: {
						...this.state.frame2_tier2,
						[event.target.id]: event.target.value
					}
				});
				document.getElementById('frame2').src = new_link;
			}
		} else if (this.props.pair === 'blog vs icon') {
			var selection = event.target.value;
			if (selection.startsWith('60')) {
				this.setState({ sixty_em_value: selection });
				this.setState({ forty_em_value: '40-1fr-1fr' });
				this.setState({ twenty_em_value: '20-1fr' });
			} else if (selection.startsWith('40')) {
				this.setState({ forty_em_value: selection });
				this.setState({ sixty_em_value: '60-1fr-1fr-1fr' });
				this.setState({ twenty_em_value: '20-1fr' });
			} else if (selection.startsWith('20')) {
				this.setState({ sixty_em_value: '60-1fr-1fr-1fr' });
				this.setState({ forty_em_value: '40-1fr-1fr' });
				this.setState({ twenty_em_value: selection });
			} else if (selection.startsWith('minmax')) {
				this.setState({ minmax_value: selection });
				this.setState({ repeat_value: 'repeat-autofill' });
			} else if (selection.startsWith('repeat')) {
				this.setState({ repeat_value: selection });
				this.setState({ minmax_value: 'minmax-9' });
			}
			var new_link = 'http://' + selection + '.s3-website.us-east-2.amazonaws.com';
			if (
				selection.startsWith('60') ||
				selection.startsWith('40') ||
				selection.startsWith('20')
			) {
				document.getElementById('frame1').src = new_link;
			} else {
				document.getElementById('frame2').src = new_link;
			}
		}
	};
	render() {
		const { snippet1 } = this.state.styles1;
		if (this.props.exampleNumber === 1) {
			return (
				<div className="code_panel">
					<div>
						<h4 style={{ color: 'white' }}>
							Provided here is CSS for the example above.
						</h4>
						<div id="code_editor" style={{ color: 'white' }}>
							{this.state.styles1.length > 0 ? (
								this.state.styles1.map(
									(line, index) =>
										line[2] === 2 ? (
											<p
												style={{
													marginLeft: (line[1] * 50).toString() + 'px',
													backgroundColor:
														line[2] === 0
															? '#1f2833'
															: line[2] === 1
																? 'blue'
																: line[2] === 2 ? 'green' : 'red'
												}}
											>
												{line[0]} :
												<select
													id={line[0] + '-' + index}
													value={
														this.state.frame1_tier2[
															line[0] + '-' + index
														]
													}
													onChange={this.updateStyleSheet('frame1')}
												>
													{this.props.stylesheet1_display === 'flex' ?(
													flex_dependencies[line[0]].map(val => (
														<option value={val}>{val}</option>
													))): <option value={line[4]}>{line[4]}</option>}
												</select>
											</p>
										) : line[2] === 3 &&
										this.props.stylesheet1_display === 'flex' ? (
											<p
												style={{
													marginLeft: (line[1] * 50).toString() + 'px',
													backgroundColor:
														line[2] === 0
															? '#1f2833'
															: line[2] === 1
																? 'blue'
																: line[2] === 2 ? 'green' : 'red'
												}}
											>
												{line[0]}
												<select
													id="media-query"
													value={this.state.media_width}
													onChange={this.updateStyleSheet('frame1')}
												>
													<option value="48rem">48rem</option>
													<option value="60rem">60rem</option>
													<option value="80rem">80rem</option>
												</select>
											</p>
										) : (
											<p
												style={{
													marginLeft: (line[1] * 50).toString() + 'px',
													backgroundColor:
														line[2] === 0
															? '#1f2833'
															: line[2] === 1
																? 'blue'
																: line[2] === 2 ? 'green' : 'red'
												}}
											>
												{line[0]}
											</p>
										)
								)
							) : null}
						</div>
					</div>
				</div>
			);
		}
		return (
			<div className="code_panel">
				<h4 style={{ color: 'white' }}>
					Provided here is code for the example above. Feel free to tinker with the values
					while resizing the window to understand what the code is doing. Change one
					dropdown at a time.
				</h4>
				<div id="code_editor" style={{ color: 'white' }}>
					{this.state.styles2.length > 0 ? (
						this.state.styles2.map(
							(line, index) =>
								line[2] === 2 ? (
									<p
										style={{
											marginLeft: (line[1] * 50).toString() + 'px',
											backgroundColor:
												line[2] === 0
													? '#1f2833'
													: line[2] === 1
														? 'blue'
														: line[2] === 2 ? 'green' : 'red'
										}}
									>
										{line[0]} :
										<select
											id={line[0] + '-' + index}
											value={this.state.frame2_tier2[line[0] + '-' + index]}
											onChange={this.updateStyleSheet('frame2')}
										>
											{this.props.stylesheet1_display === 'flex' ?(
												flex_dependencies[line[0]].map(val => (
												<option value={val}>{val}</option>
											))): <option value={line[4]}>{line[4]}</option>}
											<option value="none">none</option>
										</select>
									</p>
								) : (
									<p
										style={{
											marginLeft: (line[1] * 50).toString() + 'px',
											backgroundColor:
												line[2] === 0
													? '#1f2833'
													: line[2] === 1
														? 'blue'
														: line[2] === 2 ? 'green' : 'red'
										}}
									>
										{line[0]}
									</p>
								)
						)
					) : null}
				</div>
			</div>
		);
	}
}

export default InteractiveCodeSnippet;
