import { Card, CardContent } from "@/components/ui/card";
import { Globe, Bot, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Beautiful, fast websites for restaurants, cafes, and small businesses.",
  },
  {
    icon: Bot,
    title: "AI Solutions",
    description: "Chatbots, automation, and smart tools to grow your business.",
  },
  {
    icon: ShieldCheck,
    title: "Website Management",
    description: "Ongoing updates, security, and performance optimization.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center font-display text-4xl md:text-5xl mb-16 text-ice">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <Card key={i} className="bg-surface-raised border-surface-raised p-10 hover:border-cyan/30 transition-colors">
              <service.icon className="h-12 w-12 text-cyan mb-6" />
              <h3 className="font-display text-3xl mb-4">{service.title}</h3>
              <p className="text-muted">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}