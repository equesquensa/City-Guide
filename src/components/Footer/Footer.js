import React from 'react';
import styled from 'styled-components'

 function Footer() {
    return (
        <FooterContainer className="main-footer">
            <div className="footer-middle">
            <div className="container">
                <div className="row">
                {/*colum 1 */}
                    <div className="col-md-3 col-sm-6">
                    <h4>Lorem</h4>
                        <ul className="list-unstyled">    
                            <li>Lorem ipsus</li>
                            <li>Lorem ipsus</li>
                            <li>Lorem ipsus</li>
                            <li>Lorem ipsus</li>
                        </ul>
                    </div>
                {/*colum 2 */}
                    <div className="col-md-3 col-sm-6">
                    <h4>Lorem</h4>
                        <ul className="list-unstyled">    
                            <li><a href="/">Lorem ipsus</a></li>
                            <li><a href="/">Lorem ipsus</a></li>
                            <li><a href="/">Lorem ipsus</a></li>
                            <li><a href="/">Lorem ipsus</a></li>
                        </ul>
                    </div>
                {/*colum 3 */}
                    <div className="col-md-3 col-sm-6">
                    <h4>Lorem</h4>
                        <ul className="list-unstyled">    
                            <li><a href="/">Lorem ipsus</a></li>
                            <li><a href="/">Lorem ipsus</a></li>
                            <li><a href="/">Lorem ipsus</a></li>
                            <li><a href="/">Lorem ipsus</a></li>
                        </ul>
                    </div>
                {/*colum 4 */}
                    <div className="col-md-3 col-sm-6">
                    <h4>Lorem</h4>
                        <ul className="list-unstyled">    
                            <li><a href="/">Lorem ipsus</a></li>
                            <li><a href="/">Lorem ipsus</a></li>
                            <li><a href="/">Lorem ipsus</a></li>
                            <li><a href="/">Lorem ipsus</a></li>
                        </ul>
                    </div>
                </div>
                {/*Footer Bottom*/}
                <div className="footer-bottom">
                    <p className="text-xs-center">
                        &copy;{new Date().getFullYear()} Capsium Creative Agency - All Rights Reserved
                    </p>
                </div>
            </div>
            </div>
        </FooterContainer>
    )
}

export default Footer;

const FooterContainer = styled.footer`
    .footer-middle {
        background: var(--mainDark);
        padding-top: 3rem;
        color: var(--mainWhite);
    }

    .footer-bottom {
        padding-top: 3rem;
        padding-bottom: 2rem;
    }

    ul li a {
        color: var(--mainGrey);
    }

    ul li a:hover{
        color: var(--mainlightGray)
    }
`;