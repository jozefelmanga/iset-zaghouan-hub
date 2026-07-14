"use client";

import { motion } from "framer-motion";
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
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white mb-6 border border-white/20 shadow-xl"
          >
            <GraduationCap size={32} strokeWidth={2} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
          >
            مستقبلك يبدأ من هنا، <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#12B8C8]">
              الإيزات بين يديك الآن!
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[15px] md:text-[17px] text-white/80 leading-relaxed mb-8 max-w-2xl"
          >
            ثلاث سنوات قد تبدو قصيرة، لكنها كافية لتغيير مسارك بالكامل. استغل كل فرصة، شارك في النوادي، تعلم مهارات جديدة، وتذكر دائماً أن يوم التخرج الذي تراه في هذه الصورة... ينتظرك أنت أيضاً لتكون بطله.
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
