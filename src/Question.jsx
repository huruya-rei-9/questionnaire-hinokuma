import SuccessModal from './SuccessModal';
import firebase, {db} from './firebase/config';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';

const useStyles = makeStyles({
    root: {

    },
    question1: {
        margin: '50px',
    },
    question2: {
        margin: '50px'
    },
    button: {
        margin: '50px'
    }
});

const Question = () => {
    
    const classes = useStyles();

    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [modalOpen, setModalOpen] = useState(false);

    const handleChange1 = (event) => {
        setValue1(event.target.value);
    }

    const handleChange2 = (event) => {
        setValue2(event.target.value);
    }

    const handleSubmit = () => {
        console.log(value1, value2);
        setModalOpen(true);
        
        const docRef1 = db.collection('question').doc('rBbczwflXNDDmv2BTTwX');
        if (value1 === '1') {
            docRef1.update({
                answer1: firebase.firestore.FieldValue.increment(1)
            })
        } else if (value1 === '2') {
            docRef1.update({
                answer2: firebase.firestore.FieldValue.increment(1)
            })
        } else {
            docRef1.update({
                answer3: firebase.firestore.FieldValue.increment(1)
            })
        }

        const docRef2 = db.collection('question').doc('VsvlzhUYWU6aBMG9g8Nz');
        if (value2 === '1') {
            docRef2.update({
                answer1: firebase.firestore.FieldValue.increment(1)
            })
        } else if (value2 === '2') {
            docRef2.update({
                answer2: firebase.firestore.FieldValue.increment(1)
            })
        } else if (value2 === '3') {
            docRef2.update({
                answer3: firebase.firestore.FieldValue.increment(1)
            })
        } else if (value2 === '4') {
            docRef2.update({
                answer4: firebase.firestore.FieldValue.increment(1)
            })
        } else if (value2 === '5') {
            docRef2.update({
                answer5: firebase.firestore.FieldValue.increment(1)
            })
        } else if (value2 === '6') {
            docRef2.update({
                answer6: firebase.firestore.FieldValue.increment(1)
            })
        } else {
            docRef2.update({
                answer7: firebase.firestore.FieldValue.increment(1)
            })
        }
            
    }

    return (
        <>
            <div className={classes.question1}>
                <FormControl component='fieldset'>
                    <FormLabel component='legend'>
                        <Typography>
                            問1. 現在、国の借金(国債発行残高)は1000兆円を越えてしまいました。これはこのまま放置していいのでしょうか？
                        </Typography>
                    </FormLabel>
                    <RadioGroup aria-label='question1' name='question1' value={value1} onChange={handleChange1}>
                        <FormControlLabel value='1' control={<Radio />} label='減らすべき'/>
                        <FormControlLabel value='2' control={<Radio />} label='現状維持で'/>
                        <FormControlLabel value='3' control={<Radio />} label='増やすべき'/>
                    </RadioGroup>
                </FormControl>
            </div>
            <div className={classes.question2}>
                <FormControl component='fieldset'>
                    <FormLabel component='legend'>
                        <Typography>
                            問2. 消費税はどのくらいにするのがいいと思いますか？
                        </Typography>
                    </FormLabel>
                    <RadioGroup aria-label='question2' name='question2' value={value2} onChange={handleChange2}>
                        <FormControlLabel value='1' control={<Radio />} label='20%'/>
                        <FormControlLabel value='2' control={<Radio />} label='15%'/>
                        <FormControlLabel value='3' control={<Radio />} label='10%'/>
                        <FormControlLabel value='4' control={<Radio />} label='8%'/>
                        <FormControlLabel value='5' control={<Radio />} label='5%'/>
                        <FormControlLabel value='6' control={<Radio />} label='3%'/>
                        <FormControlLabel value='7' control={<Radio />} label='0%'/>
                    </RadioGroup>
                </FormControl>
            </div>
            <Button className={classes.button} color='secondary' variant='contained' onClick={handleSubmit}>送信</Button>
            <SuccessModal modalOpen={modalOpen} modalClose={() => setModalOpen(false)}/>
        </>
    );
};

export default Question;