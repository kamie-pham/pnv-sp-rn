import React, { useEffect } from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import { navigate } from "../navigation";
type Props = {};
import { useSelector, useDispatch } from "react-redux";
import { exampleRequested } from "../redux/actions/lobbyActions";
import styled from "styled-components/native";
import { BaseStyles } from "../_styles/coreStyles";

function HomeScreen({}: Props) {
  const dispatch = useDispatch();
  const exampleValue = useSelector((state: any) => state.lobby.exampleValue);

  useEffect(() => {
    dispatch(exampleRequested());
  }, []);
  useEffect(() => {
    // console.warn('exampleValue', exampleValue)
  }, [exampleValue]);

  return (
    // <Container>
    //   <ItemImage source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}/>
    //   <ItemInfo>
    //     <Heading>Hello React Native</Heading>
    //     <Text>Esse irure id quis culpa laboris consectetur velit ea. Non eu eu sunt non. Magna ea veniam consectetur id commodo adipisicing.</Text>
    //   </ItemInfo>
    // </Container>
    <Container>
      <Title style={BaseStyles.baseText}>My Profile</Title>
      <UserInfoWrapper>
        <UserInfoImage source={require('../assets/images/1.jpg')} />
        <UserInfoData>
          <Text style={{fontSize: 20, fontWeight: '700', color: '#091C3F'}}>Hi, Ben Cline</Text>
          <Text style={{fontSize: 14, fontWeight: '400'}}>Welcome to Medtech</Text>
        </UserInfoData>
      </UserInfoWrapper>
      <LinkWrapper>
          <LinkSection>
            <LinkIcon source={require('../assets/images/1.jpg')} />
            <LinkInfo>
              <Text>Private Account</Text>
              <Text>&gt;</Text>
            </LinkInfo>
          </LinkSection>
          <LinkSection>
            <LinkIcon source={require('../assets/images/1.jpg')} />
            <LinkInfo>
              <Text>My Consults</Text>
              <Text>&gt;</Text>
            </LinkInfo>
          </LinkSection>
          <LinkSection>
            <LinkIcon source={require('../assets/images/1.jpg')} />
            <LinkInfo>
              <Text>My orders</Text>
              <Text>&gt;</Text>
            </LinkInfo>
          </LinkSection>
          <LinkSection>
            <LinkIcon source={require('../assets/images/1.jpg')} />
            <LinkInfo>
              <Text>Billing</Text>
              <Text>&gt;</Text>
            </LinkInfo>
          </LinkSection>
          <LinkSection>
            <LinkIcon source={require('../assets/images/1.jpg')} />
            <LinkInfo>
              <Text>Faq</Text>
              <Text>&gt;</Text>
            </LinkInfo>
          </LinkSection>
          <LinkSection>
            <LinkIcon source={require('../assets/images/1.jpg')} />
            <LinkInfo ignoreBorder={true}>
              <Text>Settings</Text>
              <Text>&gt;</Text>
            </LinkInfo>
          </LinkSection>
        </LinkWrapper>
    </Container>
  );
}

export default HomeScreen;

const Container = styled.View`
  padding: 48px 23px;
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
`
const UserInfoWrapper = styled.View`
  margin-top: 26px;
  flex-direction: row;
  align-items: center;
`

const UserInfoImage = styled.Image`
  width: 62px;
  height: 62px;
  border-radius: 62px;
`

const UserInfoData = styled.View`
  margin-left: 16px;
`

const LinkWrapper = styled.View`
  margin-top: 44px;
`

const LinkSection = styled.View`
  flex-direction: row;
  margin-bottom: 16px;
  align-items: center;
`

const LinkIcon = styled.Image`
  width: 20px;
  height: 20px;
`

const LinkInfo = styled.View<{ignoreBorder?: boolean}>`
  margin-left: 27px;
  flex: 1;
  padding-bottom: 14px;
  ${({ignoreBorder}) => !ignoreBorder ? `border-bottom-width: 1px;` : ''}
  border-color: #091C3F14;
  border-style: solid;
  justify-content: space-between;
  flex-direction: row;
`