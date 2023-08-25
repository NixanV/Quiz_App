const questionUrl = "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple";


export const getAll = () => {
    return fetch(questionUrl)
        .then(res => res.json())
}