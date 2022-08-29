export interface User {
  userId: string;
  name: string;
  level: number;
  experiencePoint: number;
  experiencePointToNextLevel: number;
  bedTime: Date;
  wakeUpTime: Date;
  castleName: string;
  castlePoint: number;
}

export type UserProfile = Omit<User, 'wakeUpTime' | 'bedTime'>;
