import { useParams } from "react-router-dom";
import TabNavigator from "../../components/TabNavigator";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { useRef } from "react";
import Section from "../../components/Section";
import { Download, FileText } from "lucide-react";
import Button from "../../components/UI/Button";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import markdownComponents from "../../util/markdownComponet";
const DummyData = {
  id: 1,
  title: "Lecture 1",
  description: `We cover everything you need to build your first website. From creating your first page through to uploading your website to the internet. We'll use the worlds most popular (and free) web design tool called Visual Studio Code. There are exercise files you can download and follow along with me. At the end of each video there are downloadable version of where we are in the process so that you can compare your project with mine. This will enable you to see easily where you might have a problem. We will cover intro all the good stuff such as have to create your very own mobile super menu from scratch learning some basic JavaScript and jQuery.

That all sounds a little too fancy - don't worry, this course is aimed at people new to web design and who have never coded before. We'll start right at the beginning and work our way through step by step.

 `,
  notes: {
    text: `Ut aliquee ante. Curabitur mollis tincidunt turpis, sed aliquam mauris finibus vel. Praesent eget mi a elit maximus egestas. Mauris eget sit amet ligula lobortis adipiscing. Sed id leo in arcu ullamcorper at feugiat eget. Mauris vel lacinia felis. Maecenas semper tempor elit vitae tincidunt. Donec nec aliquam mauris finibus vel. Ut aliquee ante nec sem ex egestas auctor lectus sit amet sapien. Maecenas tristique aliquot massa, a elementum ipsum tempor in. Aliquot ferms urna, imperdiet in lacus a, cursitus suscipit sapien.

- nullam non quam a lectus finibus varius nec a orci. Aliquam efficitur sem cursus sit efficitur lacinia
- Morbi sit amet pretium tellus. Donec blandit fermentum tincidunt.
- Proin auctor velit mattis. Donec ac dignissim Phasem. Nam varius ex nibh id sodales. Donec lacus hendrerit mattis.
- Curabitur pede pellentesque ultrices dam in egestas.
- Donec id dam sit lorem pharetra vestibulum a et orci. Mauris vestibulum massa quis elit feugiat, dictum mattis ipsum pellentesque.
- Sed elementum. libero ut lacinia aliquot, purus non consectetur mauris, eget interdum mi lacus vitae sem.

Donec congue aliquam lorem nec congue. Suspendisse eu risus mattis, interdum ante sed, finibus urna. Praesent mattis dictum sapien et tellus. Ut sollicitudin magna aliquot blandit arcu quis, consectetur purus. Suspendisse eget scelerisque felis. Integer vulputate urna tincidunt lacus, faucibus consequat mauris hendrerit. Etiam ac tempus libero. Quisque rutrum dolor urna eu dolor. Donec quis tempor ipsum, vehicula convallis tortor varius ex nibh id sodales. Etiam ac tempor lorem. Curabitur quis molestus ante. Nam pharetra sagittis volutpat. Sed interdum neque tincidunt, rhoncus est viae aget facilisis. Ut rutrum vitae vel dolor mattis.

`,
    downloadUrl: "/path/to/notes.pdf",
  },

  attachments: [
    {
      name: "Create account on webflow.pdf",
      size: "12.6 MB",
      url: "/path/to/webflow.pdf",
    },
  ],

  comments: [
    {
      id: 1,
      user: {
        name: "Ronald Richards",
        avatar: "/path/to/avatar.jpg",
      },
      timeAgo: "1 week ago",
      text: "Maecenas risus tortor, tincidunt nec purus eu, gravida suscipit tortor.",
      replies: [],
    },
    {
      id: 2,
      user: {
        name: "Kristin Watson",
        avatar: "/path/to/avatar.jpg",
        role: "admin",
      },
      timeAgo: "1 week ago",
      text: "Nulla pellentesque leo vitae lorem hendrerit, sit amet elementum ipsum rutrum...",
      replies: [],
    },
    {
      id: 3,
      user: {
        name: "Cody Fisher",
        avatar: "/path/to/avatar.jpg",
      },
      timeAgo: "1 week ago",
      text: "Thank You so much sir, you’re a great mentor. 🔥🔥🔥",
      replies: [],
    },
    {
      id: 4,
      user: {
        name: "Guy Hawkins",
        avatar: "/path/to/avatar.jpg",
      },
      timeAgo: "2 weeks ago",
      text: "Thank you for your helpful video. May I ask what is the application use to demo the animation...",
      replies: [
        {
          id: 5,
          user: {
            name: "author",
            avatar: "/path/to/avatar.jpg",
          },
          timeAgo: "2 weeks ago",
          text: "you are welcom it's xxx",
          replies: [],
        },
      ],
    },
  ],
};
function countComments(comments) {
  let total = 0;
  const stack = [...comments];

  while (stack.length > 0) {
    const current = stack.pop();
    total += 1;
    if (current.replies && current.replies.length > 0) {
      stack.push(...current.replies);
    }
  }

  return total;
}

export default function LessonDetail() {
  const { lessonId } = useParams();
  const lessonData = DummyData;
  const descriptionSection = useRef<HTMLDivElement>(null);
  const notesSection = useRef<HTMLDivElement>(null);
  const attachmentsSection = useRef<HTMLDivElement>(null);
  const commentsSection = useRef<HTMLDivElement>(null);
  const refSections = [
    descriptionSection,
    notesSection,
    attachmentsSection,
    commentsSection,
  ];
  const activeId = useScrollSpy(refSections);

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 md:col-span-8">
        <div className="bg-amber-300 h-90">
          Lesson Detail Page for Lesson ID: {lessonId}
        </div>
        <TabNavigator
          activeId={activeId}
          options={[
            {
              label: "Description",
              sectionId: "description",
            },
            {
              label: "Lecture Notes",
              sectionId: "notes",
            },
            {
              label: `Attached Files ${lessonData.attachments.length}`,
              sectionId: "attachedFiles",
            },
            {
              label: "Comments",
              sectionId: "comments",
            },
          ]}
        />
        <Section
          title="Lecture Description"
          id="description"
          ref={descriptionSection}
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
             components={markdownComponents}

          >
            {lessonData.description}
          </ReactMarkdown>
        </Section>

        <Section
          title="Lecture Notes"
          id="notes"
          ref={notesSection}
          actions={
            <Button variant="secondary" className="items-center">
              <Download color="orange" />
              Download Notes
            </Button>
          }
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            //className="prose prose-lg max-w-none"
            components={{
              p: ({ children }) => <p className="mb-4">{children}</p>,
              ul: ({ children }) => (
                <ul className="list-disc pl-6 mb-4">{children}</ul>
              ),
              li: ({ children }) => <li className="mb-2">{children}</li>,
            }}
          >
            {lessonData.notes.text}
          </ReactMarkdown>
        </Section>

        <Section
          title={`Attached Files (${lessonData.attachments.length})`}
          id="attachedFiles"
          ref={attachmentsSection}
        >
          {lessonData.attachments.map((attachment) => (
            <div className="flex justify-between items-center bg-slate-100 p-5" key={attachment.name}>
              <div className="flex items-center gap-3">
                <FileText color="orange" size={50} />
                <div>
                  <p className="mb-1">{attachment.name}</p>
                  <p className="text-xs text-gray-400">{attachment.size} MB</p>
                </div>
              </div>
              <Button> Download File</Button>
            </div>
          ))}
        </Section>
        <Section title={`Comments (${countComments(lessonData.comments)})`} id='comments' ref={commentsSection}>
          {lessonData.comments.length === 0 ? (
            <p className="text-orange-300 text-center text-xl p-5 ">
              No Comments provided
            </p>
          ) : (
            <>
              {lessonData.comments.map((comment ,index) => (
                <div className="h-50" key={index}> comment component</div>
              ))}
              <Button variant="secondary">Load More</Button>
            </>
          )}
        </Section>
      </div>
      <div className="col-span-12 md:col-span-4"></div>
    </div>
  );
}
