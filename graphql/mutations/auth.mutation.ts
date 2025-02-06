// hooks/useSignup.ts
'use client';
import { User } from '@/types/user';
import { gql, useMutation } from '@apollo/client';

const SIGNUP_MUTATION = gql`
  mutation Signup($signupInput: SignupInput!) {
    Signup(signupInput: $signupInput) {
      name
      username
    }
  }
`;

export interface SignupInput {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface SignupResponse {
  Signup: {
    name: string;
    username: string;
  };
}

export const useSignup = () => {
  const [signup, { data, loading, error }] = useMutation<
    SignupResponse,
    { signupInput: SignupInput }
  >(SIGNUP_MUTATION);

  const handleSignup = async (input: SignupInput) => {
    const response = await signup({
      variables: { signupInput: input },
    });
    return response;
  };

  return { handleSignup, data, loading, error };
};

export type SigninInput = {
  email: string;
  password: string;
};
export type SigninResponse = {
  Signin: {
    token: string;
    user: User;
  };
};

const SIGNIN_MUTATION = gql`
  mutation Signin($signinInput: SigninInput!) {
    Signin(signinInput: $signinInput) {
      token
      user {
        id
        name
        username
        email
      }
    }
  }
`;

export const useSignin = () => {
  const [signin, { data, loading, error }] = useMutation<
    SigninResponse,
    { signinInput: SigninInput }
  >(SIGNIN_MUTATION);
  const handleSignin = async (input: SigninInput) => {
    const response = await signin({
      variables: { signinInput: input },
    });
    return response.data;
  };
  return { handleSignin, data, loading, error };
};

const SINGOUT_MUTATION = gql`
  mutation Signout {
    Signout {
      status
      message
    }
  }
`;
export type SignoutResponse = {
  Signout: {
    status: string;
    message: string;
  };
};
export const useSignout = () => {
  const [signout, { data, loading, error }] =
    useMutation<SignoutResponse>(SINGOUT_MUTATION);
  const handleSignout = async () => {
    const response = await signout();
    return response.data;
  };
  return { handleSignout, data, loading, error };
};
