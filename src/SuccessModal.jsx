import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        textAlign: 'center',
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const SuccessModal = (props) => {

    const classes = useStyles();

    return (
        <>
            <Modal
                aria-labelledby='transition-modal-title'
                aria-describedby='transition-modal-description'
                className={classes.modal}
                open={props.modalOpen}
                onClose={props.modalClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={props.modalOpen}>
                    <div className={classes.paper}> 
                        <div id='transition-modal-description'>
                            <Typography>
                                <span style={{fontWeight: 'bold'}}>Thank you for answering!!</span><br />
                                この画面は閉じても大丈夫です
                            </Typography>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </>
    )
};

export default SuccessModal;