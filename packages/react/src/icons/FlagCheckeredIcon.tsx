import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line"/><path d="M48,116c64-55.43,112,55.43,176,0" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><path d="M48,176c64-55.43,112,55.43,176,0V56C160,111.43,112,.57,48,56V224" strokeWidth="8" className="draw-line"/></>,
  light: <><line strokeWidth="12" className="draw-line"/><path d="M48,116c64-55.43,112,55.43,176,0" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><path d="M48,176c64-55.43,112,55.43,176,0V56C160,111.43,112,.57,48,56V224" strokeWidth="12" className="draw-line"/></>,
  regular: <><path d="M48,176c64-55.43,112,55.43,176,0V56C160,111.43,112,.57,48,56V224" strokeWidth="16" className="draw-line"/><path d="M48,116c64-55.43,112,55.43,176,0" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
  bold: <><line strokeWidth="24" className="draw-line"/><path d="M48,116c64-55.43,112,55.43,176,0" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><path d="M48,176c64-55.43,112,55.43,176,0V56C160,111.43,112,.57,48,56V224" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M227.32,48.75A8,8,0,0,0,218.76,50c-28,24.22-51.72,12.48-79.21-1.13C111.07,34.76,78.78,18.79,42.76,50h0A8,8,0,0,0,40,56V224a8,8,0,0,0,16,0V179.77c26.79-21.16,49.87-9.75,76.45,3.41,16.4,8.11,34.06,16.85,53,16.85,13.93,0,28.54-4.75,43.82-18a8,8,0,0,0,2.76-6V56A8,8,0,0,0,227.32,48.75ZM56,160.44V109.88c16.85-11.28,32.64-11.59,48-7.34v51.74C88.87,150.47,72.87,150.71,56,160.44ZM104,50.87c9.25,2.83,18.61,7.45,28.45,12.32,11.26,5.57,23.11,11.43,35.55,14.56v51.74c15.35,4.25,31.14,3.94,48-7.35v50.11c-16.87,13.32-32.27,13.72-48,8.91V129.49c-21.62-6-42.38-21-64-26.95Z" fill="currentColor"/></>,
  duotone: <><path d="M168,129.48c17.76,4.91,36.1,3.75,56-13.48V56c-19.89,17.23-38.24,18.39-56,13.48Z" opacity="0.2" fill="currentColor"/><path d="M104,162.52c21.62,6,42.38,21,64,27v-60c-21.63-6-42.38-21-64-27Z" opacity="0.2" fill="currentColor"/><path d="M48,116c19.89-17.23,38.24-18.39,56-13.48v-60C86.24,37.61,67.89,38.77,48,56Z" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line"/><path d="M48,116c64-55.43,112,55.43,176,0" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><path d="M48,176c64-55.43,112,55.43,176,0V56C160,111.43,112,.57,48,56V224" strokeWidth="16" className="draw-line"/></>,
};

export const FlagCheckeredIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
