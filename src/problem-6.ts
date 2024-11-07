interface Profile {
  name: string;
  age: number;
  email: string;
}

const updateProfile = (
  profile: Profile,
  updates: Partial<Profile>
): Profile => {
  return { ...profile, ...updates };
};
