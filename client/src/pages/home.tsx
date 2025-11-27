import { useLanguage } from "@/lib/i18n";
import { useAuth } from "@/lib/mock-auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, FileText, Zap, Shield, Globe } from "lucide-react";

export default function Home() {
  const { t } = useLanguage();
  const { login } = useAuth();

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center text-center py-24 px-6 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-3xl space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" onClick={() => login()} className="text-lg px-8 h-12">
              {t('hero.cta')}
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 h-12">
              {t('nav.about')}
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 bg-muted/10" id="about">
        <div className="container mx-auto grid md:grid-cols-3 gap-8 max-w-5xl">
          <Card className="border-none shadow-none bg-transparent">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <Zap className="h-6 w-6" />
              </div>
              <CardTitle>Instant Extraction</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Upload any document and get structured data back in seconds. Powered by advanced AI models.
              </p>
            </CardContent>
          </Card>
          <Card className="border-none shadow-none bg-transparent">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <Shield className="h-6 w-6" />
              </div>
              <CardTitle>Enterprise Grade</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Secure, reliable, and scalable. Built for businesses that process thousands of documents.
              </p>
            </CardContent>
          </Card>
          <Card className="border-none shadow-none bg-transparent">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <Globe className="h-6 w-6" />
              </div>
              <CardTitle>Bilingual Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Native support for Thai and English documents, including complex layouts and mixed languages.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-6" id="pricing">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t('pricing.title')}</h2>
            <p className="text-muted-foreground">Choose the plan that fits your needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Tier */}
            <Card className="relative overflow-hidden border-muted">
              <CardHeader>
                <CardTitle className="text-2xl">{t('pricing.free')}</CardTitle>
                <CardDescription>Perfect for individuals and testing</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">฿0</span>
                  <span className="text-muted-foreground"> / month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>100 {t('pricing.pages_month')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>General Extraction</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Standard Support</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline" onClick={() => login()}>
                  Get Started
                </Button>
              </CardFooter>
            </Card>

            {/* Pro Tier */}
            <Card className="relative overflow-hidden border-primary shadow-lg">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                {t('pricing.most_popular')}
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{t('pricing.pro')}</CardTitle>
                <CardDescription>For growing businesses</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">฿990</span>
                  <span className="text-muted-foreground"> / month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>1,000 {t('pricing.pages_month')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>All 4 Pro Templates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Priority Support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Export to Excel/CSV</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" onClick={() => login()}>
                  Upgrade Now
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
