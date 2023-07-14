import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';
const Send = () => (
  <Svg width={20} height={20} fill="none">
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        d="m19.334.667.613.262a.666.666 0 0 0-.876-.876l.263.614Zm-18.667 8-.263-.614a.667.667 0 0 0-.08 1.186l.343-.572Zm10.667 10.666-.572.343a.666.666 0 0 0 1.185-.08l-.613-.263ZM19.07.053l-18.667 8L.93 9.28l18.666-8-.525-1.227ZM.324 9.24l6.667 4.001.685-1.144-6.666-4L.324 9.24Zm6.436 3.77 4 6.667 1.144-.685-4-6.667-1.144.685Zm5.186 6.587 8-18.667-1.227-.525-8 18.667 1.227.525Zm6.916-19.4-12 12 .944.943 12-12-.944-.944v.001Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Send;
