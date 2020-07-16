import React from 'react';
import { Tab, Tabs } from 'react-mdl';
import ToogleServices from './toogleServices';
import ToogleProjects from './toogleProjects';
import Footer from './footer';

export default class Services extends React.Component {

    state = {
        activeTab: 0,
        titles : {
            sectionOne : 'SERVICES',
            sectionTwo : 'RÉALISATIONS'
        }
    }

    toogleSections() {
        if(this.state.activeTab === 0) {
            return(
                <ToogleServices />
            )
        }
            if(this.state.activeTab === 1) {
                return(
                    <ToogleProjects />
                )
            }
    }

    render() {
        return(

            <div className="sections-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab style={{fontFamily: 'Agency FB', fontSize: '17px', fontWeight: '600', color: 'rgb(54, 68, 95)'}}>{this.state.titles.sectionOne}</Tab>
                    <Tab style={{fontFamily: 'Agency FB', fontSize: '17px', fontWeight: '600', color: 'rgb(54, 68, 95)'}}>{this.state.titles.sectionTwo}</Tab>
                </Tabs>

                    {this.toogleSections()}

                <Footer />

            </div>
        );
    }
}
