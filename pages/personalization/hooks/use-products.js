import { useQuery, useQueryClient } from 'react-query';
import { SEARCH_HISTORY_QUERY } from './use-search-history';
import { useVisitorData } from '../../../shared/client/use-visitor-data';

function getProducts(fpData, search) {
  return fetch(`/api/personalization/get-products`, {
    method: 'POST',
    body: JSON.stringify({
      query: search,
      requestId: fpData.requestId,
      visitorId: fpData.visitorId,
    }),
  }).then((res) => res.json());
}

export const GET_PRODUCTS_QUERY = 'GET_PRODUCTS_QUERY';

export function useProducts(search) {
  const { data: fpData } = useVisitorData();

  const queryClient = useQueryClient();

  return useQuery([GET_PRODUCTS_QUERY, search], () => getProducts(fpData, search), {
    enabled: Boolean(fpData),
    onSuccess: async () => {
      await queryClient.refetchQueries([SEARCH_HISTORY_QUERY]);
    },
  });
}
