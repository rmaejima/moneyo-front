import { requestGet } from './axios';

type IdealSleepResponse = {
  userId: string;
  bedTime: number;
  wakeUpTime: number;
};

export const getIdealSleepTime = async (userId: string) => {
  const { data } = await requestGet<IdealSleepResponse>(`/sleep/${userId}`);
  return data;
};

export const postIdealSleepTime = async (userId: string) => {
  const response = await requestGet(`/sleep/${userId}`);
  return response;
};
