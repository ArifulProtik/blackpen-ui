import { User } from '@/types/user';
import { gql, useQuery } from '@apollo/client';

export type MeResponse = {
  me: User;
};

const USER_ME_QUERY = gql`
  query Me {
    me {
      id
      name
      username
      email
    }
  }
`;

export const useMeQuery = () => {
  const { data, loading, error } = useQuery<MeResponse>(USER_ME_QUERY);
  return { data, loading, error };
};
