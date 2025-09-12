import {  useEffect, useState } from "react";
import SearchInput from "../../UI/SearchInput";
import CourseHeader from "../Header";

import Button from "../../UI/Button";
import UsernameCard from "./UsernameCard";
const users = [
  { id:1,name: "Ali", track: "Frontend" },
  { id:2,name: "Sara", track: "UI/UX Designer" },
]

function PublishCourseForm() {
  const[searchInput,setSearchInput]=useState("")
  const [instructors,setInstructors]=useState(users)
   useEffect(()=>{
        const filtered =users.filter((user)=> user.name.toLowerCase().includes(searchInput.toLowerCase()) )
        setInstructors(filtered)
   },[searchInput])

   const handleClose=(id:number)=>{
    const updateInstructors=instructors.filter((instructor)=> instructor.id != id)
    setInstructors(updateInstructors)
   }

  return (
    <>
      <CourseHeader title="Publish Course" />
      <main className="p-7">
        <div className="font-bold text-lg mb-4">Messages</div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Welcome Message */}
          <div className="flex-1">
            <label htmlFor="welcome" className="block mb-2 font-medium text-gray-700">
              Welcome Message
            </label>
            <textarea
              id="welcome"
              className="w-full p-3 border-2 border-gray-300  resize-none "
              placeholder="Enter course starting message here..."
              rows={5}
            ></textarea>
          </div>

          {/* Congratulations Message */}
          <div className="flex-1">
            <label htmlFor="congrats" className="block mb-2 font-medium text-gray-700">
              Congratulations Message
            </label>
            <textarea
              id="congrats"
              className="w-full resize-none p-3 border-2 border-gray-300   "
              placeholder="Enter course completed message here..."
              rows={5}
            ></textarea>
          </div>
        </div>



        <SearchInput  label="Add instructor" labelStyle="font-bold" countainerStyle="w-[calc(50%)] m-5" placeholder="search by Username"
        onChange={(e)=>setSearchInput(e.target.value)} />
      <div className="grid grid-cols-3 gap-4 ps-5">
          {
          instructors.map((instructor)=>(
            <UsernameCard id={instructor.id} name={instructor.name} track={instructor.track} key={instructor.id} onclick={handleClose}/>
          ))
        }
      </div>

      </main>

        <div className="flex justify-between p-5">
          <Button variant={"text"}>Prev Step</Button>
          <Button variant={"primary"} type="submit">
            Submit For Review
          </Button>
        </div>



    </>
  );
}

export default PublishCourseForm;
