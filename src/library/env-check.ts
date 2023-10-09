import * as yup from 'yup';

const envSchema = yup.object().shape({
  API_URL: yup.string().required()
})

let _env;

try {
  _env = envSchema.validateSync(process.env, {
    abortEarly: false,
  });
} catch (err: any) {
  console.log('❌ Invalid environment variables.');
  throw new Error('Invalid environment variables.');
}

export const env = _env;