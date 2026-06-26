"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles, AlertTriangle, Lightbulb, Coffee, Home, Users } from "lucide-react";
import { AppLayout } from "@/components/layout/AppLayout";
import { PageHeader, Card, Alert } from "@/components/ui/shared";

const generalTips = [
  "أعمل صداقة مع البروفات متاعك وخليك منظم معاهم، خاطر الصداقة مع البروف أهم من الكور وأهم من الامتحانات. كيما هكا، تنجم تسألهم كي ما تفهمش حاجة وتستفسر منهم. 😃👍",
  "رد بالك تغيب في المواد الأساسية اللي فيها كور، خاطر المعلومات اللي يعطوهم مهمين وهما الأساس. وزيد ديما دوكيمونت ناقص، وترسيلك تكون مع أصحابك باش يعطوك حاجة تطبعها.",
  "أعمل أصحاب من مختلف الشعب، وخاصة اللي أكبر منك في المستوى والعمر. كيما هكا، تاخذ منهم برشا نصايح وما يخلوكش تضيع. 👭👫",
  "في أول أسبوع، دور في الفاك الكل باش تعرف الطرقات وما تضيعش. 🏫👍😉",
  "ما تخليش نشاطك يقتصر على القراية، أدخل في نوادي وتعلم مهارات جديدة. 🤗⛾♲",
  "كي تصيرلك مشكلة في أوراقك ولا مع الإدارة، برا احكي مع ممثلين الطلبة وهم يفضوا مشكلتك. 🤗✊",
  "عيش حياتك ولبس كيما تحب، أما عمرك ما تعلق على لباس حد ولا على شكله 😄",
  "بطاقة طالب تعدي بيها امتحاناتك الكل، وساعات يطلبوها عليك. 💳👮",
  "رد بالك تخلي صاكك بجنب حد، خليه ديما في جنبك. 👜",
];

const restoTips = [
  "إذا ما شبعتش، تنجم تعاود دوبل، ما فيها حتى قلق. خاطر مش كيف داركم باش تلقى ماكلة تستنى فيك. 🍱🍲🤗",
  "حاول تمشي للرستو بكري، وما تسألنيش علاش، توة بعد تعرف وحدك. 😅",
  "إذا نسيت الجتون، تنجم تاكل ببطاقة الخدمات الجامعية اللي يعطوهالك نهار اللي ترسم في الفوايي، وتستظهر بيها في الرستو.",
  "ما تعودش أصحابك بعطيان التيكيات، خاطر كي يحلبوا عليك، ما تنجمش تسلك منهم. 🤐",
];

const foyerTips = [
  "أول ما تستلم مفتاح الغرفة، برا ديراكت أعمل منه زوز نسخ، استعمل واحد وخبي الآخر. 🔑🔑",
  "اشري كادنا للكازيي وما تخليهش محلول مشرع، ماكش في داركم. كيف كيف، خبي نسخ من مفتاح الكادنا، تلقاه وقت الشدة. 🔐🔑🔑",
  "حاول تختار بيتك في الطابق الأول ولا الثاني. 🏬2️⃣1️⃣",
  "اشري فاليز تتسكر بالكود ولا اعمللها كادنا صغيرة، باش ما ينجم حد يحلها في غيابك. 🔒🎒",
  "رد بالك تعمل على زميلك، يسكر الباب وراك، ديما ضمن عليه، خصوصًا كي تمشي تقرا. 🔏",
  "ما تجيبش مواد التنظيف من داركم، اشريهم أول نهار كي تجي تسكن من البلاصة اللي تسكن فيها. 🧽🧼🧹🧻",
  "رد بالك تغيب على ماعونك ودبشك، ما تسلف من حد وما تسلف حد. ⛔👖👕👗🍵🍳🍽🚫🚫",
  "اشري معطر جو. 💨🌸🌸",
  "خلي عندك صندوق إسعافات فيه الحاجات الأساسية اللي تحتاجها: دواء للسخانة، الزكام، المعدة، باش ما تبقاش متمرمد. 💊🩹🩺",
  "إذا تحب تنجح بالحق، وما تكثرش الخلط في الفوايي، يكفيك كعبتين يكونوا رايضين، راهو الصاحب ساحب. 🤓✌",
  "خبي فلوسك في كارت جان، وخلي عندك كان مصروف الجمعة، وما تصرفش فلوسك على حاجات تافهة. 🛍️🛒🎁",
  "كي يتصبولك فلوس، ديما خلي في الكارت حق ركوبك، ما تجبدوش. 🚎💸",
  "أوراقك وكوارطك وفلوسك ديما فوقك. 💳🔑💵📑🖇️",
  "بالنسبة للبنات، عمرك ما توخر في المرواح للفوايي، راك تتمرمد. 🌃🚫🚫",
];

const contributors = [
  "Youssef Ben Salem",
  "Zaineb Ismail",
  "Balkis Thebti",
  "Asma Bej",
  "Siwar Bouazizi",
  "Loua Matri",
  "Ghada Az",
  "Adel Aiouaz",
  "Améni Jdidi",
];

export default function BonusPage() {
  return (
    <AppLayout>
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "clamp(24px, 5vw, 40px) clamp(16px, 5vw, 32px)", width: "100%", boxSizing: "border-box" }}>
        
        {/* Page Header */}
        <PageHeader
          icon={Sparkles}
          label="الأنشطة والحياة"
          title="نصائح وإهداء"
          subtitle="مجموعة نصائح وتوجيهات للطلبة الجدد وشكر خاص للمساهمين في الدليل"
          category="life"
        />

        {/* Introduction */}
        <div style={{ marginBottom: "36px" }}>
          <Alert title="مرحباً بكم في إيزات زغوان" variant="success">
            الدليل هذا معمول بالكامل ليعاونكم تبداو خطواتكم الأولى في الحياة الجامعية بكل راحة وثقة. إليكم أهم النصائح الذهبية من طلبة سابقين مروا بنفس تجربتكم!
          </Alert>
        </div>

        {/* General Tips */}
        <div style={{ marginBottom: "36px" }}>
          <h2 style={{ fontSize: "18px", fontWeight: 700, color: "var(--color-text)", marginBottom: "16px", display: "flex", alignItems: "center", gap: "10px" }}>
            <Lightbulb size={20} style={{ color: "var(--color-accent)" }} />
            نصائح عامة حول الدراسة والفاك
          </h2>
          <Card elevation="raised" padding="24px">
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {generalTips.map((tip, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "12px", paddingBottom: "12px", borderBottom: idx < generalTips.length - 1 ? "1px solid var(--color-border)" : "none" }}>
                  <span style={{ fontSize: "14px", fontWeight: "bold", color: "var(--color-secondary)", marginTop: "2px" }}>#</span>
                  <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{tip}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Resto Tips */}
        <div style={{ marginBottom: "36px" }}>
          <h2 style={{ fontSize: "18px", fontWeight: 700, color: "var(--color-text)", marginBottom: "16px", display: "flex", alignItems: "center", gap: "10px" }}>
            <Coffee size={20} style={{ color: "#F97316" }} />
            في المطعم الجامعي (الريستو)
          </h2>
          <Card elevation="raised" padding="24px">
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {restoTips.map((tip, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "12px", paddingBottom: "12px", borderBottom: idx < restoTips.length - 1 ? "1px solid var(--color-border)" : "none" }}>
                  <span style={{ fontSize: "14px", fontWeight: "bold", color: "#F97316", marginTop: "2px" }}>#</span>
                  <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{tip}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Foyer Tips */}
        <div style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "18px", fontWeight: 700, color: "var(--color-text)", marginBottom: "16px", display: "flex", alignItems: "center", gap: "10px" }}>
            <Home size={20} style={{ color: "#12B8C8" }} />
            داخل المبيت الجامعي
          </h2>
          <Card elevation="raised" padding="24px">
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {foyerTips.map((tip, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "12px", paddingBottom: "12px", borderBottom: idx < foyerTips.length - 1 ? "1px solid var(--color-border)" : "none" }}>
                  <span style={{ fontSize: "14px", fontWeight: "bold", color: "#12B8C8", marginTop: "2px" }}>#</span>
                  <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{tip}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Dedication & Contributors */}
        <div style={{ marginBottom: "20px" }}>
          <Card elevation="feature" padding="30px">
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "16px" }}>
              <div 
                style={{ 
                  width: "56px", height: "56px", borderRadius: "50%", background: "rgba(239,68,68,0.08)", color: "#EF4444",
                  display: "flex", alignItems: "center", justifyContent: "center"
                }}
              >
                <Heart size={28} fill="#EF4444" strokeWidth={1.5} />
              </div>
              <div>
                <h3 style={{ fontSize: "20px", fontWeight: 800, color: "var(--color-primary)", marginBottom: "8px" }}>إهداء وشكر خاص</h3>
                <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", lineHeight: 1.7, maxWidth: "580px", margin: "0 auto 20px" }}>
                  نحبو نهديو الدليل هذا لكل طالب وطالبة يسعوا لتحقيق طموحاتهم ويتقدموا في مسيرتهم الدراسية. 
                  شكر من الأعماق لكل من ساهم بوقتو ومعلوماتهم وخبرتو باش نخرجو بالعمل المزيان هذا:
                </p>
                
                {/* Contributors Grid */}
                <div 
                  style={{ 
                    display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: "12px",
                    maxWidth: "600px", margin: "0 auto", width: "100%", boxSizing: "border-box"
                  }}
                >
                  {contributors.map((name) => (
                    <div 
                      key={name}
                      style={{
                        padding: "8px 16px",
                        borderRadius: "10px",
                        background: "var(--color-surface)",
                        border: "1px solid var(--color-border)",
                        fontSize: "13px",
                        fontWeight: 600,
                        color: "var(--color-text)",
                        boxShadow: "var(--shadow-card)"
                      }}
                    >
                      @{name} ❤️
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>

      </div>
    </AppLayout>
  );
}
