import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';

const About = () => {
  const teamMembers = [
    {
      name: "Priya Sharma",
      role: "Founder & Spiritual Guide",
      image: "https://cdn2.iconfinder.com/data/icons/business-and-finance-related-hand-gestures/256/face_female_blank_user_avatar_mannequin-512.png",
      description: "With over 20 years of experience in tantric practices and spiritual guidance."
    },
    {
      name: "Rajiv Patel",
      role: "Meditation Instructor",
      image: "https://static.everypixel.com/ep-pixabay/0329/8099/0858/84037/3298099085884037069-head.png",
      description: "Specializes in combining traditional meditation techniques with modern mindfulness."
    },
    {
      name: "Anita Desai",
      role: "Healing Practitioner",
      image: "https://img.freepik.com/premium-vector/person-with-blue-shirt-that-says-name-person_1029948-7040.jpg",
      description: "Expert in energy healing and traditional tantric healing practices."
    }
  ];

  return (
    <div className="space-y-16">
      {/* Mission Section */}
      <section className="relative py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-display text-4xl md:text-5xl text-primary mb-6">
              Our Mission
            </h1>
            <p className="font-body text-xl text-neutral-600 mb-8">
              We are dedicated to preserving and sharing the ancient wisdom of Shakti energy,
              making it accessible and relevant for modern spiritual seekers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl text-primary text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Authenticity",
                description: "Staying true to traditional practices while adapting them for modern life."
              },
              {
                title: "Inclusivity",
                description: "Creating a welcoming space for all spiritual seekers."
              },
              {
                title: "Transformation",
                description: "Supporting personal growth and spiritual evolution."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="h-full">
                  <CardHeader className="border-b">
                    <CardTitle className="text-primary">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-body text-neutral-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl text-primary text-center mb-12">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="h-full">
                  <CardHeader className="flex flex-col items-center">
                    <Avatar className="w-24 h-24 mb-4">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-primary">{member.name}</CardTitle>
                    <p className="text-accent font-body">{member.role}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="font-body text-neutral-600 text-center">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 