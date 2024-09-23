import React from 'react';

const Destinations = () => {
  return (
    <>
      <header className="bg-gray-800 text-white p-5 text-center">
        <nav>
          <ul className="list-none flex justify-center space-x-5">
            <li>
              <a href="#" className="text-white no-underline">Home</a>
            </li>
            <li>
              <a href="#" className="text-white no-underline">About</a>
            </li>
            <li>
              <a href="#" className="text-white no-underline">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      
      <section className="destinations text-center py-12">
        <h2 className="text-2xl mb-8">Nos Destinations</h2>
        <div className="destination inline-block m-4 text-left max-w-xs">
          <img src="destination1.jpg" alt="Destination 1" className="w-full rounded-md" />
          <h3 className="mt-2 text-lg">Brazil</h3>
          <p className="mt-5 text-red-600">Le Brésil, la république fédérative du Brésil, est le plus grand État d'Amérique latine. Le Brésil, désigné comme pays-continent, est le cinquième plus grand pays de la planète, derrière la Russie, le Canada, les États-Unis et la Chine. Avec une superficie de 8 547 404 km2, le pays occupe la moitié de la superficie de l'Amérique du Sud, partageant des frontières avec l'Uruguay et l'Argentine au sud, le Paraguay au sud-sud-ouest, la Bolivie à l'ouest-sud-ouest, le Pérou à l'ouest, la Colombie à l'ouest-nord-ouest, le Venezuela au nord-ouest, le Guyana au nord-nord-ouest, le Suriname et la France au nord (par la Guyane), soit la plupart des pays du continent sauf le Chili et l'Équateur. Le pays compte une population de 215 millions d'habitants. Ancienne colonie portugaise, le Brésil a pour langue officielle le portugais alors que la plupart des pays d'Amérique latine ont pour langue officielle l'espagnol.</p>
          <a href="https://fr.wikipedia.org/wiki/Br%C3%A9sil" className="btn text-blue-500 underline">En savoir plus</a>
        </div>
        <div className="destination inline-block m-4 text-left max-w-xs">
          <img src="destination2.jpg" alt="Destination 2" className="w-full rounded-md" />
          <h3 className="mt-2 text-lg">Amsterdam</h3>
          <p className="mt-5 text-red-600">Amsterdam a été fondée à l'embouchure de la rivière Amstel qui a été endiguée pour contrôler les inondations ; le nom de la ville dérive d'une variation linguistique locale du mot barrage. À l'origine un petit village de pêcheurs à la fin du XIIe siècle, Amsterdam est devenu un port mondial majeur pendant l'âge d'or néerlandais du XVIIe siècle, lorsque les Pays-Bas étaient une puissance économique. Amsterdam était le principal centre financier et commercial, ainsi qu’une plaque tournante de la production d’art profane. Aux XIXe et XXe siècles, la ville s'est développée et de nombreux nouveaux quartiers et banlieues ont été planifiés et construits. Les canaux d'Amsterdam et la ligne de défense d'Amsterdam des XIXe et XXe siècles sont tous deux inscrits sur la liste du patrimoine mondial de l'UNESCO. Sloten, annexée en 1921 par la municipalité d'Amsterdam, est la partie la plus ancienne de la ville.</p>
          <a href="https://en.wikipedia.org/wiki/Amsterdam" className="btn text-blue-500 underline">En savoir plus</a>
        </div>
        <div className="destination inline-block m-4 text-left max-w-xs">
          <img src="destination3.jpg" alt="Destination 3" className="w-full rounded-md" />
          <h3 className="mt-2 text-lg">Tunisie</h3>
          <p className="mt-5 text-red-600">La Tunisie est un État arabophone et à majorité musulmane d'Afrique du Nord souverain depuis 1956. Bordé au nord et à l'est par la mer Méditerranée (1 566 km de côtes), à l'ouest par l'Algérie avec 965 km de frontière commune et au sud-est par la Libye avec 459 km de frontière, sa capitale Tunis est située dans le Nord-Est du pays, au fond du golfe du même nom. Plus de 30 % de la superficie du territoire est occupée par le désert du Sahara, le reste étant constitué de régions montagneuses et de plaines fertiles.</p>
          <a href="https://fr.wikipedia.org/wiki/Tunisie" className="btn text-blue-500 underline">En savoir plus</a>
        </div>
        <div className="destination inline-block m-4 text-left max-w-xs">
          <img src="destination4.jpg" alt="Destination 4" className="w-full rounded-md" />
          <h3 className="mt-2 text-lg">France</h3>
          <p className="mt-5 text-red-600">La France en forme longue République française, est un État souverain transcontinental dont le territoire métropolitain s'étend en Europe de l'Ouest et dont le territoire ultramarin s'étend dans les océans Indien, Atlantique et Pacifique, ainsi qu'en Antarctique et en Amérique du Sud. Le pays a des frontières terrestres avec la Belgique, le Luxembourg, l'Allemagne, la Suisse, l'Italie, l'Espagne, Monaco et l'Andorre en Europe, auxquelles s'ajoutent les frontières terrestres avec le Brésil, le Suriname et les Pays-Bas aux Amériques. La France dispose d'importantes façades maritimes sur l'Atlantique, la Méditerranée, le Pacifique et l'océan Indien, lui permettant de bénéficier de la deuxième plus vaste zone économique exclusive du monde.</p>
          <a href="https://fr.wikipedia.org/wiki/France" className="btn text-blue-500 underline">En savoir plus</a>
        </div>
      </section>
      
      <footer className="bg-gray-800 text-white text-center py-5">
        &copy; 2023 Travel Agency
      </footer>
    </>
  );
};

export default Destinations;
