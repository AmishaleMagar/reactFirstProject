import React from 'react'
import Card from './components/card'

const App = () => {

  const jobOpenings = [
    {
      brandLogo: "https://tse4.mm.bing.net/th/id/OIP.4C6xE06J-U-YpLkXpX8mBQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full-time",
      tag2: "Junior Level",
      pay: "$45/hour",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://th.bing.com/th/id/OIP.JUrHsLtGUc8fUOaqE2CNhQHaHa?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      companyName: "Microsoft",
      datePosted: "10 weeks ago",
      post: "Backend Developer",
      tag1: "Full-time",
      tag2: "Senior Level",
      pay: "$65/hour",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://th.bing.com/th/id/OIP.dLl9UyA6y1GTydI-npnoygHaHv?w=166&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      companyName: "Amazon",
      datePosted: "2 days ago",
      post: "React Developer",
      tag1: "Part-time",
      tag2: "Junior Level",
      pay: "$40/hour",
      location: "Delhi, India"
    },
    {
      brandLogo: "https://th.bing.com/th/id/OIP.5MoH8qTW_swxJ-jDBlOd8QHaFj?w=221&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      companyName: "Meta",
      datePosted: "1 week ago",
      post: "UI/UX Designer",
      tag1: "Full-time",
      tag2: "Mid Level",
      pay: "$55/hour",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://th.bing.com/th/id/OIP.H4Ig23ohpBv5QjjJF_hh-AHaEK?w=272&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      companyName: "Apple",
      datePosted: "3 days ago",
      post: "iOS Developer",
      tag1: "Full-time",
      tag2: "Senior Level",
      pay: "$70/hour",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://th.bing.com/th/id/OIP.GQ9LPCji-0hXjCHXVNnccwHaEK?w=295&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      companyName: "NVIDIA",
      datePosted: "6 days ago",
      post: "AI/ML Engineer",
      tag1: "Full-time",
      tag2: "Junior Level",
      pay: "$60/hour",
      location: "Pune, India"
    },
    {
      brandLogo: "https://th.bing.com/th/id/OIP.Of2MrfKXGN1chuR1adiytQHaHa?w=166&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      companyName: "Netflix",
      datePosted: "2 weeks ago",
      post: "Software Engineer",
      tag1: "Full-time",
      tag2: "Senior Level",
      pay: "$80/hour",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://th.bing.com/th/id/OIP.Xc79egD4HYqtOXjTgq_4fwHaHa?w=179&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      companyName: "Adobe",
      datePosted: "4 days ago",
      post: "Web Developer",
      tag1: "Part-time",
      tag2: "Junior Level",
      pay: "$42/hour",
      location: "Chennai, India"
    },
    {
      brandLogo: "data:image/webp;base64,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",
      companyName: "Salesforce",
      datePosted: "3 weeks ago",
      post: "Cloud Engineer",
      tag1: "Full-time",
      tag2: "Mid Level",
      pay: "$58/hour",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://th.bing.com/th/id/OIP.XIZDhSibILo3WFUdQjLM-wHaE8?w=253&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      companyName: "IBM",
      datePosted: "1 day ago",
      post: "Python Developer",
      tag1: "Full-time",
      tag2: "Junior Level",
      pay: "$38/hour",
      location: "Delhi, India"
    }
  ];

  return (

    <div className='parent'>

      {jobOpenings.map((elem) => {
        return <Card 
        logo={elem.brandLogo} 
        company={elem.companyName} 
        date={elem.datePosted} 
        job={elem.post}
        duration={elem.tag1}
        level={elem.tag2}
        salary={elem.pay}
        location={elem.location}
        />

      })}
    </div>
  )
}

export default App
