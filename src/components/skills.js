import React from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

export default class Skills extends React.Component {
    render() {
        return(
            <Grid>
                <Cell col={12}>
                    <div className="resume-skills-container">
                        {this.props.skill}
                        <ProgressBar style={{margin: 'auto', width: '75%'}} progress={this.props.progress}/>{this.props.progress}%
                    </div>
                </Cell>
            </Grid>
        )
    }
}
