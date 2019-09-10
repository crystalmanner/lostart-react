import React from "react";
// import renderHTML from 'react-render-html'
import { createGlobalStyle } from "styled-components";

import {
    TransitionGroup,
    Transition as ReactTransition
} from "react-transition-group";

//This variable will be responsible for our animation duration
const timeout = 300;

//This object contains basic styles for animation, but you can extend them to whatever you like. Be creative!
const getTransitionStyles = {
    entering: {
        position: "absolute",
        opacity: 0
    },
    entered: {
        transition: `opacity ${timeout}ms ease-in-out`,
        opacity: 1
    },
    exiting: {
        transition: `all ${timeout}ms ease-in-out`,
        opacity: 0.8
    }
};

const GlobalStyle = createGlobalStyle`
//   @import url(https://db.onlinewebfonts.com/c/7dee4e8052171a216cd2446ea682b742?family=Berthold+Akzidenz+Grotesk+BE);
//   * {
//     box-sizing: border-box;
//   }
  body {
    margin: 0;
    font-family: 'akzidenz-grotesk', sans-serif;
    font-size: 18px;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'akzidenz-grotesk', sans-serif;
  }
`;

class Layout extends React.PureComponent {
    render() {
        //Destructuring props to avoid garbage this.props... in return statement
        const { children, location } = this.props;

        return (
            //Using TransitionGroup and ReactTransition which are both
            //coming from  'react-transition-group' and are required for transitions to work

            <TransitionGroup>
                <ReactTransition
                    //the key is necessary here because our ReactTransition needs to know when pages are entering/exiting the DOM
                    key={location.pathname}
                    //duration of transition
                    timeout={{
                        enter: timeout,
                        exit: timeout
                    }}
                >

                    {//Application of the styles depending on the status of page(entering, exiting, entered) in the DOM
                        status => (

                            <div
                                style={{
                                    ...getTransitionStyles[status]
                                }}
                            >
                                <GlobalStyle />
                                {children}
                            </div>
                        )}
                </ReactTransition>
            </TransitionGroup>
        );
    }
}

export default Layout;
