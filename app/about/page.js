import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* <header className="w-full bg-gray-900 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="font-bold text-lg flex items-center">
            <img width={44} className="invert" src="/tea.gif" alt="Logo" />
            <span className="ml-2">GetMeChai!</span>
          </div>
        </div>
      </header> */}

      <main className="flex-grow flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">About GetMeChai</h1>
          <p className="mt-4 text-lg text-gray-700">
            Welcome to GetMeChai, the best platform for creators to get support from their fans. Our goal is to provide a seamless and enjoyable experience for both creators and supporters.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            Creators can set up their profile, share their projects, and offer exclusive content to their supporters. Fans can support their favorite creators with a monthly subscription and get access to unique rewards and content.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            Join us today and start supporting your favorite creators or begin your journey as a creator!
          </p>
          <div className="mt-6 flex justify-center">
            <img src="/about.png" alt="Creator" className="w-1/2 rounded-lg shadow-md" />
          </div>
          <div className="mt-6 flex justify-center">
           
          </div>
          
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            <p className="mt-4 text-lg text-gray-700">
              Our mission is to empower creators to focus on their craft while getting the support they need from their fans. We believe in the power of community and strive to build a platform that nurtures creativity and connection.
            </p>
            <div className="mt-6 flex justify-center">
              <img src="/mission.png" alt="Mission" className="w-1/2 rounded-lg shadow-md" />
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
            <p className="mt-4 text-lg text-gray-700">
              Our vision is to create a world where creators can thrive independently, supported by a dedicated community of fans. We aim to be the leading platform for creator support, fostering a culture of appreciation and collaboration.
            </p>
            <div className="mt-6 flex justify-center">
              <img src="/vision.png" alt="Vision" className="w-1/2 rounded-lg shadow-md" />
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
            <p className="mt-4 text-lg text-gray-700">
              At GetMeChai, we value creativity, community, and integrity. We are committed to providing a platform that is fair, transparent, and supportive of all creators, regardless of their background or medium.
            </p>
            <div className="mt-6 flex justify-center">
              <img src="/value.png" alt="Values" className="w-1/2 rounded-lg shadow-md" />
            </div>
          </div>
        </div>
      </main>

      {/* <footer className="w-full bg-gray-900 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 GetMeChai. All rights reserved.</p>
        </div>
      </footer> */}
    </div>
  )
}

export default About

// either Static metadata
export const metadata = {
    title: "About - Get Me A Chai",
}

