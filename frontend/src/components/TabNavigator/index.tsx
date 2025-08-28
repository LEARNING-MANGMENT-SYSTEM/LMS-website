interface props {
  options: {
    label: string;
    sectionId: string;
  }[];
  activeId?:string
}

function TabNavigator({ options, activeId = options[0].sectionId }: props) {
  return (
    <div className="flex flex-1 border-b bg-white border-b-gray-300 sticky top-0">
      {options.map(({ label, sectionId }) =>  (
          <a
            key={sectionId}
            href={`#${sectionId}`}
            className={`px-5 py-3 flex-1 text-center ${
              activeId === sectionId ? "border-b-2 border-b-orange-500" : ""
            }`}
          >
            {label}
          </a>
        )
      )}
    </div>
  );
}

export default TabNavigator;
