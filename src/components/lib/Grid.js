const React = require("react");
const classNames = require("classnames");

class Grid extends React.Component {
	render() {
		let styles = classNames({
			"units-row": true,
			"units-padding": this.props.padding,
			"units-split": this.props.disabled,
			"end": this.props.end
		});

		styles += this.props.mobile ? " units-mobile-" + this.props.mobile : "";

		return (
				<div className={classNames(this.props.className, styles)} style={this.props.style}>
					{this.props.children}
				</div>
		);
	}
}

Grid.propTypes = {
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	disabled: React.PropTypes.bool,
	end: React.PropTypes.bool,
	mobile: React.PropTypes.number,
	padding: React.PropTypes.bool,
	style: React.PropTypes.object
};

module.exports = Grid;