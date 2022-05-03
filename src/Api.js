import he from 'he'
export const getData = async () => {
    let result = await fetch('https://opentdb.com/api_category.php');
    result = await result.json();
    if (result.trivia_categories) return result.trivia_categories;
}

export const getQuestions=async (amount,category,difficulty)=>{
    let result = 
        await fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`);
    result=await result.json();
    let questions=result.results.map((results)=>({
        ...results,
        answers:shuffle([...results.incorrect_answers,results.correct_answer]
            .map(val => ({ val, isCorrect: val === results.correct_answer ? true : false })))
    }))
    
    let replaced=questions.map(val=>(
        {...val,
        question:he.decode(val.question),
        answers:val.answers.map(i=>({val:he.decode(i.val),isCorrect:i.isCorrect}))}
        ));
        
    return replaced; 
}

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}