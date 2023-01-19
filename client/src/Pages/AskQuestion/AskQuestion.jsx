import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import { askQuestion } from '../../actions/question'
import './AskQuestion.css'
const AskQuestion = () => {

     // const initialValues = { questionTitle: '', questionBody: '', questionTags: [], userPosted: '' }
     const navigate = useNavigate()
     const dispatch = useDispatch()
 
     // const [ questionData, setQuestionData ] = useState(initialValues)
     const [ questionTitle, setQuestionTitle ] = useState('')
     const [ questionBody, setQuestionBody ] = useState('')
     const [ questionTags, setQuestionTags ] = useState([])
     const user = useSelector((state) => (state.currentUserReducer))
     //const user=JSON.parse(localStorage.getItem('Profile'))
 
     const handleSubmit = (e) => {
         e.preventDefault()
         // console.log({ ...questionData, questionTags, userPosted: "manoj"})
         dispatch(askQuestion({ questionTitle, questionBody, questionTags, userPosted: user.result.name,userId:user?.result._id }, navigate ))
     }
 
     const handleEnter = (e) => {
         if(e.key === 'Enter'){
             setQuestionBody(questionBody + "\n")
         }
     }


  return (
    <div className="ask-question">
                <div className="ask-ques-container">
                    <h1>Ask a public question</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="ask-form-container">
                            <label htmlFor="ask-ques-Title">
                                <h4>Title</h4>
                                <p>Be specific and imagine you’re asking a question to another person</p>
                                <input type="text" name='questionTitle' id='ask-ques-Title' onChange={e => setQuestionTitle(e.target.value)}  placeholder='e.g. Is there an R function for finding the index of an element in a vector?'/>
                            </label>
                            <label htmlFor="ask-ques-Body">
                                <h4>Body</h4>
                                <p>Include all the information someone would need to answer your question</p>
                                <textarea id="ask-ques-Body" rows="10" name='questionBody' onChange={(e) => setQuestionBody(e.target.value)} onKeyPress={handleEnter}></textarea>
                            </label>
                            <label htmlFor="ask-ques-Tags">
                                <h4>Tags</h4>
                                <p>Add up to 5 tags to describe what your question is about</p>
                                <input type="text" id='ask-ques-Tags' placeholder='e.g. (xml typescript wordpress)' onChange={(e) => setQuestionTags(e.target.value.split(" "))}/>
                            </label>
                        </div>
                        <input type="submit" className='review-btn' value="Review your question"/>
                    </form>
                </div>
            </div>
  )
}

export default AskQuestion
