"use client";

import { useOCAuth } from "@opencampus/ocid-connect-js";
import { jwtDecode } from "jwt-decode";
import React, { createContext } from "react";

interface UserDetailsContextType {
  user: String;
  setUser: (user: String) => void;
  userAddress: String;
  setUserAddress: (userAddress: String) => void;
}

const UserDetailsContext = createContext<UserDetailsContextType | undefined>(
  undefined
);

interface UserDetailsProviderProps {
  children: React.ReactNode;
}

interface DecodedToken {
  user_id: number;
  eth_address: string;
  edu_username: string;
  iss: string;
  iat: number;
  exp: number;
  aud: string;
  [key: string]: any;
}

export const UserDetailsContextProvider: React.FC<UserDetailsProviderProps> = ({
  children,
}) => {
  const [user, setUser] = React.useState<String>("");
  const [userAddress, setUserAddress] = React.useState<String>("");

  const contextValue: UserDetailsContextType = {
    user,
    setUser,
    userAddress,
    setUserAddress,
  };

  return (
    <UserDetailsContext.Provider value={contextValue}>
      {children}
    </UserDetailsContext.Provider>
  );
};

const useUserDetailsContext = (): UserDetailsContextType => {
  const context = React.useContext(UserDetailsContext);
  if (!context) {
    throw new Error(
      "useUserDetailsContext must be used within a UserDetailsContextProvider"
    );
  }
  return context;
};

export { useUserDetailsContext };
