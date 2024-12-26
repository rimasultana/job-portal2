import { motion } from "framer-motion";
import service from "../assets/team/service.jpg";

const AboutSection = () => {
  return (
    <section className="bg-base-200 py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            About ServiceSphere
          </h2>
          <p className="text-lg text-neutral mb-8">
            ServiceSphere is a platform designed to bring people together through a unique 
            service-sharing experience. Whether you're looking to book a service or share 
            your expertise with others, ServiceSphere empowers you to connect, collaborate, 
            and grow in an ever-evolving marketplace.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={service}
              alt="About ServiceSphere"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <div>
            <h3 className="text-2xl font-bold text-secondary mb-4">
              Why Choose Us?
            </h3>
            <ul className="list-disc list-inside text-neutral space-y-3">
              <li>Seamless user experience for both service providers and seekers.</li>
              <li>Secure and transparent booking process.</li>
              <li>Built-in tools for service management and status updates.</li>
              <li>A growing community of skilled and trusted users.</li>
            </ul>
            <button className="btn btn-primary mt-6">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
