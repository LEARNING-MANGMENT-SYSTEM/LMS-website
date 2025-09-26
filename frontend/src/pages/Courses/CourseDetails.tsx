import { useParams } from "react-router-dom";
import TabNavigator from "../../components/TabNavigator";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { useRef } from "react";
import Section from "../../components/Section";
import { ArrowRight, CircleCheck, MoveRight } from "lucide-react";
import Dropdown from "../../components/UI/Dropdown";
import InstructorCard from "../../components/instructorCard";
import ReadOnlyRating from "../../components/UI/ReadOnlyRating";
import ProgressBar from "../../components/UI/ProgressBar";
import Select from "../../components/UI/Select";
import Button from "../../components/UI/Button";
import testImg from "../../assets/testImg.png";
import CourseCard from "../../components/CourseCard";
import ReactMarkdown from "react-markdown";
import markdownComponents from "../../util/markdownComponet";
import CourseDetailHeader from "../../components/CourseDetailHeader";
import CourseSidebar from "../../components/CourseSidebar";

const DummyData = {
  img: testImg,
  title:
    "Complete Website Responsive Design: from Figma to Webflow to Website Design",
  subtitle:
    "3 in 1 Course: Learn to design websites with Figma, build with Webflow, and make a living freelancing.",
  category: "Development",
  subcategory: "Web Development",
  description: `It gives you a huge self-satisfaction when you look at your work and say, "I made this!". I love that feeling after I'm done working on something. When I lean back in my chair, look at the final result with a smile, and have this little "spark joy" moment. It's especially satisfying when I know I just made $5,000.

Lol! And that's why I got into this field. Not for the love of Web Design, which I do now. But for the LIFESTYLE! There are many way one can achieve this lifestyle. This is my way. This is how I achieved a lifestyle I've been fantasizing about for five years. And I'm going to teach you the same. Often people think Web Design is complicated. That it needs some creative talent or knack for computers. Sure, a lot of people make it very complicated. Like most subjects taught in the university. Like most career paths.

Nope, I won't like this field to be like that. I like life hacks. Like to take the shortest and simplest route to my destination. I haven't gone to an art school or have a computer science degree. But I outsmarted this field who hacked himself into it, somehow ending up being a sought-after professional. That's how I'm going to teach you Web Design. So you're not demotivated on your way with needless complexity. So you enjoy the process because it's simple and fun. So you can become a Freelance Web Designer in just five weeks.

For example, this is a Design course but I don't teach you Photoshop. Because Photoshop is needlessly complicated for Web Design. But people still teach it to web designers... I don't. I teach Figma – a simple tool that is taking over the design world. You will be designing a complete website within a week while others are still learning how to create basic layouts in Photoshop.

Second, this is a Development course. But I don't teach you how to code. Because for Web Design coding is needlessly complicated and takes too long to learn. Instead, I teach Webflow – a tool that is taking over the web design world. You will be building complex websites within two weeks while others are still learning the basics of HTML & CSS. Thru, this is a Freelancing course. But I don't teach you how to write great proposals. I give you a winning proposal template. When you're done with the course, you will have a stunning portfolio website with portfolio pieces already in it. Buy this course now and take it whenever the time is right for you.

`,
  whatWillLearn: [
    "You will learn how to design beautiful websites using Figma, an interface design tool used by designers at Uber, Airbnb and Microsoft.",
    "You will learn secret tips of Freelance Web Designers and how they make great money freelancing online.",
    "Understand how to use both the Jupyter Notebook and create .py files",
    "You will learn how to take your designs and build them into powerful websites using Webflow, a state of the art site builder used by teams at Dell, NASA and more.",
    "Learn to use Python professionally, learning both Python 2 and Python 3!",
    "Get an understanding of how to create GUIs in the Jupyter Notebook system!",
  ],
  targetAudiance: [
    "This course is for those who want to launch a Freelance Web Design career.",
    "Praesent eget consequat elit. Duis a pretium purus.",
    "Sed sagittis suscipit condimentum pellentesque vulputate feugiat libero nec accumsan.",
    "Sed nec dapibus orci integer nisl turpis, eleifend sit amet aliquam vel, lacinia quis ex.",
    "Those who are looking to reboot their work life and try a new profession that is fun, rewarding and highly in-demand.",
    "Nunc auctor consequat lorem, in posuere enim hendrerit sed.",
    "Duis ornare enim ullamcorper congue consectetur suspendisse interdum tristique est sed molestie.",
  ],
  requirements: [
    "Nunc auctor consequat lorem, in posuere enim hendrerit sed.",
    "Sed sagittis suscipit condimentum pellentesque vulputate feugiat libero nec accumsan.",
    "Duis ornare enim ullamcorper congue consectetur suspendisse interdum tristique est sed molestie.",
    "Those who are looking to reboot their work life and try a new profession that is fun, rewarding and highly in-demand.",
    "Praesent eget consequat elit. Duis a pretium purus.",
    "Sed nec dapibus orci integer nisl turpis, eleifend sit amet aliquam vel, lacinia quis ex.",
    "This course is for those who want to launch a Freelance Web Design career.",
  ],
  curriculum: [
    {
      title: "Getting Started",
      lectures: [
        { label: "What is webFlow", value: "What is webFlow" },
        { label: "sign up in web flow", value: "sign up in web flow" },
        {
          label: "webflow Terms & conditions",
          value: "webflow Terms & conditions",
        },
        { label: "teaser of webflow", value: "teaser of webflow" },
        { label: "practice project", value: "practice project" },
      ],
    },
    {
      title: "Secret of Good Design",
      lectures: [
        { label: "What is webFlow", value: "What is webFlow" },
        { label: "sign up in web flow", value: "sign up in web flow" },
        {
          label: "webflow Terms & conditions",
          value: "webflow Terms & conditions",
        },
        { label: "teaser of webflow", value: "teaser of webflow" },
        { label: "practice project", value: "practice project" },
      ],
    },
    {
      title: "Practice Design Like an Artist",
      lectures: [
        { label: "What is webFlow", value: "What is webFlow" },
        { label: "sign up in web flow", value: "sign up in web flow" },
        {
          label: "webflow Terms & conditions",
          value: "webflow Terms & conditions",
        },
        { label: "teaser of webflow", value: "teaser of webflow" },
        { label: "practice project", value: "practice project" },
      ],
    },
    {
      title: "Web Development (webflow)",
      lectures: [
        { label: "What is webFlow", value: "What is webFlow" },
        { label: "sign up in web flow", value: "sign up in web flow" },
        {
          label: "webflow Terms & conditions",
          value: "webflow Terms & conditions",
        },
        { label: "teaser of webflow", value: "teaser of webflow" },
        { label: "practice project", value: "practice project" },
      ],
    },
  ],
  instructors: [
    {
      id: "55",
      name: "John Doe",
      headline: "Full-Stack Web Developer & Instructor",
      imgSrc: undefined,
      avgCourseRate: 4.7,
      totalStudents: 12000,
      courses: 8,
      summary:
        "John has over 10 years of experience building scalable web applications. He specializes in JavaScript, React, and Node.js, and has taught thousands of students worldwide.",
    },
    {
      id: "66",
      name: "Jane Smith",
      headline: "UI/UX Designer & Figma Expert",
      imgSrc: undefined,
      avgCourseRate: 4.9,
      totalStudents: 8500,
      courses: 5,
      summary:
        "Jane is a professional designer who has worked with startups and Fortune 500 companies. She teaches UI/UX principles, prototyping, and design systems with tools like Figma and Adobe XD.and Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis maxime beatae dignissimos minima officia nostrum aliquam, quidem dolor architecto voluptas ut dicta debitis nam sunt possimus incidunt. Molestiae, eveniet dolores!",
    },
  ],
  ratings: {
    5: 200,
    4: 100,
    3: 50,
    2: 5,
    1: 7,
  },
  feedback: [
    {
      id: 1,
      user: {
        name: "Guy Hawkins",
        avatar: "/path/to/guy-avatar.jpg",
      },
      rating: 5,
      timeAgo: "1 week ago",
      comment:
        "I appreciate the precise short videos (10 mins or less each) because overall the instructor is very knowledgeable in Web Design and it shows as he shares his training. Thanks, Vako.",
    },
    {
      id: 2,
      user: {
        name: "Dianne Russell",
        avatar: "/path/to/dianne-avatar.jpg",
      },
      rating: 5,
      timeAgo: "51 mins ago",
      comment: "",
    },
  ],
  realatedCourse: [
    {
      id: 1,
      imgSrc: testImg,
      categories: ["test"],
      title: "testcours",
      rating: 4.5,
      students: 1000000,
      price: 15,
    },
    {
      id: 2,
      imgSrc: testImg,
      categories: ["test"],
      title: "testcours",
      rating: 4.5,
      students: 1000000,
      price: 15,
    },
    {
      id: 3,
      imgSrc: testImg,
      categories: ["test"],
      title: "testcours",
      rating: 4.5,
      students: 1000000,
      price: 15,
    },
    {
      id: 4,
      imgSrc: testImg,
      categories: ["test"],
      title: "testcours",
      rating: 4.5,
      students: 1000000,
      price: 15,
    },
    {
      id: 6,
      imgSrc: testImg,
      categories: ["test"],
      title: "testcours",
      rating: 4.5,
      students: 1000000,
      price: 15,
    },
  ],
};
export default function CourseDetail() {
  const { courseId } = useParams();
  const courseData = DummyData;
  const overviewSection = useRef<HTMLDivElement>(null);
  const instructorSection = useRef<HTMLDivElement>(null);
  const curriculmSection = useRef<HTMLDivElement>(null);
  const reviewSection = useRef<HTMLDivElement>(null);
  const refSections = [
    overviewSection,
    curriculmSection,
    instructorSection,
    reviewSection,
  ];
  const totalRatings = Object.values(courseData.ratings).reduce(
    (acc, rate) => (acc += rate),
    0
  );
  const avgRatings =
    Math.round(
      (Object.entries(courseData.ratings).reduce(
        (sum, [star, count]) => sum + Number(star) * count,
        0
      ) /
        totalRatings) *
        10
    ) / 10;

  const activeId = useScrollSpy(refSections);
  console.log(activeId);
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12  md:col-span-8">
        <CourseDetailHeader
          breadcrumbs={[
            { label: "home", href: "/" },
            {
              label: courseData.category,
              href: `$courses?category=${courseData.category}`,
            },
            {
              label: courseData.subcategory,
              href: `$courses?category=${courseData.category}+subcategory=${courseData.subcategory}`,
            },
          ]}
          title={courseData.title}
          subtitle={courseData.subtitle}
          rating={avgRatings}
          totalRatings={totalRatings}
          instructors={courseData.instructors.map(({ name, imgSrc }) => ({
            name,
            avatar: imgSrc ?? testImg,
          }))}
          heroImage={courseData.img}
        />
        <TabNavigator
          activeId={activeId}
          options={[
            {
              label: "Overview",
              sectionId: "overview",
            },
            {
              label: "Curriculum",
              sectionId: "curriculm",
            },
            {
              label: "Instructor",
              sectionId: "instructor",
            },
            {
              label: "Review",
              sectionId: "review",
            },
          ]}
        />
        <Section title="Description" id="overview" ref={overviewSection}>
          <ReactMarkdown components={markdownComponents}>
            {courseData.description}
          </ReactMarkdown>
        </Section>
        <Section
          title="What you will learn in this course"
          className="bg-green-100 p-5 m-5"
        >
          <ul className="grid grid-cols-2 gap-3 list-none">
            {courseData.whatWillLearn.map((ele) => (
              <li className="flex items-start gap-2" key={ele}>
                <CircleCheck
                  fill={"green"}
                  color="white"
                  size={20}
                  className="w-10"
                />
                <p className="text-sm inline-block flex-1">{ele}</p>
              </li>
            ))}
          </ul>
        </Section>
        <Section title="Who this course is for:">
          <ul className="list-none">
            {courseData.targetAudiance.map((ele) => (
              <li className="flex items-start gap-2 my-2" key={ele}>
                <MoveRight size={20} color="orange" />
                <p className="text-sm flex-1">{ele}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Course requirements">
          <ul className="list-disc pl-5">
            {courseData.requirements.map((ele) => (
              <li className="my-2 text-sm" key={ele}>
                {ele}
              </li>
            ))}
          </ul>
        </Section>
        <Section title="Curriculum" id="curriculm" ref={curriculmSection}>
          {courseData.curriculum.map(({ title, lectures }) => (
            <Dropdown
              key={title}
              classname="w-full md:w-full"
              subMenuDirection="down"
              handleOption={() => {}}
              title={title}
              options={lectures}
            />
          ))}
        </Section>
        <Section
          title={`Course instructor (${courseData.instructors.length})`}
          id="instructor"
          ref={instructorSection}
        >
          {courseData.instructors.map((instructor) => (
            <InstructorCard {...instructor} key={instructor.id} />
          ))}
        </Section>
        <Section title="Course Rating" id="review" ref={reviewSection}>
          <div className="flex gap-5 items-center">
            <div className="border border-gray-200 flex flex-col items-center w-50 p-8">
              <p className="text-5xl font-bold my-5">{avgRatings}</p>
              <ReadOnlyRating rating={avgRatings} showText={false} />
              <p className="mt-3"> Course Rating</p>
            </div>
            <div className="flex-1">
              {Object.keys(courseData.ratings)
                .reverse()
                .map((star) => (
                  <div className="flex items-center my-5" key={star}>
                    <ReadOnlyRating rating={star} />
                    <ProgressBar
                      progress={courseData.ratings[star]}
                      maxValue={totalRatings}
                    />
                  </div>
                ))}
            </div>
          </div>
        </Section>
        <Section
          title="Students Feedback"
          actions={
            <Select
              handleChange={() => {}}
              options={[
                "5 Star Rating",
                "4 Star Rating",
                "3 Star Rating",
                "2 Star Rating",
                "1 Star Rating",
              ]}
            />
          }
        >
          {courseData.feedback.length === 0 ? (
            <p className="text-orange-300 text-center text-xl p-5 ">
              No Feedback provided
            </p>
          ) : (
            <>
              {courseData.feedback.map((feedback, index) => (
                <div className="h-50" key={index}>
                  {" "}
                  feedback component
                </div>
              ))}
              <Button variant="secondary">Load More</Button>
            </>
          )}
        </Section>
        <Section
          title="Related Course"
          actions={
            <Button variant="secondary" className="items-center">
              View All <ArrowRight color="orange" />
            </Button>
          }
        >
          <div className="flex gap-2 justify-center mb-10 overflow-x-scroll">
            {courseData.realatedCourse.map((course) => (
              <CourseCard {...course} key={course.id} />
            ))}
          </div>
        </Section>
      </div>
      <div className="col-span-12 md:col-span-4 pl-3">
        <CourseSidebar
          price={49.99}
          originalPrice={99.99}
          discount={50}
          duration="12h 30m"
          level="Beginner"
          studentsEnrolled="2,345"
          language="English"
          subtitles="English, Spanish"
          courseIncludes={{
            onDemandVideo: "12.5 hours",
            moneyBackGuarantee: "30 days",
            downloadableResources: "10 articles",
            certificate: "Certificate of completion",
            mobileAccess: true,
            englishCaptions: true,
            fullLifetime: true,
            onlineAccess: true,
          }}
        />
      </div>
    </div>
  );
}
