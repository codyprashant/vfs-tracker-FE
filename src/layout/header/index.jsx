import React, { Fragment } from 'react';
import { Row } from 'reactstrap';
import LeftHeader from './leftbar';
import RightHeader from './rightbar';


const Header = () => {

    return (
        <Fragment>
            <div className="page-header">
                <Row className="header-wrapper m-0">
                    
                    <LeftHeader />
                    <RightHeader />
                </Row>
            </div>
        </Fragment>
    );
}

export default Header;