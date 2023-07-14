import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
  isSaved?: boolean;
}
const Save = ({isSaved}: Props) => (
  <Svg
    width={14}
    height={19}
    fill="none"
    // {...props}
  >
    <Path
      fill="none"
      stroke="#111" // Color del borde
      d="m7 10.153 5.727 5.775V1.248H1.273v14.68L7 10.153Z"
    />
    <Path
      fill={isSaved ? '#111' : 'none'} // Color del relleno
      d="m14 19-7-7.057L0 19V0h14v19Z"
    />
  </Svg>
);
export default Save;
