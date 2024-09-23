import React from 'react';

const Projects = () => {
  return (
    <main className="p-4">
      <section id="contact-form" className="max-w-md mx-auto">
        <form action="traitement.php" method="post" className="flex flex-col space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom :</label>
            <input type="text" id="name" name="name" required className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email :</label>
            <input type="email" id="email" name="email" required className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message :</label>
            <textarea id="message" name="message" required className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"></textarea>
          </div>

          <div>
            <button type="submit" className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Envoyer
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Projects;

  