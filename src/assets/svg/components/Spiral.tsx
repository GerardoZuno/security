import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const Spiral = () => (
  <Svg width={19} height={20} fill="none">
    <Path
      fill="#fff"
      d="M17.669 14.204a12.57 12.57 0 0 1-.347.78l-.023.043A9.108 9.108 0 0 1 9.176 20 9.18 9.18 0 0 1 .636 7.462c.106-.261.223-.522.348-.78a.585.585 0 1 1 1.044.53 7.339 7.339 0 0 0-.304.67 7.99 7.99 0 0 0 14.534 6.607l.023-.043A7.988 7.988 0 0 0 4.83 4.114l2.6.612a.588.588 0 0 1-.133 1.17.559.559 0 0 1-.136 0L3.35 4.986a.593.593 0 0 1-.432-.725L3.813.45a.585.585 0 0 1 1.138.27L4.413 3a9.155 9.155 0 0 1 13.252 11.205h.004Z"
    />
  </Svg>
);
export default Spiral;
