import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const projects = [
  { title: "Restaurant Website", category: "Restaurant", description: "Online menu and reservation system.", image: "https://picsum.photos/id/1060/600/380" },
  { title: "Café Website", category: "Cafe", description: "Beautiful landing page with ordering.", image: "https://picsum.photos/id/1080/600/380" },
  { title: "E-commerce Store", category: "Shop", description: "Full online store with cart.", image: "https://picsum.photos/id/106/600/380" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-ink">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center font-display text-4xl md:text-5xl mb-16 text-ice">Our Work</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <Card key={i} className="overflow-hidden bg-surface border-surface-raised">
              <img src={p.image} alt={p.title} className="w-full h-56 object-cover" />
              <CardContent className="p-8">
                <div className="text-cyan text-sm mb-2">{p.category}</div>
                <h3 className="text-2xl mb-3">{p.title}</h3>
                <p className="text-muted">{p.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}