import React from 'react';

class Pager extends React.Component {

    render() {
        const isFirst = (this.props.current === 1);
        const isLast = (this.props.current === this.props.total);

        return (
            <div className="pager">
                <button
                    type="button"
                    className="pure-button"
                    disabled={isFirst}
                    onClick={this.props.handlePrevious}> Prev </button>

                <span>{this.props.current}</span>
                <span>/</span>
                <span>{this.props.total}</span>

                <button
                    type="button"
                    className="pure-button"
                    disabled={isLast}
                    onClick={this.props.handleNext}> Next </button>
            </div>
        );
    }

}

export default Pager;
