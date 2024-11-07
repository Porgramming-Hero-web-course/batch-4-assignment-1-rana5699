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

// Sample Input :
// const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
// console.log(updateProfile(myProfile, { name: "Md Sohel Rana" }));
