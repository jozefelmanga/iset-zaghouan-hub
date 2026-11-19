import { GraduationCap } from "@/lib/icons";
import { Container } from "@/components/ui/layout";

export function MotivationalCTASection() {
  return (
    <section 
      className="relative w-full py-24 mt-20"
      style={{
        backgroundImage: `linear-gradient(rgba(11, 31, 58, 0.82), rgba(11, 31, 58, 0.95)), url('/images/footer.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center 30%",
        backgroundAttachment: "fixed",
      }}
    >
      <Container size="content" className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div
            className="motion-reveal w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white mb-6 border border-white/20 shadow-xl"
          >
            <GraduationCap size={32} strokeWidth={2} />
          </div>

          <h2
            className="motion-reveal [animation-delay:0.1s] text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
          >
            مستقبلك يبدأ من هنا، <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#12B8C8]">
              الإيزات بين يديك الآن!
            </span>
          </h2>

          <p
            className="motion-reveal [animation-delay:0.2s] text-[15px] md:text-[17px] text-white/80 leading-relaxed mb-8 max-w-2xl"
          >
            ثلاث سنوات قد تبدو قصيرة، لكنها كافية لتغيير مسارك بالكامل. استغل كل فرصة، شارك في النوادي، تعلم مهارات جديدة، وتذكر دائماً أن يوم التخرج الذي تراه في هذه الصورة... ينتظرك أنت أيضاً لتكون بطله.
          </p>
        </div>
      </Container>
    </section>
  );
}
