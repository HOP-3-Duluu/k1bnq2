import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Share_svg = props => {
  return (
    <Svg
      width={17}
      height={16}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M2.72 8v5.333c0 .354.143.693.398.943s.6.39.961.39h8.159c.36 0 .707-.14.962-.39s.398-.589.398-.943V8M10.878 4l-2.72-2.667L5.44 4M8.159 1.333V10"
        stroke="#0768B5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
