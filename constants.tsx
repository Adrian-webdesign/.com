
import React from 'react';
import { Service, Difference, FAQItem, Step } from './types';

export const SERVICES: Service[] = [
  {
    title: 'Criação de Landing Pages Profissionais',
    description: 'Desenvolvo landing pages personalizadas, com design moderno e estrutura estratégica, focadas em conversão e geração de leads.',
    icon: 'M12 4v16m8-8H4'
  },
  {
    title: 'Estrutura Otimizada para Conversão',
    description: 'Cada página é pensada para guiar o visitante de forma simples e objetiva até o contato, eliminando distrações.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z'
  },
  {
    title: 'Otimizações e Ajustes Pós-Entrega',
    description: 'Até 30 dias de ajustes gratuitos, garantindo que sua página esteja sempre alinhada aos objetivos do seu negócio.',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
  }
];

export const DIFFERENCES: Difference[] = [
  {
    title: 'Foco total em conversão',
    description: 'Não entregamos apenas design; entregamos resultados e captação de clientes.',
    size: 'large'
  },
  {
    title: 'Design para Negócios Reais',
    description: 'Soluções pensadas para quem precisa de movimento no caixa.',
    size: 'small'
  },
  {
    title: 'Atendimento Personalizado',
    description: 'Comunicação direta comigo, sem intermediários ou burocracia.',
    size: 'small'
  },
  {
    title: 'Site já Publicado',
    description: 'Entregamos sua página pronta para o uso, hospedada e funcional.',
    size: 'medium'
  },
  {
    title: 'Processo Simples',
    description: 'Transparência em cada etapa, do briefing à entrega final.',
    size: 'medium'
  }
];

export const PROCESS: Step[] = [
  { title: 'Passo 1', description: 'Entendimento do seu negócio e objetivo estratégico.' },
  { title: 'Passo 2', description: 'Criação da estrutura lógica e copywriting focado em vendas.' },
  { title: 'Passo 3', description: 'Design moderno, luxuoso e focado em experiência do usuário.' },
  { title: 'Passo 4', description: 'Implementação técnica e entrega do site publicado.' },
  { title: 'Passo 5', description: 'Período de ajustes finos e otimizações pós-lançamento.' }
];

export const FAQ: FAQItem[] = [
  {
    question: 'Qual o prazo médio de entrega?',
    answer: 'O prazo médio é de aproximadamente 14 dias úteis, variando de acordo com a complexidade do projeto.'
  },
  {
    question: 'Como funciona o pagamento?',
    answer: 'Trabalhamos com 50% de sinal no início do projeto e os 50% restantes na entrega final.'
  },
  {
    question: 'O site é entregue publicado?',
    answer: 'Sim! Sua landing page é entregue pronta para uso, publicada no Wix ou Hostinger conforme sua preferência.'
  },
  {
    question: 'Para quais negócios é indicado?',
    answer: 'Para negócios locais, prestadores de serviços, clínicas, profissionais liberais e empresas que precisam captar leads online.'
  },
  {
    question: 'Após os 30 dias, posso solicitar alterações?',
    answer: 'Sim. Oferecemos pacotes de manutenção ou cobranças individuais para ajustes solicitados após o período de cortesia.'
  }
];
