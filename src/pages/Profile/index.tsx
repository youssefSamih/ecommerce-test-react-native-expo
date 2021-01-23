import React from "react";
import ProfileButton from "../../components/ProfileButton";
import registerForPushNotifications from "../../util/registerForPushNotifications";
import { Container, SafeContainer } from "./styles";

interface ProfileProps {
  navigation: any;
}

const Profile = ({ navigation }: ProfileProps) => {
  return (
    <SafeContainer>
      <Container>
        <ProfileButton
          name="envelope-o"
          margin={10}
          onPress={async () => await registerForPushNotifications()}
        >
          Enable notification
        </ProfileButton>
        <ProfileButton name="cube">toggle RTL</ProfileButton>
        <ProfileButton name="location-arrow">Enable location</ProfileButton>
        <ProfileButton name="truck" margin={10}>
          Manage Addresses
        </ProfileButton>
      </Container>
    </SafeContainer>
  );
};

export default Profile;
