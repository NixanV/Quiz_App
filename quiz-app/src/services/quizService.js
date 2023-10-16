const questionUrl = "https://opentdb.com/api.php?amount=1&category=10&difficulty=medium&type=multiple";



export const getAllGK = () => {
    return (fetch(questionUrl)
        .then(res => res.json()));
}