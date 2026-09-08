import { Button } from "@/components/ui/button";
import { PawPrint, ArrowRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import atosImg from "@/assets/gsd-atos.jpg.asset.json";
import brtMalesImg from "@/assets/brt-males.jpg.asset.json";
import gwp1Img from "@/assets/gwp-pointer-1.jpg.asset.json";

const PuppiesSection = () => {
  const previews = [
    { image: brtMalesImg.url, label: "Black Russian Terriers" },
    { image: atosImg.url, label: "German Shepherds" },
    { image: gwp1Img.url, label: "Pointer × Springer" },
  ];

  return (
    <section id="puppies" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm tracking-[0.2em] text-secondary uppercase mb-4">Breeding Program</p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
            Available Litters
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10">
            Our selective breeding program produces exceptional dogs from champion bloodlines.
          </p>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid grid-cols-3 gap-3 mb-8">
              {previews.map((p) => (
                <div key={p.label} className="relative rounded-xl overflow-hidden group">
                  <img
                    src={p.image}
                    alt={p.label}
                    className="w-full h-32 md:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-foreground/30 flex items-end p-3">
                    <span className="text-xs md:text-sm text-background font-semibold">{p.label}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-card border border-secondary/20 rounded-2xl p-8">
              <PawPrint className="w-8 h-8 text-secondary mx-auto mb-4" weight="fill" />
              <h3 className="font-heading text-xl text-foreground mb-3">
                Puppies Available Now
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Black Russian Terriers, bicolor German Shepherds, and Pointer × Springer males.
                Limited availability.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link to="/available-litters">
                  <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    View Available Litters
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/puppy-form">
                  <Button variant="outline" className="border-border">
                    Reserve Your Puppy
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PuppiesSection;
