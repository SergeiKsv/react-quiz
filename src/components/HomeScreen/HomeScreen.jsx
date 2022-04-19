import { useFormik } from 'formik';
import styles from './HomeScreen.module.css'
import { useState, useEffect } from 'react';
import { getData } from '../../Api';


export const HomeScreen = (props) => {
    const [data, setData] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const difficulty=['easy', 'medium', 'hard'];

    useEffect(() => {
            getData().then(
                items => {
                    setData(items);
                    setLoaded(true);
                }
            );
    }, []);

    const formik = useFormik({
        initialValues: {
            quantity: 10,
            category: '',
            difficulty: '',
        },
        onSubmit: (values) => {
            props.startGame(values.quantity,values.category,values.difficulty);
        },
    });
    
    return (
        loaded ? <div className={styles.HsWrapper}>

            <form onSubmit={formik.handleSubmit} className={styles.formWrapper}>
                <h1>Trivia Quiz</h1>
                <div className={styles.variantWrapper}>
                    <span>Enter number of questions</span>
                    <input type="number" max='50' min='1' placeholder='Number of Questions 1-50'
                        name='quantity'
                        className={styles.variants}
                        defaultValue={formik.values.quantity}
                        onChange={formik.handleChange}></input>
                </div>

                <div className={styles.variantWrapper}>
                    <span>Select Category</span>
                    <select className={styles.variants} onChange={formik.handleChange} name='category' required>
                        <option value="" disabled selected>Select Category</option>
                        {data.map(items => <option value={items.id}>{items.name}</option>)}
                    </select>
                </div>

                <div className={styles.variantWrapper}>
                    <span>Select Difficulty</span>
                    <select className={styles.variants} onChange={formik.handleChange} name='difficulty'>
                        <option value="" selected>All difficulties</option>
                        {difficulty.map(items => <option value={items}>{items}</option>)}
                    </select>
                </div>

                <div>
                    <button className={styles.startQuizBtn} type="submit">Start Quiz</button>
                </div>

            </form>
        </div> : <div>Loading...</div>
    );
}
