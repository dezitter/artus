import React from 'react';

class Pager extends React.Component {

    render() {
        const isFirst = (this.props.current === 1);
        const isLast = (this.props.current === this.props.total);

        return (
            <div>
                <button
                    type="button"
                    disabled={isFirst}
                    onClick={this.props.handlePrevious}> Prev </button>

                <span>{this.props.current}</span>
                <span>/</span>
                <span>{this.props.total}</span>

                <button
                    type="button"
                    disabled={isLast}
                    onClick={this.props.handleNext}> Next </button>
            </div>
        );
    }

}

export default Pager;
