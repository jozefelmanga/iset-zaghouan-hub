import { Card } from "@/components/ui/Card";
import { Building2 } from "@/lib/icons";
import { departmentList } from "@/data/departments";

export function InstitutionInfoSection() {
  return (
    <section className="motion-reveal mb-8 [animation-delay:0.15s]" dir="rtl">
      <Card
        elevation="flat"
        className="relative overflow-hidden"
      >
        <div className="flex flex-col items-start gap-4 sm:flex-row">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-[rgba(18,184,200,0.1)]">
            <Building2 size={24} className="text-[#12B8C8]" />
          </div>
          <div>
            <h2 className="mb-3 flex items-center gap-2 text-[17px] font-extrabold text-[var(--color-text)]">
              عن المعهد العالي للدراسات التكنولوجية بزغوان
            </h2>
            <p className="m-0 mb-2 text-[14.5px] leading-[1.7] text-[var(--color-text-secondary)]">
              تأسّست إيزات زغوان (ISET Zaghouan) <span className="font-bold text-[var(--color-primary)]">عام 2002</span>، وهي فاك عمومية تابعة لـ <span className="font-semibold text-[var(--color-text)]">وزارة التعليم العالي والبحث العلمي</span> وتحت إشراف الإدارة العامة للدراسات التكنولوجية (<span className="font-semibold text-[var(--color-text)]" dir="ltr">DGET</span>).
            </p>
            <p className="m-0 text-[14.5px] leading-[1.7] text-[var(--color-text-secondary)]">
              عندها توّا <span className="font-bold text-[var(--color-secondary-text)]">أكثر من 20 سنة</span> وهي تعطي في تكوين تطبيقي يجمع بين القراية النظري وتطبيقات سوق الشغل (الستاجات)، وفيها حالياً <span className="font-bold text-[var(--color-accent-text)]">{departmentList.length} أقسام رئيسية</span>.
            </p>
          </div>
        </div>
      </Card>
    </section>
  );
}
