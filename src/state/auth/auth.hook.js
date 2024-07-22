import { useMutation } from '@tanstack/react-query';

import { loginApi } from './auth.api';

export const useLoginApi = (changeForm) =>
  useMutation({
    mutationFn: (payload) => loginApi(payload),
    onError: (err) => {
      // if (err?.resp?.data?.message) {
      //   showSnackbar({ message: err?.resp?.data?.message, severity: 'error' });
      // } else {
      //   showSnackbar({ message: 'Something Went Wrong', severity: 'error' });
      // }
      // changeForm();
      changeForm(err);
    },
    onSuccess: (data) => {
      changeForm(data);
    },
  });
