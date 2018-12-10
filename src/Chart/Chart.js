import React, { Component } from 'react';
import './Chart.css';

class Chart extends Component {

    // This controls the height of the Bars
    comparisonRate(comparison) {
        let height = 1 / (this.props.rates[comparison]) * 100
        return height

    }

    
    render() {
        return (
            <div className="Chart">
                {
                    this.props.comparisons.map(comparison => {
                        return <div className="bar" style={{ height: this.comparisonRate(comparison) + "%" }}>
                            {this.comparisonValues(comparison) + comparison}
                        </div>
                    })
                }
            </div>

        );
    }
}


export default Chart;


