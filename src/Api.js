

export const getData = async () => {
    let result = await fetch('https://opentdb.com/api_category.php');
    result = await result.json();
    if (result.trivia_categories) return result.trivia_categories;
}

export const getQuestions=async (amount,category,difficulty)=>{
    let result = 
        await fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`);
    result=await result.json();
    return result.results;
    
}