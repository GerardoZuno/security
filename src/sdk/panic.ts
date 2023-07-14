/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {fetchAccessToken, getToken} from './auth';

export const API_URL = 'https://api.staging.security.stetamalo.cloud';

export const createPanic = async (data: {
  incidenceTimeUserAt: string;
  deviceId: string;
  latitude: number;
  longitude: number;
  reason: string;
}) => {
  const token = await getToken();
  console.log('token2:', token);
  const response = await fetch(`${API_URL}/panic`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
    },
    body: JSON.stringify(data),
  });
  const responseData = await response.json();
  console.log('responseData:', responseData);
  return response;
};


export const getUserInfo = async () => {
  const token = await getToken();
  console.log('token:', token);
  const response = await fetch(`${API_URL}/identity/user`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
    },

  });
  return response.json();
};


export const updateUserInfo = async (data: any) => {
  const token = await getToken();
  console.log('update', token);
  const response = await fetch(`${API_URL}/config/CONFIG/APP`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
    },
    body: JSON.stringify(data),
  });

  return response.json();
};

export const getThemes = async () => {
  const API = 'https://api.staging.security.stetamalo.cloud/config/CONFIG/APP';

    const response = await fetch(API, {
      method: 'GET',
    });

      return response.json();

};










// {
//   "incidenceTimeUserAt": "{{$isoTimestamp}}",
//   "deviceId": "{{$randomUUID}}",
//   "latitude": {{$randomLatitude}},
//   "longitude": {{$randomLongitude}},
//   "reason": "OTHER"
// }


// eyJraWQiOiJTRHhcL2ZZZk1XWEU5cWQ2WERTcnJpa1lkVGhZbEk0eGN6cWE0WUpuWXZKMD0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoiQzcxbDFoOUctWVpjellqSFV6M2dudyIsInN1YiI6ImRmODc0NmQ2LTYxZGYtNDMyMi1iMjM3LWZmM2NlNDc0ZWFhMyIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX3Q3d0xRMDZXcSIsInBob25lX251bWJlcl92ZXJpZmllZCI6dHJ1ZSwiY29nbml0bzp1c2VybmFtZSI6ImRmODc0NmQ2LTYxZGYtNDMyMi1iMjM3LWZmM2NlNDc0ZWFhMyIsImN1c3RvbTpvcmdhbml6YXRpb25JZCI6Imp1YXJleiIsIm9yaWdpbl9qdGkiOiI1OTljMjJjZS1hNzM5LTQwODEtYmU5Zi1mZDVlOThhN2U3MGUiLCJjdXN0b206dGVuYW50SWQiOiJURTAxSDFNR1FURk5aMkFIQTVXNUgzSkZCNUtYIiwiYXVkIjoiN2w0NGltZXFyNXFkcmxqZWUydjQ5MGtuZDUiLCJldmVudF9pZCI6IjMxZWM2ZmQxLTk1NjYtNGU1Yi05YmY0LWM5OTMxMjVjMGE4ZCIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjg1Mzg5NTg2LCJwaG9uZV9udW1iZXIiOiIrNTIzMzI5ODg5NzgyIiwiZXhwIjoxNjg1NDAwMzg2LCJjdXN0b206cm9sZSI6InVzZXIiLCJpYXQiOjE2ODUzODk1ODcsImp0aSI6Ijc3NDAwNzAxLWNjZGItNGU0Yi1iYjZlLTZjYmRlZGFkZmZhMSJ9.S-K3Vti0tMd5QtPueHyaCC1PanLSc6vDtDL16x9IE1DkCtd7Ny1YY4vX-Wq87wza9WnrHylE54nAhc7qA656j351M5scLb__OGXzKWQQ1y9sTzMYrEqpA10OCsUkw-wAWnEsOn48i7ZN0e0ENf-BZIa7CvGlK7q4zrhHXwtTEzdfpLconEtqsu8iz23FlClfJE4zSu8XvJO__8am_SITHZk3KlR9522-bhpwmI7IGxmarwLDtpYDULUl1POi5Ox-ZMIGA_qxm8F7Gtg4ewQ9puJHXXlDxQnUIeOXTcZ8AZcsDEzdVxYUZyl3aiOdy3C1hCbQkBAzMq_wgFxmyqeYlQ
