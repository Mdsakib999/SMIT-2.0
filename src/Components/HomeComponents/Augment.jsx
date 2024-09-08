import img from "../../assets/pexels-alimadad-997512_prev_ui.png";
import SectionTitle from "../Shared/SectionTitle";
const Augment = () => {

  const timelineData = [
    {
      title: 'Checklist',
      
      description: 'We make sure we have covered customer’s requirements & have everything that is needed for the project.',
      icon: '📝', // You can use any icon or add an actual image
      color: 'bg-blue-600',
    },
    {
      title: 'Sitemap',
      description: 'We organize and manage the content of the website in a hierarchy so that it would be easy for users to navigate.',
      icon: '🗺️',
      color: 'bg-teal-500',
    },
    {
      title: 'Prototype',
      description: 'We create a proof of concept to check how a website will load & work in a browser; after this, we prepare a design for it.',
      icon: '💻',
      color: 'bg-orange-500',
    },
    {
      title: 'Coding',
      description: 'Next, we start coding to develop your fully working and attractive website.',
      icon: '🔧',
      color: 'bg-teal-500',
    },
    {
      title: 'Launch',
      description: 'Finally, we check the websites for their performance and any issues, and after testing, we launch them on the internet.',
      icon: '🚀',
      color: 'bg-orange-500',
    },
  ];

  
  return (
    <div>
      <SectionTitle
        title={"Our Features"}
        description={"What Makes Us The Preferred Choice?"}
      />
      <div className="max-w-7xl mx-auto pt-12 pb-20 ">
      <div className="flex flex-col md:flex-row md:justify-between gap-x-6">
        {timelineData.map((step, index) => (
          <div key={index} className="flex flex-col items-center mb-10 md:mb-0 md:flex-1 py-4 px-2 rounded-tr-[40px] rounded-b-[35px] border shadow-lg shadow-orange-100 hover:-translate-y-2 duration-500 hover:shadow-md ">
            <div className={`w-12 h-12 rounded-full ${step.color} flex items-center justify-center text-white mb-4`}>
              <span className="text-xl">{step.icon}</span>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold">{step.title}</h4>
              <p className="text-sm text-gray-600 mt-2">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Augment;
