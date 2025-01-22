/*export const useGetUserInfo=()=>{
    const{name,profilePhoto,userID,isAuth}=JSON.parse(
        localStorage.getItem("auth")
    );
    
return {name,profilePhoto,userID,isAuth};
};*/
export const useGetUserInfo = () => {
    const authData = localStorage.getItem("auth");
  
    
    if (!authData) {
      return { name: "", profilePhoto: "", userID: "", isAuth: false };
    }
  
    try {
      const { name, profilePhoto, userID, isAuth } = JSON.parse(authData);
      return { name, profilePhoto, userID, isAuth };
    } catch (error) {
      console.error("Error parsing auth data:", error);
      return { name: "", profilePhoto: "", userID: "", isAuth: false };
    }
  };


