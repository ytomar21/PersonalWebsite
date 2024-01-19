import Image from 'next/image'
import profilePic from './ProfilePic.png'

export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-col p-6">


      <div className="grid grid-cols-3 content-center rounded-lg bg-blue-500">

        <div>
          <Image
            src={profilePic}
            width={150}
            height={150}
            alt="Profile Pic"
            className="border-solid border-2 rounded-lg"
          />
        </div>

        <div className="col-span-2 flex items-center">
          <span className="text-white-500 text-xl font-mono">My name is Yajur Tomar, welcome to my website!</span>
        </div>
        
      </div>

      <div className="grid grid-cols-3 content-center rounded-lg bg-blue-500">
        <span>About Me:</span>
      </div>

      <div className="grid grid-cols-3 content-center rounded-lg bg-blue-500">
        <span>Resume</span>
      </div>

      <div className="grid grid-cols-3 content-center rounded-lg bg-blue-500">
        <span>Projects</span>
      </div>     

    </main>
  )
}
