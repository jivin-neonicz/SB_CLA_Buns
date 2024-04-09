// SvgIcons.tsx
import React from 'react';
import { SvgXml } from 'react-native-svg';

const SvgIcons = {
  Heart: `
    <svg width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M220.18 59.79a54.05 54.05 0 0 0-76.31 0L128 74.51l-15.87-14.77a54 54 0 0 0-76.33 76.41l89.35 90.66a4 4 0 0 0 5.7 0l89.33-90.64a54 54 0 0 0 0-76.38m-5.67 70.74L128 218.3l-86.53-87.79a46 46 0 0 1 65.06-65.06l.1.1l18.64 17.36a4 4 0 0 0 5.46 0l18.64-17.36l.1-.1a46 46 0 1 1 65 65.08Z" fill="#000000"></path>
    </svg>
  `,
  Phone: `
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.889 8A.894.894 0 0 0 8 8.889C8 26.073 21.927 40 39.111 40a.894.894 0 0 0 .889-.889V32.52a.894.894 0 0 0-.889-.889c-2.449 0-4.84-.395-7.057-1.127l-.01-.004a.878.878 0 0 0-.896.215l-4.67 4.67l-.648-.332c-5.531-2.834-10.067-7.348-12.883-12.884l-.33-.647l4.67-4.67a.896.896 0 0 0 .226-.913a22.458 22.458 0 0 1-1.124-7.05A.894.894 0 0 0 15.5 8zM6 8.889A2.894 2.894 0 0 1 8.889 6H15.5a2.894 2.894 0 0 1 2.889 2.889c0 2.254.36 4.415 1.026 6.43l.002.006l.002.007a2.895 2.895 0 0 1-.719 2.934l-3.634 3.635A27.624 27.624 0 0 0 26.1 32.933l3.633-3.633a2.878 2.878 0 0 1 2.953-.694a20.546 20.546 0 0 0 6.424 1.024A2.894 2.894 0 0 1 42 32.519v6.592A2.894 2.894 0 0 1 39.111 42C20.822 42 6 27.178 6 8.889" fill="#000000"></path>
    </svg>
  `,
  Search: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.25 2a8.25 8.25 0 1 1-16.5 0a8.25 8.25 0 0 1 16.5 0zm-6.83 8.25a6.75 6.75 0 1 0 13.5 0a6.75 6.75 0 0 0-13.5 0zm6.83 6a1 1 0 0 1-1-1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1z" fill="#000000"></path>
    </svg>
  `,
  // Add more SVG strings as needed...
};

interface SvgIconProps {
  width?: number;
  height?: number;
}

export const HeartIcon: React.FC<SvgIconProps> = ({ width = 24, height = 24 }) => (
  <SvgXml xml={SvgIcons.Heart} width={width} height={height} />
);

export const PhoneIcon: React.FC<SvgIconProps> = ({ width = 24, height = 24 }) => (
  <SvgXml xml={SvgIcons.Phone} width={width} height={height} />
);

export const SearchIcon: React.FC<SvgIconProps> = ({ width = 24, height = 24 }) => (
  <SvgXml xml={SvgIcons.Search} width={width} height={height} />
);
// Add more components for other SVG icons...

export default SvgIcons;
