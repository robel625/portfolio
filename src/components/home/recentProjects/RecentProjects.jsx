import { useState } from "react";
import "./recentProjects.css";

const RecentProjects = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [showDetails, setShowDetails] = useState("");

  const projectCategories = [
    {
      text: "All",
      filterValue: "all",
      isSelected: selectedFilter === "all",
    },
    {
      text: "Blog",
      filterValue: "blog",
      isSelected: selectedFilter === "blog",
    },
    {
      text: "E-commerce",
      filterValue: "e-commerce",
      isSelected: selectedFilter === "e-commerce",
    },
    {
      text: "LMS",
      filterValue: "lms",
      isSelected: selectedFilter === "lms",
    },
    {
      text: "POS",
      filterValue: "pos",
      isSelected: selectedFilter === "pos",
    },
    {
      text: "Inventory",
      filterValue: "inventory",
      isSelected: selectedFilter === "inventory",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "ToyBattleZone",
      image: "https://i.ibb.co/Qnvgf53/Toy-Battle-Zone.png",
      category: "e-commerce",
      liveLink: "https://toybattlezone.web.app/",
      gitRepoClient: "https://github.com/Minhaj06/ToyBattleZone-Client",
      gitRepoServer: "https://github.com/Minhaj06/ToyBattleZone-Server",
      features: ["Firebase Login", "Admin Panel", "User Panel"],
    },
    {
      id: 2,
      title: "GadgetZone",
      image: "https://i.ibb.co/Yb4xc5z/Gadget-Zone.png",
      category: "e-commerce",
      liveLink: "https://gadgetzone.vercel.app/",
      gitRepoClient: "https://github.com/Minhaj06/MERN-ECOMMERCE/tree/master/client",
      gitRepoServer: "https://github.com/Minhaj06/MERN-ECOMMERCE/tree/master/server",
      features: ["Wishlist", "Product Filtering", "Admin Dashboard"],
    },
    {
      id: 3,
      title: "LanguageMastery",
      image: "https://i.ibb.co/Mh23g1y/Language-Mastery.png",
      category: "lms",
      liveLink: "https://languagemastery-211f7.firebaseapp.com/",
      gitRepoClient: "https://github.com/Minhaj06/MERN-ECOMMERCE/tree/master/client",
      gitRepoServer: "https://github.com/Minhaj06/MERN-ECOMMERCE/tree/master/server",
      features: ["Wishlist", "Product Filtering", "Admin Dashboard"],
    },
    {
      id: 4,
      title: "DreamChef",
      image: "https://i.ibb.co/84dFYcZ/Dream-Chef.png",
      category: "e-commerce",
      liveLink: "https://dreamchef-28ef8.web.app/",
      features: ["Best Chefs List", "Recipe List", "Blogs"],
    },
    {
      id: 5,
      title: "Portfolio Project & Blog",
      image: "https://i.ibb.co/5srgzXc/Portfolio-Blog.png",
      category: "blog",
      liveLink: "https://minhaj06.github.io/coder/",
      gitRepoClient: "https://github.com/Minhaj06/coder",
      features: ["Skills", "Projects Code", "Blogs"],
    },
    {
      id: 6,
      title: "SMM Admin",
      image: "https://i.ibb.co/4NGDMfq/SMM-Admin.png",
      category: "inventory",
      liveLink: "https://minhaj06.github.io/SMM-Panel-OkkhoTech/smm-admin/",
      gitRepoClient: "https://github.com/Minhaj06/SMM-Panel-OkkhoTech/tree/master/smm-admin",
      features: ["Pages", "Components", "Utils"],
    },
  ];

  const filterProjects = (category) => {
    setSelectedFilter(category);
  };

  const filteredProjects =
    selectedFilter === "all"
      ? projects
      : projects.filter((project) => project.category === selectedFilter);

  const handleImageHover = (e) => {
    e.currentTarget.classList.add("hovered");
  };

  const handleImageLeave = (e) => {
    e.currentTarget.classList.remove("hovered");
  };

  const handleShowDetails = (id) => {
    if (id === showDetails) {
      setShowDetails("");
    } else {
      setShowDetails(id);
    }
  };

  return (
    <section id="portfolio" className="py-12 pb-24">
      <div className="container">
        <h2 className="text-4xl font-preahvihear mb-8">Recent Projects</h2>

        <div className="flex flex-wrap gap-2 justify-center items-center mb-8">
          {projectCategories.map((button, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                button.isSelected
                  ? "bg-primaryLight text-white"
                  : "bg-white text-primaryLight2"
              }`}
              onClick={() => filterProjects(button.filterValue)}
            >
              {button.text}
            </button>
          ))}
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div key={project.id} className="relative overflow-hidden">
              <div className="h-64 group rounded overflow-hidden relative">
                <button
                  onClick={() => handleShowDetails(project.id)}
                  className="inline-block bg-primaryLight hover:bg-primaryLight2 duration-300 px-2 py-1 rounded text-sm absolute right-0 top-0 z-10"
                >
                  {project.id === showDetails ? "Hide Details" : "Show Details"}
                </button>
                <div
                  className="portfolioImageContainer relative overflow-hidden"
                  onMouseEnter={handleImageHover}
                  onMouseLeave={handleImageLeave}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 px-4 py-2 transform translate-y-full opacity-0 hover:opacity-100 transition duration-300">
                    <div className="flex items-center justify-between">
                      <a
                        href={project.gitRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:underline"
                      >
                        Git Repo
                      </a>
                      <div className="flex gap-4">
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:underline"
                        >
                          Live Link
                        </a>
                        <span className="text-white">Server/Client</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Additional project details */}
                <div
                  className={`absolute top-0 -left-full ${
                    showDetails === project.id ? "left-0" : "-left-full"
                  } duration-500 bgCustomGradient w-full h-full p-4 pt-12 overflow-auto font-preahvihear`}
                >
                  <div className="flex gap-2 text-sm justify-center items-center">
                    <a
                      className="inline-block text-primaryLight2 underline"
                      href={project.liveLink}
                      target="_blank"
                    >
                      Live Link
                    </a>

                    {project.gitRepoClient && (
                      <>
                        <span>|</span>
                        <a
                          className="inline-block text-primaryLight2 underline"
                          href={project.gitRepoClient}
                          target="_blank"
                        >
                          Client Repo
                        </a>
                      </>
                    )}
                    {project.gitRepoServer && (
                      <>
                        <span>|</span>
                        <a
                          className="inline-block text-primaryLight2 underline"
                          href={project.gitRepoServer}
                          target="_blank"
                        >
                          Server Repo
                        </a>
                      </>
                    )}
                  </div>

                  <h4 className="text-lg mt-4 mb-2">
                    <span className="text-gray-400">Project Name : </span> {project.title}
                  </h4>

                  <h4 className="text-lg text-gray-400">Features : </h4>
                  <ul className="space-y-1 text-sm list-disc list-inside">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
