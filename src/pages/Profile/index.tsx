import React from "react";
import ProfileButton from "../../components/ProfileButton";
import {
  Container,
  Email,
  HeaderProfile,
  Name,
  ProfileAvatar,
  ProfileInfo,
  SafeContainer,
  SignOutText,
  SingOutButton,
} from "./styles";
import { FontAwesome } from "@expo/vector-icons";

interface ProfileProps {
  navigation: any;
}

const Profile = ({ navigation }: ProfileProps) => {
  // const dispatch = useDispatch();
  // const UserProfile = useSelector((state: any) => state.profile);

  function handleSignOut() {
    // dispatch(ProfileActions.SignOut());
    navigation.navigate("SignIn");
  }
  return (
    <SafeContainer>
      <Container>
        <HeaderProfile>
          <ProfileAvatar
            source={{
              uri:
                "https://gravatar.com/avatar/1c8e8a6e8d1fe52b782b280909abeb38?s=400&d=robohash&r=x",
            }}
          />
          <ProfileInfo>
            <Name>Youssef</Name>
            <Email>youssef.samih97@gmail.com</Email>
          </ProfileInfo>
        </HeaderProfile>
        <ProfileButton name="envelope-o" margin={10}>
          Enable notification
        </ProfileButton>
        <ProfileButton name="cube">toggle RTL</ProfileButton>
        <ProfileButton name="location-arrow">Enable location</ProfileButton>
        <ProfileButton name="truck" margin={10}>
          Manage Addresses
        </ProfileButton>
        <SingOutButton onPress={handleSignOut}>
          <SignOutText>Sign Out</SignOutText>
          <FontAwesome
            style={{ marginLeft: 20 }}
            name="sign-out"
            color="rgba(255, 0, 0, 0.6)"
            size={20}
          />
        </SingOutButton>
      </Container>
    </SafeContainer>
  );
};

export default Profile;
