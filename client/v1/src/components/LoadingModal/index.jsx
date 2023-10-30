import { CircularProgress, Paper } from '@mui/material';
import PropTypes from 'prop-types';
import './style.scss'

function LoadingModal({ fullscreen, isDisplay }) {
    return(
        <>
            {!isDisplay && <Paper
            className={'loadingModal' + (fullscreen ? ' loadingModal-fullscreen' : '')}
            square={fullscreen}
            elevation={fullscreen ? 1 : 24}>
                <CircularProgress />
            </Paper>}
        </>
    )
};

LoadingModal.propTypes = {
    fullscreen: PropTypes.bool,
    isDisplay: PropTypes.bool
};

export default LoadingModal;