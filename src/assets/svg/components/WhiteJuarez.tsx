import * as React from 'react';
import Svg, {Path, Defs, Pattern, Use, Image} from 'react-native-svg';
const WhiteJuarez = () => (
  <Svg width={45} height={44} fill="none">
    <Path fill="url(#a)" d="M0 0h45v44H0z" />
    <Defs>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox">
        <Use xlinkHref="#b" transform="matrix(.0046 0 0 .0047 -.01 0)" />
      </Pattern>
      <Image
        xlinkHref="data:image/png;base64,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"
        id="b"
        width={222}
        height={213}
      />
    </Defs>
  </Svg>
);
export default WhiteJuarez;
