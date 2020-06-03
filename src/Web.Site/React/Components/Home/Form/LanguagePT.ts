// eslint-disable-next-line no-unused-vars
import { ILanguage } from './ILanguage';

export default {
  title: 'Crie um relatório em PDF',
  subtitle: 'Por favor preencha este formulário e receba em teu email o relatório PDF!',
  question1: {
    text: 'Primeiro campo',
    title: 'Primeiro campo em Português',
    required: 'Este campo é obrigatório',
  },
  question2: {
    text: 'Segundo Campo',
    title: 'Segundo campo em Inglês',
    required: 'Este campo é obrigatório',
  },
  question3: {
    text: 'Terceiro Campo',
    title: 'Terceiro Campo em Português',
    required: 'Este campo é obrigatório',
  },
  question4: {
    text: 'Quarto Campo',
    title: 'Quarto Campo em Português',
    required: 'Este campo é obrigatório',
  },
  question5: {
    text: 'Quinto Campo',
    title: 'Quinto Campo em Português',
    required: 'Este campo é obrigatório',
  },
  approved: {
    label: 'Aprovado?',
    checked: 'Aprovado',
    unchecked: 'Reprovado',
  },
  english: {
    label: 'Relatório em Inglês',
    title: 'O relatório em Inglês é enviado por padrão',
  },
  portuguese: {
    label: 'Relatório em Português',
    title: 'Gostaria de receber uma versão em Português?',
  },
  info: {
    title: 'Qualquer informação adicional',
    text: 'Informações adicionais',
    max: 'Tamanho máximo de 950 caracteres',
  },
  name: {
    text: 'Nome',
    title: 'Por favor informe teu nome',
    required: 'Este campo é obrigatório',
    min: 'Tamanho mínimo de 6 caracteres',
    max: 'Tamanho máximo de 20 caracteres',
  },
  email: {
    text: 'Email',
    title: 'Por favor informe teu email',
    required: 'Este campo é obrigatório',
    email: 'Formato de email inválido',
  },
  button: {
    text: 'Gerar PDF',
    title: 'Clique aqui para salvar as informações e gerar um relatório',
  },
  feedback: {
    success: 'Informações Salvas com sucesso!',
    failure: 'Desculpe, mas as informações não foram salvas.',
  },
} as ILanguage;
