import { Star } from "lucide-react";
import React from "react";
import Input from "../UI/Input";

interface dropDownOption {
  label: string;
  value: string | React.ReactNode;
  children?: dropDownOption[];
}

export const categoryOptions: dropDownOption[] = [
  {
    label: "Development",
    value: "Development",
    children: [
      ...["Web Development","Data Science","Mobile Development","Software Testing","Software Engineering","Software Development Tools", "No-Code Development"].map(item => ({
        label: item,
        value: (
          <label className="flex items-center justify-between w-full">
            <input type="checkbox" className="mr-2" />
            <span>{item}</span>
            <span className="ml-auto text-gray-500">555</span>
          </label>
        ),
      }))
    ]
      
  },
 {
    label: "Business",
    value: "Business",
    children: [
      ...["Entrepreneurship", "Management", "Sales", "Business Strategy"].map(
        (item) => ({
          label: item,
          value: (
            <label className="flex items-center justify-between w-full">
              <input type="checkbox" className="mr-2" />
              <span>{item}</span>
              <span className="ml-auto text-gray-500">555</span>
            </label>
          ),
        })
      ),
    ],
  },
  {
    label: "Finance & Accounting",
    value: "Finance & Accounting",
    children: [
      ...["Accounting", "Finance", "Investing", "Bookkeeping"].map((item) => ({
        label: item,
        value: (
          <label className="flex items-center justify-between w-full">
            <input type="checkbox" className="mr-2" />
            <span>{item}</span>
            <span className="ml-auto text-gray-500">555</span>
          </label>
        ),
      })),
    ],
  },
  {
    label: "IT & Software",
    value: "IT & Software",
    children: [
      ...["Network Security", "Hardware", "Operating Systems", "Databases"].map(
        (item) => ({
          label: item,
          value: (
            <label className="flex items-center justify-between w-full">
              <input type="checkbox" className="mr-2" />
              <span>{item}</span>
              <span className="ml-auto text-gray-500">555</span>
            </label>
          ),
        })
      ),
    ],
  },
  {
    label: "Office Productivity",
    value: "Office Productivity",
    children: [
      ...["Microsoft Office", "Google Workspace", "Productivity Tools"].map(
        (item) => ({
          label: item,
          value: (
            <label className="flex items-center justify-between w-full">
              <input type="checkbox" className="mr-2" />
              <span>{item}</span>
              <span className="ml-auto text-gray-500">555</span>
            </label>
          ),
        })
      ),
    ],
  },
  {
    label: "Personal Development",
    value: "Personal Development",
    children: [
      ...["Leadership", "Time Management", "Personal Finance"].map((item) => ({
        label: item,
        value: (
          <label className="flex items-center justify-between w-full">
            <input type="checkbox" className="mr-2" />
            <span>{item}</span>
            <span className="ml-auto text-gray-500">555</span>
          </label>
        ),
      })),
    ],
  },
  {
    label: "Design",
    value: "Design",
    children: [
      ...["Graphic Design", "UX/UI", "3D Design", "Animation"].map((item) => ({
        label: item,
        value: (
          <label className="flex items-center justify-between w-full">
            <input type="checkbox" className="mr-2" />
            <span>{item}</span>
            <span className="ml-auto text-gray-500">555</span>
          </label>
        ),
      })),
    ],
  },
  {
    label: "Marketing",
    value: "Marketing",
    children: [
      ...["Digital Marketing", "SEO", "Content Marketing", "Social Media"].map(
        (item) => ({
          label: item,
          value: (
            <label className="flex items-center justify-between w-full">
              <input type="checkbox" className="mr-2" />
              <span>{item}</span>
              <span className="ml-auto text-gray-500">555</span>
            </label>
          ),
        })
      ),
    ],
  },
  {
    label: "Lifestyle",
    value: "Lifestyle",
    children: [
      ...["Travel", "Food & Drink", "Home Improvement", "Pet Care"].map(
        (item) => ({
          label: item,
          value: (
            <label className="flex items-center justify-between w-full">
              <input type="checkbox" className="mr-2" />
              <span>{item}</span>
              <span className="ml-auto text-gray-500">555</span>
            </label>
          ),
        })
      ),
    ],
  },
  {
    label: "Photography & Video",
    value: "Photography & Video",
    children: [
      ...["Photography Basics", "Video Editing", "Filmmaking"].map((item) => ({
        label: item,
        value: (
          <label className="flex items-center justify-between w-full">
            <input type="checkbox" className="mr-2" />
            <span>{item}</span>
            <span className="ml-auto text-gray-500">555</span>
          </label>
        ),
      })),
    ],
  },
  {
    label: "Music",
    value: "Music",
    children: [
      ...["Instruments", "Music Theory", "Production", "Singing"].map((item) => ({
        label: item,
        value: (
          <label className="flex items-center justify-between w-full">
            <input type="checkbox" className="mr-2" />
            <span>{item}</span>
            <span className="ml-auto text-gray-500">555</span>
          </label>
        ),
      })),
    ],
  },
  {
    label: "Health & Fitness",
    value: "Health & Fitness",
    children: [
      ...["Nutrition", "Fitness", "Yoga", "Mental Health"].map((item) => ({
        label: item,
        value: (
          <label className="flex items-center justify-between w-full">
            <input type="checkbox" className="mr-2" />
            <span>{item}</span>
            <span className="ml-auto text-gray-500">555</span>
          </label>
        ),
      })),
    ],
  },
];

export const ToolsOptions= [
      ...["HTML 5", "CSS3", "React", "WebFLow" ,"Node.js"].map((item) => ({
        label: item,
        value: (
          <label className="flex items-center justify-between w-full">
            <input type="checkbox" className="mr-2" />
            <span>{item}</span>
            <span className="ml-auto text-gray-500">555</span>
          </label>
        ),
      })),
    ]
export const RatingOptions= [
      ...["5 Star", "4 Star & up", "3 Star & up", "2 Star & up","1 Star & up"].map((item) => ({
        label: item,
        value: (
          <label className="flex items-center justify-between w-full">
            <input type="checkbox" className="mr-2" />
            <span className="flex items-center gap-2">
              <Star color="orange" fill="orange" size={15}/>
              {item}
              </span>
            <span className="ml-auto text-gray-500">555</span>
          </label>
        ),
      })),
    ]
export const CourseLevelOptions= [
      ...["All Level", "Beginner", "Intermediate", "Expert"].map((item) => ({
        label: item,
        value: (
          <label className="flex items-center justify-between w-full">
            <input type="checkbox" className="mr-2" />
            <span>{item}</span>
            <span className="ml-auto text-gray-500">555</span>
          </label>
        ),
      })),
    ]
export const PriceOptions= [
  {label:'price', value:(
    <div className='flex gap-2'>
      <Input leftIcon="$" placeholder="min:"/>
      <Input leftIcon="$" placeholder="max:"/>
    </div>
  )}    
  ,...["paid", "free"].map((item) => ({
        label: item,
        value: (
          <label className="flex items-center justify-between w-full">
            <input type="checkbox" className="mr-2" />
            <span>{item}</span>
            <span className="ml-auto text-gray-500">555</span>
          </label>
        ),
      })),
    ]
export const DurationOptions= [
      ...["6-12 Months", "3-6 Months", "1-3 Months", "1-4 Weeks", "1-7 days"].map((item) => ({
        label: item,
        value: (
          <label className="flex items-center justify-between w-full">
            <input type="checkbox" className="mr-2" />
            <span>{item}</span>
            <span className="ml-auto text-gray-500">555</span>
          </label>
        ),
      })),
    ]