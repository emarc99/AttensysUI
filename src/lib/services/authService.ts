import { auth } from "../firebase/client";
import {
  signInAnonymously,
  onAuthStateChanged,
  User,
  AuthError,
} from "firebase/auth";

export const signInUser = async (): Promise<User> => {
  try {
    // Check if already signed in
    if (auth.currentUser) return auth.currentUser;

    const userCredential = await signInAnonymously(auth);
    return userCredential.user;
  } catch (error) {
    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      "message" in error
    ) {
      console.error("Authentication error details:", {
        code: (error as { code: string }).code,
        message: (error as { message: string }).message,
        fullError: error,
      });
    } else {
      console.error("Unknown authentication error:", error);
    }
    throw error;
  }
};

export const getCurrentUser = (): User | null => {
  return auth.currentUser;
};

export const authStateListener = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
};
