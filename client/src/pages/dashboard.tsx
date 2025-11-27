import { useLanguage } from "@/lib/i18n";
import { useAuth } from "@/lib/mock-auth";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, FileSpreadsheet, Receipt, ScrollText, Landmark, ArrowRight, Clock } from "lucide-react";
import { Link } from "wouter";

export default function Dashboard() {
  const { t } = useLanguage();
  const { user } = useAuth();

  const templates = [
    { id: 'bank', name: t('dash.template_bank'), icon: Landmark, color: 'bg-blue-100 text-blue-600' },
    { id: 'invoice', name: t('dash.template_invoice'), icon: Receipt, color: 'bg-green-100 text-green-600' },
    { id: 'po', name: t('dash.template_po'), icon: FileSpreadsheet, color: 'bg-purple-100 text-purple-600' },
    { id: 'contract', name: t('dash.template_contract'), icon: ScrollText, color: 'bg-orange-100 text-orange-600' },
  ];

  const recentDocs = [
    { id: 1, name: 'Invoice_Oct2023.pdf', type: 'Invoice', date: '2 mins ago', status: 'Completed' },
    { id: 2, name: 'BankStmt_SCB.pdf', type: 'Bank Statement', date: '1 hour ago', status: 'Completed' },
    { id: 3, name: 'Contract_Draft_v2.pdf', type: 'Contract', date: 'Yesterday', status: 'Review Needed' },
  ];

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{t('dash.welcome')}</h1>
          <p className="text-muted-foreground mt-1">Here's what's happening with your documents today.</p>
        </div>
        <Button asChild>
          <Link href="/extraction/general">
            <FileText className="mr-2 h-4 w-4" />
            {t('dash.quick_start')}
          </Link>
        </Button>
      </div>

      {/* Main Extraction Options */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="md:col-span-2 border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              {t('nav.general')}
            </CardTitle>
            <CardDescription>{t('dash.general_desc')}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-32 border-2 border-dashed border-primary/20 rounded-lg flex flex-col items-center justify-center bg-background/50 hover:bg-background transition-colors cursor-pointer">
              <Link href="/extraction/general" className="flex flex-col items-center w-full h-full justify-center">
                <div className="p-2 rounded-full bg-primary/10 mb-2">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-primary">Click to start general extraction</span>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t('common.usage')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-6">
              <div className="text-4xl font-bold text-primary mb-1">{user?.usage}</div>
              <div className="text-sm text-muted-foreground">pages processed</div>
              <div className="mt-4 h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-primary" style={{ width: `${(user!.usage / user!.limit) * 100}%` }} />
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>0</span>
                <span>{user?.limit} limit</span>
              </div>
              <Button variant="outline" size="sm" className="mt-4 w-full">
                {t('common.upgrade')}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Templates Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">{t('nav.templates')}</h2>
          <Link href="/templates" className="text-sm text-primary hover:underline flex items-center">
            View all <ArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {templates.map((template) => (
            <Link key={template.id} href={`/extraction/${template.id}`}>
              <Card className="hover:border-primary/50 transition-all cursor-pointer hover:shadow-sm">
                <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                  <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${template.color}`}>
                    <template.icon className="h-6 w-6" />
                  </div>
                  <div className="font-medium text-sm">{template.name}</div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent History */}
      <div>
        <h2 className="text-lg font-semibold mb-4">{t('dash.recent')}</h2>
        <Card>
          <CardContent className="p-0">
            <div className="divide-y">
              {recentDocs.map((doc) => (
                <div key={doc.id} className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-muted rounded">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">{doc.name}</div>
                      <div className="text-xs text-muted-foreground">{doc.type}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="mr-1 h-3 w-3" />
                      {doc.date}
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      doc.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {doc.status}
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
