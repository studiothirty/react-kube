const React = require("react");
var classNames = require("classnames");

class Button extends React.Component {

	render() {
		let styles = classNames({
			"btn": true,
			"left": this.props.left,
			"right": this.props.right,
			"btn-active": this.props.active,
			"btn-outline": this.props.outline,
			"btn-disabled": this.props.disabled
		});

		styles += this.props.color ? " btn-" + this.props.color : "";
		styles += this.props.width ? " width-" + this.props.width : "";

		let iconStyles = this.props.icon ? "fa fa-" + this.props.icon : "";
		return (
			<button className={classNames(this.props.className, styles)} onClick={this.props.onClick}>
				{this.props.icon ? <li className={iconStyles}></li> : null }
				{this.props.children}
			</button>
		);
	}
}

Button.propTypes = {
	active: React.PropTypes.bool,
	children: React.PropTypes.node,
	className: React.PropTypes.string,
	color: React.PropTypes.string,
	disabled: React.PropTypes.bool,
	icon: React.PropTypes.string,
	left: React.PropTypes.bool,
	onClick: React.PropTypes.func,
	outline: React.PropTypes.bool,
	right: React.PropTypes.bool,
	width: React.PropTypes.bool
};

module.exports = Button;