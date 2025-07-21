import React from 'react'
import { Github, Linkedin, Mail, ExternalLink, Computer } from "lucide-react";

const Connect = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com",
      icon: Github,
      image:
        "https://images.pexels.com/photos/1181253/pexels-photo-1181253.jpeg",
      description: "Check out my projects",
    },
    {
      name: "Projects",
      url: "https://google.com",
      icon: Computer,
      image:
        "https://images.pexels.com/photos/1181253/pexels-photo-1181253.jpeg",
      description: "Check out my projects",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: Linkedin,
      image:
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
      description: "Professional network",
    },
    {
      name: "Email",
      url: "mailto:contact@example.com",
      icon: Mail,
      image:
        "https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg",
      description: "Get in touch",
    },
  ];

  return (
    <div className="bg-white w-full py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Let's Connect</h2>
          <p className="text-gray-600 text-lg">Find me on these platforms</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialLinks.map((link, index) => {
            const IconComponent = link.icon
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden block"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={link.image}
                    alt={link.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <IconComponent className="w-12 h-12 text-white" />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {link.name}
                    </h3>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <p className="text-gray-600">{link.description}</p>
                </div>
              </a>
            )
          })}
        </div>
        
        {/* Alternative simple version if you prefer the original layout */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Simple Links</h3>
          <div className="bg-gray-50 w-full flex flex-row flex-wrap justify-between items-center p-6 rounded-lg">
            <div className='w-1/2 p-4'>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <img
                  src="https://images.pexels.com/photos/1181253/pexels-photo-1181253.jpeg"
                  alt="Github"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <span className="font-medium">GitHub</span>
              </a>
            </div>
            <div className='w-1/2 p-4'>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <img
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
                  alt="LinkedIn"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <span className="font-medium">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Connect