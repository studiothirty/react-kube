const React = require("react");
const FormSection = require("./lib/FormSection");
const Grid = require("./lib/Grid");
const Highlight = require("react-highlight");

class GetStarted extends React.Component {

	shiftWindow() {
		window.scrollBy(0, -60); //dirty fix for anchor links problem with fixed header
  }

	componentWillMount() {
		window.addEventListener("hashchange", this.shiftWindow);
	}

	componentDidMount() {
		if (location.hash) { this.shiftWindow(); }
	}

	componentWillUnmount(){
		window.removeEventListener("hashchange", this.shiftWindow);
	}

	render() {
		return (
			<div id="tab1">
				<FormSection name="Get Started">
					<Grid>
						<h4>Version: 0.2.2 (BETA)</h4>
						Found a bug? Please log an issue => <li className="fa fa-github"></li> <a href="https://github.com/raymondmuller/react-kube/issues" target="_new">Github</a>
						<hr/>
							- npm install react-kube <br/>
							- require the desired component to use it<br/><br/>
							for example:
							<Highlight>
								&emsp;&emsp;{"const Alert = require(\"react-kube/Alert\")"}
							</Highlight>
						<hr/>
						Todos: <br/>
						- Add missing components (see <a href="https://github.com/raymondmuller/react-kube/issues" target="_new">Github Issues</a>) <br/>
						- Add Tests <br/>
						- Improve documentation and demos <br/>
						<br/>
					</Grid>
				</FormSection>
			</div>
		);
	}
}

module.exports = GetStarted;
