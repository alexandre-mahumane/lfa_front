import React from "react";
import "../../i18n/i18n";
import photo from "../../assets/hero.jpg";
import { useTranslation } from "react-i18next";
import { useParams, Link } from "react-router-dom";
import { TitleComponent } from "../../components/title";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar/navbar";

export const Member = () => {
  const { section } = useParams();
  const { t } = useTranslation();

  const teamMembers = [
    {
      id: "1",
      name: "Advogado 1",
      photo: photo,
    },
    {
      id: "2",
      name: "Advogado 2",
      photo: photo,
    },
    {
      id: "3",
      name: "Advogado 3",
      photo: photo,
    },
  ];
  const filteredMembers = teamMembers.filter(
    (_, index) => index !== parseInt(section)
  );

  return (
    <>
      <Navbar />
      <section className="px-3 min-h-screen max-w-7xl mx-auto py-8 mt-16 lg:mt-24 w-full sm:px-8 sm:py-12 lg:px-16 lg:py-20 bg-gray-50 text-gray-800">
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8 text-base sm:text-lg lg:text-xl leading-relaxed">
          <div className="w-full lg:w-1/2 max-w-lg lg:max-w-none h-auto">
            <img
              src={photo}
              alt="News"
              className="object-cover w-full h-full rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
            <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
              Lawer
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequatur, veniam laborum? Aliquid vitae repellendus ipsum. Eius
              praesentium sit sunt consectetur, placeat omnis deserunt suscipit
              iste architecto eos, eum accusamus nemo.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-xl text-center font-semibold mb-6">
            Navegue pelos nossos advogados
          </h3>
          <div className="flex justify-center gap-4 flex-wrap">
            {filteredMembers.map((member, index) => (
              <Link to={`/information/member/${index}`} key={index}>
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-20 h-20 object-cover rounded-lg shadow-md transition-transform transform hover:scale-105"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
