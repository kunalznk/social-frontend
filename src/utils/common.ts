import { gql } from "@apollo/client";

export const getClientLoading = gql`
  {
    clientLoading @client
  }
`;

export const setClientLoading = gql`
query setClientLoading($loading: Boolean) 
{ clientLoading }
`;

export const logOut = () => {
  localStorage.clear()
}