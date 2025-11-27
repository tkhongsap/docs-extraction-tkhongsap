import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Sparkles, Table2, Building2, Receipt, FileCheck, ScrollText } from 'lucide-react';
import { cn } from '@/lib/utils';
import { staggerContainer, staggerItem } from '@/lib/animations';

interface DemoField {
  label: string;
  value: string;
  confidence: number;
}

interface DemoTemplate {
  id: string;
  name: string;
  icon: typeof FileText;
  fields: DemoField[];
}

const demoTemplates: DemoTemplate[] = [
  {
    id: 'invoice',
    name: 'Invoice',
    icon: Receipt,
    fields: [
      { label: 'Vendor', value: 'Tech Solutions Co., Ltd.', confidence: 99 },
      { label: 'Invoice No.', value: 'INV-2024-0847', confidence: 98 },
      { label: 'Amount', value: '฿ 45,750.00', confidence: 99 },
      { label: 'Due Date', value: '15 Dec 2024', confidence: 95 },
      { label: 'Tax ID', value: '0105556123456', confidence: 97 },
    ],
  },
  {
    id: 'bank',
    name: 'Bank Statement',
    icon: Building2,
    fields: [
      { label: 'Account Name', value: 'ABC Company Limited', confidence: 99 },
      { label: 'Account No.', value: '123-4-56789-0', confidence: 99 },
      { label: 'Statement Period', value: 'Nov 1-30, 2024', confidence: 96 },
      { label: 'Opening Balance', value: '฿ 1,234,567.89', confidence: 98 },
      { label: 'Closing Balance', value: '฿ 1,456,789.12', confidence: 98 },
    ],
  },
  {
    id: 'contract',
    name: 'Contract',
    icon: ScrollText,
    fields: [
      { label: 'Contract Type', value: 'Service Agreement', confidence: 94 },
      { label: 'Party A', value: 'ABC Corporation', confidence: 97 },
      { label: 'Party B', value: 'XYZ Services Ltd.', confidence: 96 },
      { label: 'Effective Date', value: '1 Jan 2025', confidence: 98 },
      { label: 'Contract Value', value: '฿ 2,400,000.00', confidence: 95 },
    ],
  },
  {
    id: 'po',
    name: 'Purchase Order',
    icon: FileCheck,
    fields: [
      { label: 'PO Number', value: 'PO-2024-1234', confidence: 99 },
      { label: 'Supplier', value: 'Global Supplies Inc.', confidence: 97 },
      { label: 'Total Items', value: '15 items', confidence: 98 },
      { label: 'Total Amount', value: '฿ 128,500.00', confidence: 99 },
      { label: 'Delivery Date', value: '20 Dec 2024', confidence: 94 },
    ],
  },
];

interface FeatureDemoProps {
  className?: string;
}

export function FeatureDemo({ className }: FeatureDemoProps) {
  const [activeTemplate, setActiveTemplate] = useState(demoTemplates[0]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showResults, setShowResults] = useState(true);

  const handleTemplateChange = (template: DemoTemplate) => {
    setIsProcessing(true);
    setShowResults(false);

    setTimeout(() => {
      setActiveTemplate(template);
      setIsProcessing(false);
      setShowResults(true);
    }, 800);
  };

  return (
    <div className={cn('', className)}>
      {/* Template Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {demoTemplates.map((template) => {
          const Icon = template.icon;
          const isActive = template.id === activeTemplate.id;

          return (
            <button
              key={template.id}
              onClick={() => handleTemplateChange(template)}
              className={cn(
                'inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium',
                'transition-all duration-200',
                isActive
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
              )}
            >
              <Icon className="h-4 w-4" />
              {template.name}
            </button>
          );
        })}
      </div>

      {/* Demo Area */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Document Preview */}
        <div className="relative">
          <div className="aspect-[3/4] rounded-2xl bg-muted/30 border border-border/50 overflow-hidden">
            {/* Mock Document */}
            <div className="p-6 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <activeTemplate.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">{activeTemplate.name}</div>
                  <div className="text-xs text-muted-foreground">Sample Document</div>
                </div>
              </div>

              {/* Mock Content Lines */}
              <div className="space-y-3 flex-1">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className={cn(
                      'h-3 rounded bg-muted-foreground/10',
                      i % 3 === 0 ? 'w-1/2' : i % 2 === 0 ? 'w-3/4' : 'w-full'
                    )}
                  />
                ))}
              </div>

              {/* Mock Table */}
              <div className="mt-4 p-3 rounded-lg bg-muted/50">
                <div className="grid grid-cols-3 gap-2">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-2 rounded bg-muted-foreground/10" />
                  ))}
                </div>
              </div>
            </div>

            {/* Processing Overlay */}
            <AnimatePresence>
              {isProcessing && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="flex flex-col items-center gap-3"
                  >
                    <Sparkles className="h-8 w-8 text-primary" />
                    <span className="text-sm font-medium text-muted-foreground">
                      Extracting data...
                    </span>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Results Table */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Table2 className="h-5 w-5 text-primary" />
            <h3 className="font-semibold">Extracted Data</h3>
          </div>

          <AnimatePresence mode="wait">
            {showResults && (
              <motion.div
                key={activeTemplate.id}
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="space-y-3"
              >
                {activeTemplate.fields.map((field, i) => (
                  <motion.div
                    key={i}
                    variants={staggerItem}
                    className="flex items-center justify-between p-4 rounded-xl bg-card border border-border/50"
                  >
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">
                        {field.label}
                      </div>
                      <div className="font-medium">{field.value}</div>
                    </div>
                    <div
                      className={cn(
                        'text-xs font-medium px-2 py-1 rounded-full',
                        field.confidence >= 95
                          ? 'bg-emerald-500/10 text-emerald-600'
                          : field.confidence >= 90
                          ? 'bg-amber-500/10 text-amber-600'
                          : 'bg-red-500/10 text-red-600'
                      )}
                    >
                      {field.confidence}%
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
