import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M208,152a80,80,0,0,1-160,0C48,88,96,24,128,24S208,88,208,152Z" strokeWidth="8" className="draw-line"/><polyline points="152 152 160 112 128 104 172.68 53.93" strokeWidth="8" className="draw-line"/></>,
  light: <><path d="M208,152a80,80,0,0,1-160,0C48,88,96,24,128,24S208,88,208,152Z" strokeWidth="12" className="draw-line"/><polyline points="152 152 160 112 128 104 172.68 53.93" strokeWidth="12" className="draw-line"/></>,
  regular: <><path d="M208,152a80,80,0,0,1-160,0C48,88,96,24,128,24S208,88,208,152Z" strokeWidth="16" className="draw-line"/><polyline points="152 152 160 112 128 104 172.68 53.93" strokeWidth="16" className="draw-line"/></>,
  bold: <><path d="M208,152a80,80,0,0,1-160,0C48,88,96,24,128,24S208,88,208,152Z" strokeWidth="24" className="draw-line"/><polyline points="152 152 160 112 128 104 172.68 53.93" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M216,152a88.11,88.11,0,0,1-87.8,88c-50.66.12-90.21-43-88.12-93.62,1.21-29.21,11.71-60.54,29.23-86.82C87.5,32.29,109.43,16,128,16c13.25,0,28.23,8.32,42.34,23a4,4,0,0,1,.09,5.44L122,98.67a8,8,0,0,0,4,13.09l24.61,6.15-6.51,32.52a8,8,0,0,0,6.28,9.41A7.7,7.7,0,0,0,152,160a8,8,0,0,0,7.83-6.43l8-40a8,8,0,0,0-5.9-9.33l-19.16-4.79,36.89-41.33a4,4,0,0,1,6.29.41c.24.34.47.68.7,1C205.3,87.54,216,121.23,216,152Z" fill="currentColor"/></>,
  duotone: <><path d="M208,152a80,80,0,0,1-160,0C48,88,96,24,128,24S208,88,208,152Z" opacity="0.2" fill="currentColor"/><path d="M208,152a80,80,0,0,1-160,0C48,88,96,24,128,24S208,88,208,152Z" strokeWidth="16" className="draw-line"/><polyline points="152 152 160 112 128 104 172.68 53.93" strokeWidth="16" className="draw-line"/></>,
};

export const EggCrackIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
