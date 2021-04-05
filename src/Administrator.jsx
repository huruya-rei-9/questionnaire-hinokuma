import {db} from './firebase/config';
import {useState, useEffect} from 'react';
import {Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    q1: {
        margin: '30px'
    },
    q2: {
        margin: '30px'
    },
});

const Administrator = () => {

    // const [answer1Number, setAnswer1Number] = useState([]);

    // useEffect(() => {
    //     const questionRef = db.collection('question');
    //     questionRef
    //         .get()
    //         .then((querySnapshot) => {
    //             const data = querySnapshot.docs.map((doc) => doc.data());
    //             setAnswer1Number(data)
    //         });
    //     }, []);

    //     console.log(answer1Number);

    const classes = useStyles();
    const [ans1, setAns1] = useState(0);
    const [ans2, setans2] = useState(0);

    useEffect(() => {
        const docRef1 = db.collection('question').doc('rBbczwflXNDDmv2BTTwX');
        docRef1
            .get()
            .then((queryDocumentSnapshot) => {
                const data = queryDocumentSnapshot.data();
                console.log(data.answer1);
                setAns1(data);
        });

        const docRef2 = db.collection('question').doc('VsvlzhUYWU6aBMG9g8Nz');
        docRef2
            .get()
            .then((queryDocumentSnapshot) => {
                const data = queryDocumentSnapshot.data();
                console.log(data.answer1);
                setans2(data);
            })
    }, []);

    

    return (
        <>
            <h1>管理者の画面です</h1>
            <div>
                <div className={classes.q1}>
                    <Typography>問1</Typography>
                    <Typography>減らすべき</Typography>
                    <Typography>{ans1.answer1}人</Typography>
                    <Typography>現状維持で</Typography>
                    <Typography>{ans1.answer2}人</Typography>
                    <Typography>増やすべき</Typography>
                    <Typography>{ans1.answer3}人</Typography>
                </div>
                <div className={classes.q2}>
                    <Typography>問2</Typography>
                    <Typography>20%</Typography>
                    <Typography>{ans2.answer1}人</Typography>
                    <Typography>15%</Typography>
                    <Typography>{ans2.answer2}人</Typography>
                    <Typography>10%</Typography>
                    <Typography>{ans2.answer3}人</Typography>
                    <Typography>8%</Typography>
                    <Typography>{ans2.answer4}人</Typography>
                    <Typography>5%</Typography>
                    <Typography>{ans2.answer5}人</Typography>
                    <Typography>3%</Typography>
                    <Typography>{ans2.answer6}人</Typography>
                    <Typography>0%</Typography>
                    <Typography>{ans2.answer7}人</Typography>
                </div>
            </div>
        </>
    )
}

export default Administrator;