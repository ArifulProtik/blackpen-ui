'use client';
import AuthForm from '@/components/AuthForm';
import { AUTH_FORM_TYPE } from '@/constants/form';
import { SignupInput, useSignup } from '@/graphql/mutations/auth.mutation';
import { SignUpSchema } from '@/lib/form-validation';
import { redirect } from 'next/navigation';

const SIngupForm = () => {
  const { handleSignup, data, loading, error } = useSignup();

  // The onSubmit function passed to AuthForm
  const onSubmit = async (formData: {
    name: string;
    email: string;
    password: string;
    confirm_password: string;
  }) => {
    const signupData: SignupInput = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirm_password,
    };
    await handleSignup(signupData);
  };

  if (data && !error) {
    redirect('/signin');
  }
  return (
    <>
      {error && <p className="text-red-500">{error.message}</p>}
      <AuthForm
        type={AUTH_FORM_TYPE.Signup}
        schema={SignUpSchema}
        defaultValues={{
          name: '',
          email: '',
          password: '',
          confirm_password: '',
        }}
        loading={loading}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default SIngupForm;
