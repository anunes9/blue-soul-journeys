import { Plane } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import type { Destination } from "@/data/destinations";

const DestinationTransfers = ({
  destination,
}: {
  destination: Destination;
}) => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal animation="scale-in">
            <div className="group p-8 md:p-10 rounded-2xl bg-card border border-border/50 hover:border-aqua/30 hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-ocean-light to-aqua flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Plane className="w-7 h-7 text-primary-foreground" />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-serif text-navy mb-4">
                    Airport Transfers
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {destination.transfers}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default DestinationTransfers;
