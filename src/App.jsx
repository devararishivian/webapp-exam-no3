import { useState } from "react";
import {
  Anchor as IconAnchor,
  Gitlab as IconGitlab,
  Award as IconAward,
} from "react-feather";

const pricingPlanData = [
  {
    id: 1,
    icon: () => <IconAnchor size={128}></IconAnchor>,
    title: "PIRATE PLAN",
    price: "950.000",
    color: "text-red-500",
  },
  {
    id: 2,
    icon: () => <IconGitlab size={128}></IconGitlab>,
    title: "CATMAN PLAN",
    price: "1.590.000",
    color: "text-sky-700",
  },
  {
    id: 3,
    icon: () => <IconAward size={128}></IconAward>,
    title: "CHAMP PLAN",
    price: "4.590.000",
    color: "text-amber-500",
  },
];

function AppCard({ icon: Icon, title, price, color }) {
  return (
    <div className="flex flex-col p-8 mx-auto w-80 text-center cursor-pointer text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
      <div className={`flex justify-center ${color} mb-12`}>
        <Icon></Icon>
      </div>
      <h3 className="text-2xl font-medium">{title}</h3>
      <div className="relative flex py-3">
        <div className="flex-grow border-t border-gray-400"></div>
      </div>
      <ul role="list" className="space-y-4 font-light my-5">
        <li className="flex justify-center space-x-3">
          <span>Lifetime update</span>
        </li>
        <li className="flex justify-center space-x-3">
          <span>Daily rewards</span>
        </li>
        <li className="flex justify-center space-x-3">
          <span>Annually report</span>
        </li>
      </ul>
      <div className="relative flex py-3">
        <div className="flex-grow border-t border-gray-400"></div>
      </div>
      <div className="flex flex-col items-center mb-5">
        <span className={`text-3xl font-medium ${color}`}>
          IDR&nbsp;{price}
        </span>
        <span>per month</span>
      </div>
    </div>
  );
}

function App() {
  const [selectedID, setSelectedID] = useState();

  function handleSelect(id) {
    setSelectedID(() => {
      return selectedID == id ? null : id;
    });
  }

  const pricingPlans = pricingPlanData.map((v) => (
    <div
      onClick={() => handleSelect(v.id)}
      key={v.id}
      className={`flex flex-col p-8 mx-auto w-80 text-center cursor-pointer text-gray-900 bg-white rounded-lg border border-gray-100 shadow 
      ${
        v.id == selectedID
          ? ""
          : "dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
      }`}
    >
      <div className={`flex justify-center ${v.color} mb-12`}>
        <v.icon></v.icon>
      </div>
      <h3 className="text-2xl font-medium">{v.title}</h3>
      <div className="relative flex py-3">
        <div className="flex-grow border-t border-gray-400"></div>
      </div>
      <ul role="list" className="space-y-4 font-light my-5">
        <li className="flex justify-center space-x-3">
          <span>Lifetime update</span>
        </li>
        <li className="flex justify-center space-x-3">
          <span>Daily rewards</span>
        </li>
        <li className="flex justify-center space-x-3">
          <span>Annually report</span>
        </li>
      </ul>
      <div className="relative flex py-3">
        <div className="flex-grow border-t border-gray-400"></div>
      </div>
      <div className="flex flex-col items-center mb-5">
        <span className={`text-3xl font-medium ${v.color}`}>
          IDR&nbsp;{v.price}
        </span>
        <span>per month</span>
      </div>
    </div>
  ));

  return (
    <div className="h-screen dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {pricingPlans}
        </div>
      </div>
      <div className="grid place-items-center mt-12">
        <div className="flex flex-col items-center text-white">
          <p className="text-xl">Qaisha Muhammada Devvara Rishivian</p>
          <p className="text-lg">2301964590 | qaisha.rishivian@binus.ac.id</p>
          <p>MGCA - Web App</p>
        </div>
      </div>
    </div>
  );
}

export default App;
