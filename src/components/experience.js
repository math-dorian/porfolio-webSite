import React from 'react';
import { Grid, Cell } from 'react-mdl';

export default class Experience extends React.Component {
    render() {

        const year = this.props.endYear ? (<p>{this.props.startYear} - {this.props.endYear}</p>) : (<p>{this.props.startYear} ({this.props.duree} mois)</p>)

        return(
            <Grid className="resume-experience">
                <Cell col={4}>
                    {year}
                </Cell>
                <Cell col={4}>
                    <h4>{this.props.jobName}</h4>
                    <p>{this.props.jobDescription}</p>
                </Cell>
                <Cell col={4}>
                    <h5>{this.props.city}</h5>
                </Cell>
            </Grid>
        )
    }
}

