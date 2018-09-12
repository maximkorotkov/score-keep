import React from 'react';

export default class TitleBar extends React.Component {
    render() {
        return (
            <div className='title-bar'>
                <div className='wrapper'>
                    <h1>{this.props.title}</h1>
                    {this.props.subtitle && <h2 className='title-bar__subtitle'>{this.props.subtitle}</h2>}
                </div>
            </div>
        );
    }
};

TitleBar.propTypes = {
    title: React.PropTypes.string.isRequired,
    subtitle: React.PropTypes.string
};

TitleBar.defaultProps = {
    // title: 'Default Title'
};