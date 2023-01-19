{
    questionsList === null ? 
    <h1>Loading...</h1> :
    <>
        {
            questionsList.filter(question => question._id === id ).map(question => (
            <div key={question._id}>
                <section className="question-details-container">
                    <h1>{question.questionTitle}</h1>
                    <div className="question-details-container-2">
                        <div className="question-votes">
                           
                        </div>
                        <div style={{width: "100%"}}>
                            <p className="question-body">{question.questionBody}</p>
                            <div className='question-details-tags'>
                                { question.questionTags.map((tag) => (
                                    <p key={tag}>{tag}</p>
                                )) }
                            </div>
                            <div className='question-actions-user'>
                                <div>
                                    <button type="button" >Share</button>
                                    <button type="button">Delete</button>
                                </div>
                                <div>
                                    <p>asked {question.askedOn}</p>
                                    <Link to={`/User/${question?.userId}`} className='user-link' style={{color: "#0086d8"}}>
                                        <Avatar value={question.userPosted.charAt(0).toUpperCase()} backgroundColor="orange" px="8px" py="5px"/> 
                                        <div>{question.userPosted}</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {
                    question.noOfAnswers !== 0 && (
                    <section>
                        <h3>{question.noOfAnswers} Answers</h3>
                        <DisplayAnswer key={question._id} question={question}/>
                    </section> )
                }
                <section className="post-ans-container">
                    <h3>Your Answer</h3>
                    <form>
                        <textarea name="answerBody" id="" rows="10"></textarea><br />
                        <input type="submit" className='post-ans-btn' value="Post Your Answer"/>
                    </form>
                    <p>
                        Browse other questions tagged 
                        { question.questionTags.map((tag) => (
                            <Link to='/Tags' key={tag} className="ans-tag"> {tag} </Link>
                        )) }
                        or 
                        <Link to='/AskQuestion' style={{textDecoration: "none", color: "#009dff"}}> ask your own question.</Link>
                    </p>
                </section>
            </div>
        ))}
    </>
}
</div>