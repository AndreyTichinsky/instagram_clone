import { useEffect } from "react";

export const RedirectComponent: FC = () => {
  useEffect(() => {
    window.location.href = `https://api.instagram.com/oauth/authorize?client_id=941332143041128&redirect_uri=https://otus-instagram-clone.glitch.me/instagram&scope=user_profile,user_media&response_type=code`;
  }, []);
  return null;
};
