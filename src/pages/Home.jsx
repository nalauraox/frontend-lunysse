import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Zap, Users, Calendar, Activity, FileText } from 'lucide-react';
import { Button } from '../components/Button';

const features = [
  {
    icon: Calendar,
    title: 'Agendamentos Descomplicados',
    description: 'Organize e gerencie compromissos com facilidade e eficiência.',
  },
  {
    icon: Shield,
    title: 'Segurança em Primeiro Lugar',
    description: 'Proteção avançada para garantir a confidencialidade dos dados.',
  },
  {
    icon: Activity,
    title: 'Análises Inteligentes',
    description: 'Insights automáticos para aprimorar o acompanhamento dos pacientes.',
  },
  {
    icon: Users,
    title: 'Colaboração Social',
    description: 'Conecte equipes e instituições em prol da saúde mental comunitária.',
  },
  {
    icon: FileText,
    title: 'Registro de Sessões',
    description: 'Documente cada atendimento de forma clara e acessível para consulta.',
  },
  {
    icon: Zap,
    title: 'Design Empático',
    description: 'Interface intuitiva e confortável para todos os usuários.',
  }
];

export const Home = () => {

  const scrollToFeatures = () => {
    const el = document.getElementById('features');
    if(el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col text-white">

      {/* SOBRE */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">O que é o Lunysse?</h2>
          <p className="text-lg leading-relaxed mb-4">
            Uma plataforma feita para conectar profissionais e pacientes de forma humana e organizada.
            Pensada para quem oferece atendimento psicológico de forma voluntária ou acadêmica.
          </p>
          <p className="text-lg">
            Nosso propósito é democratizar o acesso à saúde mental com ferramentas simples e eficazes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img src="/logo.svg" alt="Mockup Lunysse" loading="lazy" className="rounded-2xl" />
        </motion.div>
      </section>

      {/* FUNCIONALIDADES */}
      <section id="features" className="py-24 px-6 max-w-7xl mx-auto space-y-20">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-md will-change-transform">
                <feature.icon className="w-10 h-10 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
              <p className="text-lg">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* HERO */}
      <section className="py-36 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="w-28 h-28 mx-auto mb-6 p-2 rounded-xl shadow-md">
            <img src="/logo.png" alt="Lunysse" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-5xl font-bold mb-4">Lunysse</h1>
          <p className="text-xl max-w-2xl mx-auto mb-10">
            Plataforma digital para gestão e agendamento psicológico com foco em projetos sociais.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register">
              <Button size="lg" className="px-8 text-lg">Criar Conta</Button>
            </Link>
            <Link to="/login">
              <Button variant="secondary" size="lg" className="px-8 text-lg">Acessar Plataforma</Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">Pronto para fazer a diferença?</h2>
          <p className="text-xl mb-10">
            Junte-se a uma rede de voluntários, estudantes e profissionais que usam tecnologia para democratizar a saúde mental.
          </p>
          <Link to="/register">
            <Button size="lg" className="text-xl px-10 py-5 rounded-xl font-semibold">
              Começar Agora Gratuitamente
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};
