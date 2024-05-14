import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Fade from '@mui/material/Fade';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import * as React from 'react';

function ScrollTop(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            '#back-to-top-anchor',
        );

        if (anchor) {
            anchor.scrollIntoView({
                block: 'center',
            });
        }
    };

    return (
        <Fade in={trigger} >
            <Box
                role="presentation"
                sx={{ position: 'fixed', bottom: 16, right: 16, color:'#3853a4' }}
            >
                {children}
            </Box>
        </Fade>
    );
}

// ScrollTop.propTypes = {
//     children: PropTypes.element.isRequired,
//     /**
//      * Injected by the documentation to work in an iframe.
//      * You won't need it on your project.
//      */
//     window: PropTypes.func,
// };

export default function BackToTop() {

    const handleClicks = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };
    return (
        <>
            <React.Fragment class="btn">
                <Toolbar id="back-to-top-anchor" />
                <ScrollTop >
                    <Fab size="small" aria-label="scroll back to top" className="btn" onClick={handleClicks} >
                        <KeyboardArrowUpIcon />
                    </Fab>
                </ScrollTop>
            </React.Fragment>
        </>
    );
};


