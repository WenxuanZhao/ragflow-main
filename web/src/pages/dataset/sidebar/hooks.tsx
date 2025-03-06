import { Routes } from '@/routes';
import { useCallback } from 'react';
<<<<<<< HEAD
import { useNavigate } from 'umi';

export const useHandleMenuClick = () => {
  const navigate = useNavigate();

  const handleMenuClick = useCallback(
    (key: Routes) => () => {
      navigate(`${Routes.DatasetBase}${key}`);
    },
    [navigate],
=======
import { useNavigate, useParams } from 'umi';

export const useHandleMenuClick = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleMenuClick = useCallback(
    (key: Routes) => () => {
      navigate(`${Routes.DatasetBase}${key}/${id}`);
    },
    [id, navigate],
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
  );

  return { handleMenuClick };
};
