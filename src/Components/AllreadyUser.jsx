import React from 'react'

const AllreadyUser = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-left mb-2 w-4/5 lg:w-1/5 h-4/5 bg-white shadow-xl p-4 ">
        <p className="text-3xl mb-4">Account Settings</p>
        <div className="bg-gray-50 p-0">
          <div className="flex">
            <div className="relative w-24 h-24">
              <img className='photo' 
                alt="profile photo" 
                src="https://neweralive.na/wp-content/uploads/2024/06/lloyd-sikeba.jpg" 
              
              />
              <img 
                alt="photo" 
                src="https://react-project-chi-steel.vercel.app/static/media/edit.374415c21bed9ec767dbb9b506985d9d.svg" 
                
              />
            </div>
            <div className="ml-8">
              <h1>Happy</h1>
              <h1 >Happy@gmail.com</h1>
            </div>
          </div>
          <p >
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam      
          </p>
        </div>
      </div>
    </div>
  )
}

export default AllreadyUser
