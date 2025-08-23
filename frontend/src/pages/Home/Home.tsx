import { Clock10, FolderOpen, Youtube } from "lucide-react"
import Curriculum from "../../components/Curriculum"
import Lesson from "../../components/Lesson"
import Section from "../../components/Section"

const Home = () => {
  return (
    <>
<div>Hom</div>
<Curriculum actions={
  <div className="flex gap-2 text-sm  ">
    <FolderOpen /> <span >8 Sections</span>
                        <Youtube />    <span  > 202 lectures</span>
                         <Clock10 />   <span  > 19h 37m</span>
  </div>
} >
<Section title="Getting Started" lectureCount={4} duration="41min" defaultExpanded={true}   >

                        <Lesson title="What is Webflow?" duration="07:31" completed />
                        <Lesson title="Sign up in Webflow" duration="07:31" completed />
                        <Lesson title="Webflow Terms & Conditions" duration="05:14" type="document" />
                        <Lesson title="Power of Webflow" duration="21:04" />
                        <Lesson title="Practice Project" duration="21:04" />
</Section>
<Section title="Getting Started" lectureCount={4} duration="41min" defaultExpanded={true}   >

                        <Lesson title="What is Webflow?" duration="07:31" completed />
                        <Lesson title="Sign up in Webflow" duration="07:31" completed />
                        <Lesson title="Webflow Terms & Conditions" duration="05:14" type="document" />
                        <Lesson title="Power of Webflow" duration="21:04" />
                        <Lesson title="Practice Project" duration="21:04" />
</Section>

</Curriculum>
</>
  )
}

export default Home