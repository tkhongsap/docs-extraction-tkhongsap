import { useLanguage } from "@/lib/i18n";
import { Card, CardContent } from "@/components/ui/card";
import { Receipt, FileSpreadsheet, ScrollText, Landmark, FileText } from "lucide-react";
import { Link } from "wouter";

export default function Templates() {
  const { t } = useLanguage();

  const templates = [
    { id: 'bank', name: t('dash.template_bank'), desc: 'Extract transactions, balances, and account details', icon: Landmark, color: 'bg-blue-100 text-blue-600', border: 'hover:border-blue-200' },
    { id: 'invoice', name: t('dash.template_invoice'), desc: 'Extract vendor, line items, taxes, and totals', icon: Receipt, color: 'bg-green-100 text-green-600', border: 'hover:border-green-200' },
    { id: 'po', name: t('dash.template_po'), desc: 'Extract order details, items, and shipping info', icon: FileSpreadsheet, color: 'bg-purple-100 text-purple-600', border: 'hover:border-purple-200' },
    { id: 'contract', name: t('dash.template_contract'), desc: 'Extract parties, dates, and key clauses', icon: ScrollText, color: 'bg-orange-100 text-orange-600', border: 'hover:border-orange-200' },
    { id: 'general', name: t('nav.general'), desc: 'AI-powered extraction for any document type', icon: FileText, color: 'bg-slate-100 text-slate-600', border: 'hover:border-slate-200' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">{t('nav.templates')}</h1>
        <p className="text-muted-foreground">Select a template to start extracting data</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {templates.map((template) => (
          <Link key={template.id} href={`/extraction/${template.id}`}>
            <Card className={`h-full transition-all cursor-pointer hover:shadow-md border-2 border-transparent ${template.border}`}>
              <CardContent className="p-6 flex flex-col gap-4">
                <div className={`h-14 w-14 rounded-xl flex items-center justify-center ${template.color}`}>
                  <template.icon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{template.name}</h3>
                  <p className="text-sm text-muted-foreground">{template.desc}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
