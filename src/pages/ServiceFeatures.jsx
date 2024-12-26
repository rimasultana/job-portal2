import { motion, AnimatePresence } from "framer-motion";

const ServiceFeatures = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
    exit: { opacity: 0, y: 50 }, // Reset state when leaving viewport
  };

  return (
    <section className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Why Choose Our Services?
          </h2>
          <p className="text-lg text-neutral">
            Discover the unique features that make our services stand out. We strive to
            provide excellence, convenience, and a seamless experience for our users.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {[
              {
                icon: "ri-user-star-line",
                title: "Personalized Service",
                description:
                  "Our platform tailors services to meet your individual needs, ensuring a customized and satisfying experience every time.",
              },
              {
                icon: "ri-shield-check-line",
                title: "Trusted and Secure",
                description:
                  "We ensure complete transparency and security at every step of the process, giving you peace of mind.",
              },
              {
                icon: "ri-customer-service-2-line",
                title: "24/7 Support",
                description:
                  "Our dedicated support team is always available to assist you with any questions or concerns.",
              },
              {
                icon: "ri-lightbulb-flash-line",
                title: "Innovative Solutions",
                description:
                  "We bring cutting-edge technology and creative solutions to address your challenges effectively.",
              },
              {
                icon: "ri-hand-heart-line",
                title: "Community-Driven",
                description:
                  "We foster a supportive community where service providers and seekers can thrive together.",
              },
              {
                icon: "ri-global-line",
                title: "Global Reach",
                description:
                  "Our platform connects users worldwide, offering a diverse range of services to suit every need.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }} // Reset when leaving and re-entering
                variants={cardVariants}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-center mb-4">
                  <div className="inline-block bg-primary text-white p-4 rounded-full">
                    <i className={`text-3xl ${feature.icon}`}></i>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-secondary text-center mb-2">
                  {feature.title}
                </h3>
                <p className="text-neutral text-center">{feature.description}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;
