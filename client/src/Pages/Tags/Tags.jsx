import React from 'react'
import TagsList from './TagsList'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import './Tags.css'
const Tags = () => {
    const tagsList =[{
        id: 1,
        tagName: "javascript",
        tagDesc: "For questions regarding programming in ECMAScript and its various dialects/implementation"
    },{
        id:2,
        tagName: "python",
        tagDesc: "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically-typed and garbage-collected"
    },{
        id:3,
        tagName: "c#",
        tagDesc: "C# is a general-purpose programming language supporting multiple paradigms. C# encompasses static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines."
    },{
        id:4,
        tagName: "java",
        tagDesc: "Java is a widely used object-oriented programming language and software platform that runs on billions of devices, including notebook computers, mobile devices, gaming consoles, medical devices and many others"
    },{
        id:5,
        tagName: "php",
        tagDesc: "PHP is a general-purpose scripting language geared toward web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1993 and released in 1995"
    },{
        id:6,
        tagName: "html",
        tagDesc: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser"
    },{
        id:7,
        tagName: "css",
        tagDesc: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML"
    },{
        id:8,
        tagName: "javascrit",
        tagDesc: "avaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS"
    },{
        id:9,
        tagName: "android",
        tagDesc: "Android is a mobile operating system based on a modified version of the Linux kernel and other open-source software, designed primarily for touchscreen mobile devices such as smartphones and tablets."
    }] 
  return (
    <div className="home-container-1">
        <LeftSidebar />
        <div className="home-container-2">
            <h1 className='tags-h1'>Tags</h1>
            <p className='tags-p'>A tag is a keyword or label that categorizes your question with other, similar questions.</p>
            <p className='tags-p'>Using the right tags makes it easier for others to find and answer your question.</p>
            
            <div className='tags-list-container'>
                {
                    tagsList.map((tag)=>(
                        <TagsList tag={tag} key={tagsList.id}/>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Tags
