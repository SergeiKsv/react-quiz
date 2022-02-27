import { useFormik } from 'formik';
import styles from './HomeScreen.module.css'
import { useState, useEffect } from 'react';



export const HomeScreen = () => {
    const [data, setData] = useState([]);
    const [loaded,setLoaded]=useState(false);

    const getData=async()=>{
        let result =await fetch('https://opentdb.com/api_category.php');
        result=await result.json();
        if(result.trivia_categories) return result.trivia_categories;
    }


    useEffect(() => {
        const result=getData().then(
            items=>{
                setData(items);
                setLoaded(true);
            }
        );      
    }, []);
    
    const formik = useFormik({
        enableReinitialize:true,
        initialValues: {
            quantity: '',
            category: data,
            difficulty: '',
        },
        onSubmit: () => { },
    });
    
    return (
        loaded?<div className={styles.HsWrapper}>
            <form onSubmit={formik.handleSubmit} className={styles.formWrapper}>
                <h1>Trivia Quiz</h1>
                <div className={styles.variantWrapper}>
                    <input type="text" placeholder='Number of Questions 1-50' className={styles.variants}></input>
                </div>
                <div className={styles.variantWrapper}>
                    <span>Select Category</span>
                    <select className={styles.variants}>
                        <option value="" disabled selected>Select Category</option>
                        {formik.values.category.map(items=><option value={items.id}>{items.name}</option>)}
                    </select>
                </div>
                <div className={styles.variantWrapper}>
                    <span>Select Difficulty</span>
                    <select className={styles.variants}>
                        <option value="" selected>All difficulties</option>
                        <option value="Easy" >Easy</option>
                        <option value="Medium" >Medium</option>
                        <option value="Hard" >Hard</option>
                    </select>
                </div>
            </form>
        </div>:<div>Loading...</div>
    );
}
