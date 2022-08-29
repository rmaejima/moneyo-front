import { useCallback } from 'react';

import useSWR from 'swr';

import { User } from 'types/user';

import { requestGet } from './axios';

type UserResponse = Omit<User, 'bedTime' | 'wakeUpTime'> & {
  bedTime: number;
  wakeUpTime: number;
};

const convertUserResponse = (userResponse: UserResponse): User => {
  return {
    ...userResponse,
    bedTime: new Date(userResponse.bedTime),
    wakeUpTime: new Date(userResponse.wakeUpTime),
  };
};

export const getUser = async (userId: string): Promise<User> => {
  const { data } = await requestGet<UserResponse>(`/user/${userId}`);
  console.log(data);
  return convertUserResponse(data);
};

export const useUser = (userId: string) => {
  const { data, error, mutate } = useSWR(
    `/user/${userId}`,
    async () => await getUser(userId),
  );

  const refetchUser = useCallback(() => {
    mutate();
  }, [mutate]);

  console.log(data);

  return {
    user: data,
    error,
    isLoading: !data && !error,
    refetchUser,
  };
};
