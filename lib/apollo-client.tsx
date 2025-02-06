'use client';
// ^ this file needs the "use client" pragma

import { HttpLink } from '@apollo/client';
import {
  ApolloClient,
  ApolloNextAppProvider,
  InMemoryCache,
} from '@apollo/experimental-nextjs-app-support';

import { useAuthStore } from '@/store/auth-store';
import { setContext } from '@apollo/client/link/context';

// have a function to create a client for you
function makeClient() {
  const httpLink = new HttpLink({
    // this needs to be an absolute url, as relative urls cannot be used in SSR
    uri:
      process.env.NEXT_PUBLIC_GRAPHQL_URL ??
      'http://localhost:3000/api/graphql',
    // you can disable result caching here if you want to
    // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
    fetchOptions: { cache: 'no-store' },
    // you can override the default `fetchOptions` on a per query basis
    // via the `context` property on the options passed as a second argument
    // to an Apollo Client data fetching hook, e.g.:
    // const { data } = useSuspenseQuery(MY_QUERY, { context: { fetchOptions: { cache: "force-cache" }}});
  });

  // make sure to include the essential "headers" option in
  const AuthLink = setContext((_, { headers }) => {
    const token = useAuthStore.getState().token;
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });
  // use the `ApolloClient` from "@apollo/experimental-nextjs-app-support"
  return new ApolloClient({
    // use the `InMemoryCache` from "@apollo/experimental-nextjs-app-support"
    cache: new InMemoryCache(),

    link: AuthLink.concat(httpLink),
  });
}

// you need to create a component to wrap your app in
// eslint-disable-next-line no-undef
export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <>
      <ApolloNextAppProvider makeClient={makeClient}>
        {children}
      </ApolloNextAppProvider>
    </>
  );
}
