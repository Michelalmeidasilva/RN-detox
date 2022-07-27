import * as Yup from 'yup';

Yup.setLocale({
  mixed: {
    required: 'Campo obrigatório'
  }
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Informe um e-mail válido').required(),
  password: Yup.string().required().min(6, 'Senha deve ter mais que 6 caracteres')
});

export const NaverAddSchema = Yup.object().shape({
  name: Yup.string().required(),
  job_role: Yup.string().required(),
  url: Yup.string().required(),
  project: Yup.string().required(),
  birthdate: Yup.date().required(),
  admission_date: Yup.date().required()
});

export const NaverEditSchema = Yup.object().shape({
  name: Yup.string().required(),
  job_role: Yup.string().required(),
  url: Yup.string().required(),
  project: Yup.string().required(),
  birthdate: Yup.date().required(),
  admission_date: Yup.date().required()
});
