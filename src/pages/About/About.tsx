import Transition from "../../components/Transition";

const experience = [
  {
    id: 1,
    company: "SOLUTION",
    role: "Técnico em Refrigeração / Diretor",
    period: "02/2019 até 05/2026",
    activities: [
      "Instalação de ar-condicionado split, inverter e convencional",
      "Manutenção preventiva e corretiva",
      "Higienização de evaporadoras e condensadoras",
      "Carga e recolhimento de gás refrigerante",
      "Identificação e reparo de vazamentos",
      "Troca de compressor, capacitor, sensor e placas",
      "Atendimento externo em residências e empresas",
      "Elaboração de orçamento e suporte ao cliente",
      "Gestão financeira, controle de custos e fluxo de caixa",
      "Emissão de O.S., NFe, boleto e organização de processos internos",
    ],
  },
  {
    id: 2,
    company: "MAKLAVE",
    role: "Sócio / Supervisor Operacional Técnico",
    period: "01/2025 até 03/2026",
    activities: [
      "Gestão de equipe técnica e acompanhamento em campo",
      "Organização de demandas, prazos e qualidade dos serviços",
      "Atendimento e suporte ao cliente com foco em solução",
      "Controle operacional, materiais e processos internos",
      "Supervisão de manutenção, instalações e atendimento técnico externo",
      "Apoio na administração da empresa e metas financeiras",
    ],
  },
];

const courses = [
  "Ensino Superior Completo - FATEG (2019)",
  "NR10 – Segurança em Instalações Elétricas - CLISMED",
  "NR35 – Trabalho em Altura - CLISMED",
  "Informática Avançada (Hardware e Software) - CNI",
  "Metodologia Scrum - Realiza Cursos",
];

const skills = [
  "Instalação de ar-condicionado split",
  "Manutenção preventiva e corretiva",
  "Trabalho em equipe",
  "Boa comunicação",
  "Organização e responsabilidade",
  "Facilidade no atendimento ao público",
  "Agilidade na solução de problemas",
  "Conhecimento em ferramentas técnicas",
  "Disponibilidade para viagens e serviços externos",
];

const extraInfo = [
  "Disponibilidade de horário",
  "Disponibilidade para início imediato",
  "Professor de Informática Avançada (Hardware e Software)",
  "Conhecimento em manutenção, configuração e suporte técnico em computadores",
  "Experiência com atendimento residencial e comercial",
];

const About = () => {
  return (
    <Transition onAnimationComplete={() => {}}>
      <main className="w-[100vw] overflow-y-auto px-11 pt-48 md:px-[15%] lg:px-[6%] lg:pr-0">
        <section className="mb-10 rounded-xl border-[1px] border-solid border-white/10 bg-[linear-gradient(110deg,#081726,45%,#10263b,55%,#081726)] bg-[length:400%_100%] bg-[position:50%_50%] px-12 py-12 text-base">
          <header className="flex flex-col gap-6">
            <h1 className="text-5xl font-semibold text-white tracking-tight">
              Lucas Martins de Barros Torres
            </h1>
            <p className="text-[17px] leading-[1.95] tracking-wide text-neutral-200 max-w-[85ch]">
              Técnico em Refrigeração com 31 anos, casado, pai de 4 filhos, atuação em instalação, manutenção preventiva e corretiva, e atendimento técnico para clientes residenciais e comerciais. Profissional com CNH A/B, veículo próprio e disponibilidade para atendimento em campo, com foco em qualidade, segurança e atendimento pessoal.
            </p>
          </header>
        </section>

        <section className="mb-10 rounded-xl border-[1px] border-solid border-white/10 bg-[linear-gradient(110deg,#081726,45%,#10263b,55%,#081726)] bg-[length:400%_100%] bg-[position:50%_50%] px-12 py-12 text-base">
          <h2 className="text-3xl font-semibold text-[#7efcff] mb-6 tracking-[0.03em]">Objetivo Profissional</h2>
          <p className="text-[17px] leading-[1.95] tracking-wide text-neutral-200 max-w-[85ch]">
            Atuar na área de refrigeração e climatização, contando com experiência técnica, organização e foco no atendimento ao cliente, para entregar serviços com eficiência, economia e responsabilidade.
          </p>
        </section>

        <section className="mb-10 rounded-xl border-[1px] border-solid border-white/10 bg-[linear-gradient(110deg,#081726,45%,#10263b,55%,#081726)] bg-[length:400%_100%] bg-[position:50%_50%] px-12 py-12 text-base">
          <h2 className="text-3xl font-semibold text-[#7efcff] mb-6 tracking-[0.03em]">Resumo Profissional</h2>
          <p className="text-[17px] leading-[1.95] tracking-wide text-neutral-200 max-w-[85ch]">
            Atuação consolidada em instalação, manutenção e suporte de equipamentos de refrigeração e ar-condicionado residencial, comercial e industrial. Experiência com diagnóstico de defeitos, limpeza de sistemas, troca de componentes e recuperação de equipamentos com agilidade.
          </p>
        </section>

        <section className="mb-10 rounded-xl border-[1px] border-solid border-white/10 bg-[linear-gradient(110deg,#081726,45%,#10263b,55%,#081726)] bg-[length:400%_100%] bg-[position:50%_50%] px-12 py-12 text-base">
          <h2 className="text-3xl font-semibold text-[#00bcd4] mb-8">Experiência Profissional</h2>
          {experience.map((item) => (
            <div key={item.id} className="mb-10 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_30px_rgba(0,188,212,0.1)]">
              <h3 className="text-2xl font-semibold text-white">{item.role}</h3>
              <p className="mt-2 text-sm text-neutral-400">{item.company} • {item.period}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-200 leading-[1.85] tracking-wide">
                {item.activities.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="mb-10 rounded-xl border-[1px] border-solid border-white/10 bg-[linear-gradient(110deg,#081726,45%,#10263b,55%,#081726)] bg-[length:400%_100%] bg-[position:50%_50%] px-12 py-12 text-base">
          <h2 className="text-3xl font-semibold text-[#00bcd4] mb-6">Formação e Cursos</h2>
          <ul className="list-disc space-y-3 pl-5 text-neutral-200 leading-[1.85] tracking-wide">
            {courses.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </section>

        <section className="mb-10 rounded-xl border-[1px] border-solid border-white/10 bg-[linear-gradient(110deg,#081726,45%,#10263b,55%,#081726)] bg-[length:400%_100%] bg-[position:50%_50%] px-12 py-12 text-base">
          <h2 className="text-3xl font-semibold text-[#00bcd4] mb-6">Habilidades</h2>
          <ul className="list-disc space-y-3 pl-5 text-neutral-200 leading-[1.85] tracking-wide">
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>

        <section className="mb-10 rounded-xl border-[1px] border-solid border-white/10 bg-[linear-gradient(110deg,#081726,45%,#10263b,55%,#081726)] bg-[length:400%_100%] bg-[position:50%_50%] px-12 py-12 text-base">
          <h2 className="text-3xl font-semibold text-[#00bcd4] mb-6">Informações Adicionais</h2>
          <ul className="list-disc space-y-3 pl-5 text-neutral-200 leading-[1.85] tracking-wide">
            {extraInfo.map((info, index) => (
              <li key={index}>{info}</li>
            ))}
          </ul>
        </section>
      </main>
    </Transition>
  );
};

export default About;
