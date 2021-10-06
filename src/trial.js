					{!this.state.pairChoiceSubmitted ? (
						<div style={{ textAlign: 'center', color:'white', marginTop:'50px', marginLeft: '80px' }}>
								<p>Select type of layout comparison below:</p>
								<select value={this.state.pair}
										onChange={this._handlePairChoiceChange}>
									<option value="blog vs icon">Blog website vs Icon website</option>
									<option value="slack vs dribbble">Slack website vs Dribbble website</option>
									<option value="slack vs flaticon">Slack website vs Flaticon website</option>
								</select>
						</div>
					) : null}