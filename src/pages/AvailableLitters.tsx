import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PawPrint, Dog, Bone, WhatsappLogo, X } from "@phosphor-icons/react";
import atosImg from "@/assets/gsd-atos.jpg.asset.json";
import diegoImg from "@/assets/gsd-diego.jpg.asset.json";
import brtMalesImg from "@/assets/brt-males.jpg.asset.json";
import brtPuppyImg from "@/assets/brt-puppy.jpg.asset.json";
import gwp1Img from "@/assets/gwp-pointer-1.jpg.asset.json";
import gwp2Img from "@/assets/gwp-pointer-2.jpg.asset.json";
import gwp3Img from "@/assets/gwp-pointer-3.jpg.asset.json";

const litters = [
  {
    id: "gsd",
    icon: Dog,
    title: "German Shepherd — Bicolor Males",
    description:
      "Two exceptional bicolor males from champion bloodlines. Strong nerves, confident temperaments, and early socialization underway — ideal for protection work or a discerning family.",
    puppies: [
      { name: "Atos", image: atosImg.url, gender: "Male" },
      { name: "Diego", image: diegoImg.url, gender: "Male" },
    ],
  },
  {
    id: "brt",
    icon: PawPrint,
    title: "Black Russian Terrier Males — 3 Months",
    description:
      "Two robust males from our December-announced BRT program. Bold, steady, and already showing the breed's signature protective instinct. Fully vaccinated for their age.",
    puppies: [
      { name: "BRT Male 1", image: brtMalesImg.url, gender: "Male" },
      { name: "BRT Male 2", image: brtPuppyImg.url, gender: "Male" },
    ],
  },
  {
    id: "gwp",
    icon: Bone,
    title: "German Wirehaired Pointer × English Springer Spaniel Males — 4 Months",
    description:
      "Three energetic males from this versatile gundog cross. Intelligent, biddable, and full of drive — superb companions for active homes and field work.",
    puppies: [
      { name: "Male 1", image: gwp1Img.url, gender: "Male" },
      { name: "Male 2", image: gwp2Img.url, gender: "Male" },
      { name: "Male 3", image: gwp3Img.url, gender: "Male" },
    ],
  },
];

const AvailableLitters = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.2em] text-secondary uppercase mb-4">
              Kirangi Dogs Breeding Program
            </p>
            <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
              Available Litters
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Current puppies ready for reservation. Every Kirangi puppy comes from
              health-tested, champion bloodlines and leaves with our after sale
              services.
            </p>
          </div>

          <div className="space-y-20">
            {litters.map((litter) => (
              <section key={litter.id} id={litter.id}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <litter.icon className="w-6 h-6 text-secondary" weight="fill" />
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl text-foreground">
                    {litter.title}
                  </h2>
                </div>
                <p className="text-muted-foreground max-w-2xl mb-8">
                  {litter.description}
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {litter.puppies.map((puppy) => (
                    <Card
                      key={puppy.name}
                      className="bg-card border-border overflow-hidden"
                    >
                      <div className="relative">
                        <img
                          src={puppy.image}
                          alt={`${puppy.name} - ${litter.title}`}
                          className="w-full h-64 object-cover"
                          loading="lazy"
                        />
                        <Badge className="absolute top-3 left-3 bg-secondary text-secondary-foreground">
                          Available
                        </Badge>
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="font-heading text-xl text-foreground">
                          {puppy.name}
                        </CardTitle>
                        <p className="text-muted-foreground text-sm">
                          {puppy.gender} · Contact for pricing
                        </p>
                      </CardHeader>
                      <CardContent>
                        <Link to="/puppy-form">
                          <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                            Reserve {puppy.name}
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-20 text-center bg-card border border-border rounded-2xl p-10">
            <h3 className="font-heading text-2xl text-foreground mb-3">
              Not sure which puppy fits your home?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Talk to Joseph directly — we'll match you with the right temperament
              and bloodline for your needs.
            </p>
            <Button
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
              onClick={() => window.open("https://wa.me/254785535569", "_blank")}
            >
              <WhatsappLogo className="w-4 h-4 mr-2" weight="fill" />
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AvailableLitters;
