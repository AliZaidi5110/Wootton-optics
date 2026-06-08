import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="py-20 gradient-cta">
      <div className="container text-center">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready for Expert Care?
        </h2>
        <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
          Book your free consultation today at our Northampton clinic on Wootton Hope Drive.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
          <Button href="/appointments?service=eye-test" variant="accent" size="lg">
            Book Eye Test
          </Button>
          <Button href="/appointments?service=hearing-test" variant="white" size="lg">
            Book Hearing Test
          </Button>
        </div>
        <p className="text-white/80 text-sm">Same-day appointments available where possible</p>
      </div>
    </section>
  );
}
