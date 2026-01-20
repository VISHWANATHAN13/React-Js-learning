import React from 'react'
// import {QueryClientProvider,useQueryClient} from '@tanstack/react-queryClient';
import { QueryClient, QueryClientProvider, useQueryClient } from '@tanstack/react-query'
import Test1 from './Test1';


const App = () => {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Test1 />
    </QueryClientProvider>
  )
}

export default App