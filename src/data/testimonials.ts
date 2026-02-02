export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Scale Now Digital transformed our entire digital strategy. Within 6 months, our organic traffic increased by 340% and our cost per acquisition dropped by 60%. Their integrated approach truly delivers.",
    author: "Palli Akshith",
    role: "CEO",
    company: "Abhivorn Technologies"
  },
  {
    id: 2,
    quote: "The team's expertise in global expansion was exactly what we needed. They helped us launch in 5 new markets with localised campaigns that actually resonated with each audience. Revenue from international markets is now 45% of our total.",
    author: "Abhiram",
    role: "VP Marketing",
    company: "Costita"
  },
  {
    id: 3,
    quote: "Their AI-powered creative services are game-changing. We're producing 10x more content at a fraction of the cost, and performance has never been better. The ROI on our Meta campaigns improved by 180%.",
    author: "Sampath",
    role: "Marketing Director",
    company: "Next Gen Hiring"
  },
  {
    id: 4,
    quote: "Finally, an agency that speaks our language. Transparent reporting, data-driven decisions, and real results. Our e-commerce conversion rate doubled in just 3 months. Highly recommend for any D2C brand.",
    author: "Sai Kumar",
    role: "Founder",
    company: "Elevate Rootz"
  }
];
