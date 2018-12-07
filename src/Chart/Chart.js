import React, { Component } from 'react';
import './Chart.css';

class Chart extends Component {
    comparisonRate(comparison) {
        let height = 1 / (this.props.rates[comparison]) * 100
        return height

    }

    comparisonValues(comparison) {
        let rate = (this.props.rates[comparison])
        return rate
    }




    render() {
        return (
            <div className="Chart">

                <div className="bar" style={{ height: }}>

                </div>
                })
            }
            </div>

        );
    }
}


export default Chart;


