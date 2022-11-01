import { gql } from "@apollo/client";

export const getClientLoading = gql`
  {
    clientLoading @client
  }
`;