import React, { useEffect } from "react";
import { Switch } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ProfileButton from "../../components/ProfileButton";
import colors from "../../styles/colors";
import registerForPushNotifications from "../../util/registerForPushNotifications";
import { Container, SafeContainer } from "./styles";
import { toggleRtl } from "../../store/modules/rtl/actions";

interface ProfileProps {
  navigation: any;
}

const Profile = ({ navigation }: ProfileProps) => {
  const dispatch = useDispatch();
  const isEnabled = useSelector((state: any) => state.rtl);
  const toggleSwitch = () => dispatch(toggleRtl(!isEnabled));
  return (
    <SafeContainer>
      <Container>
        <ProfileButton
          name="envelope-o"
          margin={10}
          onPress={async () => await registerForPushNotifications()}
          title="Enable notification"
          rtl={isEnabled}
        />
        <ProfileButton name="cube" title="toggle RTL" rtl={isEnabled}>
          <Switch
            trackColor={{ false: "#767577", true: "#ed7059" }}
            thumbColor={isEnabled ? colors.primary : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </ProfileButton>
        <ProfileButton
          rtl={isEnabled}
          name="location-arrow"
          title="Enable location"
        />
        <ProfileButton
          rtl={isEnabled}
          name="truck"
          margin={10}
          title="Manage Addresses"
        />
      </Container>
    </SafeContainer>
  );
};

export default Profile;
