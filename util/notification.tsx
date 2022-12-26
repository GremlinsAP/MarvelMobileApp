import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { useState, useEffect, useRef } from 'react';
import { Platform, Text } from 'react-native';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const NotificationHandler = () => {
  const notificationListener = useRef<{ remove: () => void }>();
  const responseListener = useRef<{ remove: () => void }>();

  useEffect(() => {
    registerForPushNotificationsAsync();
  }, []);

  return <>
  </>
}

export default NotificationHandler;

export const schedulePushNotification = async (title: string, body: string, data: { data: string } = { data: "Empty" }, delay: number = 2) => await Notifications.scheduleNotificationAsync({
  content: {
    title: title,
    body: body,
    data: data,
  },
  trigger: { seconds: delay },
});

const registerForPushNotificationsAsync = async (): Promise<string> => {
  let token: string;

  if (Platform.OS === 'android') await Notifications.setNotificationChannelAsync('default', {
    name: 'default',
    importance: Notifications.AndroidImportance.MAX,
    vibrationPattern: [0, 250, 250, 250],
    lightColor: '#FF231F7C',
  });

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted')
      finalStatus = (await Notifications.requestPermissionsAsync()).status;

    if (finalStatus !== 'granted') return;
    
    token = (await Notifications.getExpoPushTokenAsync()).data;
  }

  return token;
}