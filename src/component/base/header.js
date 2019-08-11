/* eslint-disable */

import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import PropTypes from 'prop-types';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`nav-tabpanel-${index}`}
            aria-labelledby={`nav-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
    };
}

function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={event => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}


export default class Header extends React.Component{

    handleCallToRouter = (value) => {
        this.props.history.push(value);
    }

    render(){
        function checkPathnameValue() {
            const { pathname } = window.location;
            switch (pathname) {
                case '/test2':
                case '/test3':
                    break;
                default:
                    return false;
            }
            return pathname;
        }
        return (

            <Paper>
                <Tabs
                    value={checkPathnameValue()}
                    onChange={this.handleCallToRouter}

                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >

                    <LinkTab  //key={label}
                         label="Home"
                         //className={classes.tabLink}
                         //component={Link}
                         href="/"
                         index={0}
                         value={0}
                    />

                    <LinkTab  //key={label}
                        label="Canvas"
                        //className={classes.tabLink}
                        //component={Link}
                        href="/canvas"
                        index={1}
                        value={1}
                    />

                    <LinkTab  //key={label}
                        label="About"
                        //className={classes.tabLink}
                        //component={Link}
                        href="/about"
                        index={3}
                        value={3}
                    />

                </Tabs>
            </Paper>
        );
    }
}