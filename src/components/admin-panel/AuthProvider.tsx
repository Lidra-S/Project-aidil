"use client"
import { SessionProvider } from 'next-auth/react';
import React, { ReactNode } from 'react';

interface PropsType {
    childern: ReactNode;
}
const AuthProvider = ({childern}: PropsType) => {
  return (
    <SessionProvider>
        {childern}
    </SessionProvider>
  )
}

export default AuthProvider;