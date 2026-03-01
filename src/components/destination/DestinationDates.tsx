import { CalendarDays } from "lucide-react";
import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/ScrollReveal";
import type { Destination, DestinationDate } from "@/data/destinations";

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function StatusBadge({
  status,
  labels,
}: {
  status: DestinationDate["status"];
  labels: Record<string, string>;
}) {
  const styles = {
    available: "bg-aqua/20 text-ocean-deep",
    limited: "bg-amber-100 text-amber-700",
    "sold-out": "bg-red-100 text-red-600",
  };

  return (
    <span
      className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${styles[status]}`}
    >
      {labels[status]}
    </span>
  );
}

const DestinationDates = ({ destination }: { destination: Destination }) => {
  const t = useTranslations("destinationPage");

  const statusLabels = {
    available: t("statusAvailable"),
    limited: t("statusLimited"),
    "sold-out": t("statusSoldOut"),
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-ocean-deep/10 px-4 py-2 rounded-full mb-8">
                <CalendarDays className="w-4 h-4 text-ocean-deep" />
                <span className="text-sm font-medium text-ocean-deep tracking-wide uppercase">
                  {t("datesLabel")}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-serif text-navy mb-6 leading-tight">
                {t("datesHeading")}
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {destination.dates.map((tripDate, index) => (
              <ScrollReveal
                key={tripDate.startDate}
                animation="fade-up"
                delay={index * 100}
              >
                <div className="group p-6 md:p-8 rounded-2xl bg-card border border-border/50 hover:border-aqua/30 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-ocean-light to-aqua flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <CalendarDays className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-lg font-medium text-navy">
                          {formatDate(tripDate.startDate)} &mdash;{" "}
                          {formatDate(tripDate.endDate)}
                        </p>
                        {tripDate.note && (
                          <p className="text-sm text-muted-foreground mt-1">
                            {tripDate.note}
                          </p>
                        )}
                      </div>
                    </div>
                    <StatusBadge
                      status={tripDate.status}
                      labels={statusLabels}
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationDates;
