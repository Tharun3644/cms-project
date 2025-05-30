import React from "react";

const team = [
  {
    name: "Jane Doe",
    role: "Founder & CEO",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "John Smith",
    role: "Lead Developer",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Emily Brown",
    role: "Product Designer",
    image: "https://via.placeholder.com/150",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 text-gray-800 px-6 py-16">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Title Section */}
        <div className="text-center">
          <h1 className="text-5xl font-extrabold mb-4 text-gray-900">About Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are a team of passionate developers, designers, and thinkers committed to building great digital experiences.
          </p>
        </div>

        {/* Mission */}
        <section className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our mission is to make modern technology simple, accessible, and impactful. We aim to help individuals and businesses grow by delivering clean, efficient, and human-centered solutions.
          </p>
        </section>

        {/* Team */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-10 text-gray-800">Meet the Team</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;
