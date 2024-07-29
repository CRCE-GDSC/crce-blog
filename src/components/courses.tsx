'use client'
import React, { useState } from "react";

interface TabData {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: TabData[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

  return (
    <div className="flex flex-row-reverse items-start space-x-4 space-x-reverse">
      {/* Tabs list */}
      <div className="w-1/4">
        <div className="bg-gray-100 rounded-lg p-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full text-left px-4 py-2 rounded-md transition-colors duration-150 ease-in-out ${
                activeTab === tab.id
                  ? "bg-slate-500 text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`}>
              {tab.title}
            </button>
          ))}
        </div>
      </div>

      {/* Content container */}
      <div className="w-3/4 bg-white rounded-lg p-4 shadow-md">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};

// Example usage
const TabsExample: React.FC = () => {
  const tabsData: TabData[] = [
    {
      id: "tab1",
      title: "Tab 1",
      content: 
     <div>
       
     </div>,
    },
    {
      id: "tab2",
      title: "Tab 2",
      content: <p>Here's the content for Tab 2</p>,
    },
    {
      id: "tab3",
      title: "Tab 3",
      content: <p>And this is Tab 3 content</p>,
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <Tabs tabs={tabsData} />
    </div>
  );
};

export default TabsExample;
